from conn import connect_to_mysql
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_caching import Cache
from flask_httpauth import HTTPTokenAuth
from time import time
from config import config
import os
import jwt
import uuid
import bleach
import logging
import base64

# Initialize the Flask App
app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)
cache = Cache(app, config={'CACHE_TYPE': 'SimpleCache', 'CACHE_DEFAULT_TIMEOUT': 300})
CORS(app, resources={r"/*": {"origins": ["http://localhost:8082"]}})
auth = HTTPTokenAuth(scheme='Bearer')
allowed_tags = ['p', 'b', 'i', 'em', 'sub']

## DISHES ##
@app.route('/dishes', methods=['POST'])
@auth.login_required
def dishesCreate():
    cursor = None
    cnx = None
    try:
        data = request.json
        
        if data and 'dishes' in data:
            _dishes = data['dishes']
            if _dishes and len(_dishes) >= 1 and len(_dishes) <= 5:
                cnx = connect_to_mysql(config, attempts=3)
                if cnx and cnx.is_connected():
                    with cnx.cursor() as cursor:
                        sqlQuery = "INSERT INTO dish (pID, title, username, time_prep, time_cook) VALUES (%s, %s, %s, %s, %s)"
                        sqlQueryIngredients = "INSERT INTO ingredients (pID, ingredient, amount, unit_ID, state_ID) VALUES (%s, %s, %s, %s, %s)"
                        sqlQueryMethods = "INSERT INTO section (pID, category, heading, body) VALUES (%s, %s, %s, %s)"
                        bindData = []
                        bindDataIngredients = []
                        bindDataMethods = []
                        for dish in _dishes:
                            pidGenerated = base64.urlsafe_b64encode(uuid.uuid4().bytes).rstrip(b'=').decode('utf-8').lower()
                            title = bleach.clean(dish['dish'].get('title'), tags=allowed_tags)
                            ingredients = dish['dish'].get('ingredients', [])
                            methods = dish['dish'].get('methods', [])
                            time_prep = int(dish['dish'].get('time_prep', 0) or 0)
                            time_cook = int(dish['dish'].get('time_cook', 0) or 0)
                            publishedby = bleach.clean(dish['dish'].get('publishedby'), tags=allowed_tags)
                            
                            if title and title != "" and publishedby and publishedby != "":
                                sanitized_title = sanitize_input(title)
                                sanitized_publishedby = sanitize_input(publishedby)
                                bindData.append((
                                    pidGenerated,
                                    sanitized_title,
                                    sanitized_publishedby, 
                                    time_prep,
                                    time_cook))
                            else:
                                response_data = {
                                    'message': 'Title and Publishedby Required'
                                }
                                response = jsonify(response_data)
                                response.status_code = 200
                                return response   
                            
                            if ingredients and len(ingredients) >= 1 and len(ingredients) <= 25:
                                for ingredient in ingredients:
                                    bindDataIngredients.append((
                                        ingredient.get('pid', pidGenerated), 
                                        ingredient.get('name', 'EMPTY'),
                                        ingredient.get('quantity', 1), 
                                        ingredient.get('unit_ID', -1), 
                                        ingredient.get('state_ID', -1)))
                            else:
                                response_data = {
                                    'message': 'Min of 1, Max of 25 Ingredients Required'
                                }
                                response = jsonify(response_data)
                                response.status_code = 200
                                return response

                            if methods and len(methods) >= 1 and len(ingredients) <= 10:
                                for method in methods:
                                    bindDataMethods.append((
                                        method.get('pid', pidGenerated),
                                        method.get('category','dish'), 
                                        method.get('heading', 'No Heading Given'), 
                                        method.get('body', 'No Body Given')))
                            else:
                                response_data = {
                                    'message': 'Min of 1, Max of 10 Methods Required'
                                }
                                response = jsonify(response_data)
                                response.status_code = 200
                                return response
                                        
                        cursor.executemany(sqlQuery, bindData)
                        cursor.executemany(sqlQueryIngredients, bindDataIngredients)
                        cursor.executemany(sqlQueryMethods, bindDataMethods)
                        cnx.commit()

                        response_data = {
                            'message': 'Dishes added successfully!',
                            'dishes': len(bindData),
                            'ingredients': len(bindDataIngredients),
                            'methods': len(bindDataMethods)
                        }
                        response = jsonify(response_data)
                        response.status_code = 200
                        return response
            else:
                response_data = {
                    'message': 'Min of 1, Max of 5 Dishes Required'
                }
                response = jsonify(response_data)
                response.status_code = 200
                return response
        else:
            return show_405_message()
    except Exception as e:
        print(f"Database error: {e}")
        return []
    finally:
        if cursor:
            cursor.close()
        if cnx:
            cnx.close()

@app.route('/dishes/<username>', methods=['GET'])
@auth.login_required
def dishesUserGet(username):
    cursor = None
    cnx = None
    try:
        cnx = connect_to_mysql(config, attempts=3)
        if cnx and cnx.is_connected():
            with cnx.cursor() as cursor:
                cursor.execute("SELECT dish.pID, dish.title FROM dish WHERE dish.username = %s ORDER BY dish.title ASC", (username,))
                creations = cursor.fetchall()
                cursor.execute("SELECT saved.saved_IDX, saved.type, dish.title FROM `saved` LEFT JOIN `dish` ON dish.pID = saved.saved_IDX WHERE saved.username = %s ORDER BY dish.title ASC", (username,))
                bookmarks = cursor.fetchall()
                response_data = {
                    "user" : {
                        "creations": [{
                            "pID": str(creation[0]),
                            "title": str(creation[1]),
                            "type": "dish",
                        } for creation in creations if creation[0]],
                        "bookmarks": [{
                            "pID": str(bookmark[0]),
                            "type": str(bookmark[1]),
                            "title": str(bookmark[2]) if str(bookmark[1]) == "dish" else str(bookmark[2])
                        } for bookmark in bookmarks if bookmark[0]],
                    } 
                }
                response = jsonify(response_data)
                response.status_code = 200
                return response
    except Exception as e:
        print(f"Database error: {e}")
        return []
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

@app.route('/dishes/<username>/<pID>', methods=['DELETE'])
@auth.login_required
def dishesDelete(username, pID):
    cursor = None
    cnx = None
    try:
        cnx = connect_to_mysql(config, attempts=3)
        if cnx and cnx.is_connected():
            with cnx.cursor() as cursor:
                cursor.execute("DELETE FROM ingredients WHERE pID = %s", (pID,))
                cnx.commit()
                cursor.execute("DELETE FROM section WHERE pID = %s", (pID,))
                cnx.commit()
                cursor.execute("DELETE FROM saved WHERE saved_IDX = %s AND username = %s", (pID, username,))
                cnx.commit()
                cursor.execute("DELETE FROM dish WHERE pID = %s AND username = %s AND protected = %s", (pID, username, False,))
                cnx.commit()
                response = jsonify({"Response": "Dish Deleted Successfully"})
                #response = jsonify(f'Dish {pID} Deleted Successfully!')
                response.status_code = 200
                return response
    except Exception as e:
        #logging.error(f"Error deleting dish {pID} for user {username}: {e}")
        response = jsonify(f"Failed to delete dish {pID}")
        response.status_code = 500
        return response
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

@app.route('/dishes/dish/<pID>', methods=['GET'])
@cache.cached(timeout=86400)
def dishGet(pID):
    cursor = None
    cnx = None
    try:
        cnx = connect_to_mysql(config, attempts=3)
        if cnx and cnx.is_connected():
            with cnx.cursor() as cursor:
                cursor.execute("SELECT dish.category, dish.title, dish.time_prep, dish.time_cook, dish.username FROM dish WHERE (dish.pID = %s) ORDER BY dish.title ASC", (pID,))
                row = cursor.fetchone()
                cursor.execute("SELECT ingredients.ingredient, ingredients.amount, unit.code, state.name FROM ingredients LEFT JOIN unit ON unit.unit_ID = ingredients.unit_ID LEFT JOIN state ON state.state_ID = ingredients.state_ID WHERE (ingredients.pID = %s)", (pID,))
                ingredients = cursor.fetchall()
                cursor.execute("SELECT category, heading, body FROM section WHERE (section.pID = %s)", (pID,))
                sections = cursor.fetchall()
                cursor.execute("SELECT flavour.name FROM flavours INNER JOIN flavour ON flavour.flavour_ID = flavours.flavour_ID WHERE flavours.spice_ID = %s ORDER BY flavour.name ASC ", (pID,))
                flavours = cursor.fetchall()
                cursor.execute("SELECT origin.name FROM origins INNER JOIN origin ON origin.origin_ID = origins.origin_ID WHERE origins.spice_ID = %s ORDER BY origin.name ASC", (pID,))
                origins = cursor.fetchall()
                response_data = {
                    "item": {
                        "category": str(row[0]),
                        "title": str(row[1]),
                        "time_prep": str(row[2]) if row[2] else None,
                        "time_cook": str(row[3]) if row[3] else None,
                        "ingredients": [{
                            "ingredient": str(ingredient[0]),
                            "amount": str(ingredient[1]),
                            "unit": str(ingredient[2]),
                            "state": str(ingredient[3])
                        } for ingredient in ingredients if ingredient[0]],
                        "methods": [{
                            "category": str(section[0]),
                            "heading": str(section[1]),
                            "body": str(section[2]) 
                        } for section in sections if section[0]],
                        "flavours": [{
                            "name": str(flavour[0])
                        } for flavour in flavours if flavour[0]],
                        "origins": [{
                            "name": str(origin[0])
                        } for origin in origins if origin[0]]
                    }
                }
                response = jsonify(response_data)
                response.status_code = 200
                return response
    except Exception as e:
        print(f"Database error: {e}")
        return []
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

## BOOKMARKS ## 
@app.route('/bookmarks', methods=['POST'])
@auth.login_required
def bookmarksCreate():
    cursor = None
    cnx = None
    try:
        _json = request.json
        _saved_IDX = _json.get('saved_IDX')
        _type = _json.get('type')
        _username = str(_json.get('username'))
        if not (_saved_IDX and _username and _type):
            return jsonify({"error": "Invalid input"}), 400
        # Sanitize input
        sanitized_username = _username  # Replace with actual sanitization function
        cnx = connect_to_mysql(config, attempts=3)
        if cnx and cnx.is_connected():
            with cnx.cursor() as cursor:
                sqlQuery = "INSERT INTO saved (saved_IDX, username, type) VALUES(%s, %s, %s)"
                bindData = (_saved_IDX, sanitized_username, _type)
                cursor.execute(sqlQuery, bindData)
                cnx.commit()
                response = jsonify({"Response": "Successfully Bookmarked"})
                response.status_code = 200
                return response
    except Exception as e:
        logging.error(f"Error adding saved dish: {e}")
        return jsonify({"error": "Failed to add saved dish"}), 500
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

@app.route('/bookmarks/<username>', methods=['GET'])
@auth.login_required
@cache.cached(timeout=1)
def bookmarksGet(username):
    cursor = None
    cnx = None
    try:
        cnx = connect_to_mysql(config, attempts=3)
        if cnx and cnx.is_connected():
            with cnx.cursor() as cursor:
                cursor.execute(
                    "SELECT saved.saved_IDX, saved.username, saved.type, dish.title "
                    "FROM `saved` "
                    "LEFT JOIN `dish` ON dish.pID = saved.saved_IDX "
                    "WHERE saved.username = %s "
                    "ORDER BY dish.title ASC", (username,)
                )
                rows = cursor.fetchall()
                data = []
                for row in rows:
                    title = str(row[3]) if str(row[2]) == "dish" else str(row[4])
                    data.append({
                        "saved_IDX": str(row[0]),
                        "username": str(row[1]),
                        "type": str(row[2]),
                        "title": title
                    })
                response = jsonify(data)
                response.status_code = 200
                return response
    except Exception as e:
        logging.error(f"Error retrieving saved dishes for user {username}: {e}")
        return jsonify({"error": "Failed to retrieve saved dishes"}), 500
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

@app.route('/bookmarks/<username>/<saved_IDX>', methods=['DELETE'])
@auth.login_required
def bookmarksDelete(username, saved_IDX):
    cursor = None
    cnx = None
    try:
        cnx = connect_to_mysql(config, attempts=3)
        if cnx and cnx.is_connected():
            with cnx.cursor() as cursor:
                cursor.execute("DELETE FROM saved WHERE username = %s AND saved_IDX = %s", (username, saved_IDX))
                cnx.commit()
                response = jsonify({"Response": "Bookmark Deleted"})
                response.status_code = 200
                return response
    except Exception as e:
        logging.error(f"Error deleting saved dish {saved_IDX} for user {username}: {e}")
        return jsonify({"error": "Failed to delete saved dish"}), 500
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

## ACCOUNT ##
@app.route('/users', methods=['POST'])
def usersCreate():
    cursor = None
    cnx = None
    try:     
        _json = request.json
        _username = str(uuid.uuid4())
        _name = str(_json['name'].lower().strip())
        _sanitized_name = sanitize_input(_name)
        _email = str(_json['email'].lower().strip())
        _password = str(_json['password'].strip())

        if _username and _sanitized_name and _email and _password and request.method == 'POST':
            cnx = connect_to_mysql(config, attempts=3)
            if cnx and cnx.is_connected():
                with cnx.cursor() as cursor:		
                    sqlQuery = "INSERT INTO user (username, name, email, password, active, qm_activate) VALUES (%s, %s, %s, %s, %s, %s)"
                    bindData = ( _username, _sanitized_name, _email, _password, False, True)            
                    cursor.execute(sqlQuery, bindData)
                    cnx.commit()
                    response = jsonify({"Response": "Account Created"})
                    response.status_code = 200
                    return response
        else:
            return show_405_message()
    except Exception as e:
        print(f"Database error: {e}")
        return []
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

@app.route('/users/auth', methods=['POST'])
def usersAuth():
    cursor = None
    cnx = None
    try:     
        _json = request.json
        _email = str(_json['email'].lower().strip())
        _password = str(_json['password'].strip())
        if _email and _password and request.method == 'POST':
            ## Sanitize Json
            sanitized_email = sanitize_input(_email)
            sanitized_password = sanitize_input(_password)
            ## Generate Jwt Token //3600
            token = jwt.encode({'username': _email, 'exp': int(time()) + 900000}, app.config['SECRET_KEY'], algorithm='HS256')
            cnx = connect_to_mysql(config, attempts=3)
            if cnx and cnx.is_connected():
                with cnx.cursor() as cursor:
                    result = cursor.execute(
                        "SELECT username "
                        "FROM user "
                        "WHERE email = %s AND password = %s "
                        "AND active = true", (sanitized_email, sanitized_password,))
                    row = cursor.fetchone()
                    respone = jsonify({
                        "uPID" : str(row[0]),
                        "data" : token,
                        "status" : 200
                    })
                    respone.status_code = 200
                    return respone
        else:
            return show_500_message()
    except Exception as e:
        print(f"Database error: {e}")
        return []
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

@app.route('/users/recover', methods=['PUT'])
def usersRecover():
    cursor = None
    cnx = None
    try:     
        _json = request.json
        _email = str(_json['email'].lower().strip())
        _sanitized_email = sanitize_input(_email)
        _reminder = 1

        if _sanitized_email and request.method == 'PUT':
            cnx = connect_to_mysql(config, attempts=3)
            if cnx and cnx.is_connected():
                with cnx.cursor() as cursor:	
                    sqlQuery = "UPDATE user SET qm_recover=%s WHERE email=%s"
                    bindData = (_reminder, _sanitized_email)
                    cursor.execute(sqlQuery, bindData)
                    cnx.commit()
                    response = jsonify({"Response": "Account Recovery Request Successfull"})
                    response.status_code = 200
                    return response
        else:
            return show_405_message()
    except Exception as e:
        print(f"Database error: {e}")
        return []
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

@app.route('/users/verify/<code>', methods=['GET'])
def usersVerifyCode(code):
    cursor = None
    cnx = None
    try:
        if code and request.method == 'GET':
            cnx = connect_to_mysql(config, attempts=3)
            if cnx and cnx.is_connected():

                # GET ALL REMINDER AND ACTICE ROWS IN THE QUE
                with cnx.cursor() as cursor:
                    cursor.execute(
                        "SELECT code, email, type "
                        "FROM email_queue "
                        "WHERE code = %s ", (code,))
                    row = cursor.fetchone()
                    _email = row[1]
                    _type = row[2]
                    
                    # RESET THE REMINDER AND ACTIVE STATES
                    # NOW DONE IN PHP MAILER SCRIPT
                    with cnx.cursor() as cursor:
                        if _type == "recovery":
                            sqlQuery = "UPDATE user SET qm_recover=%s WHERE email=%s"
                            bindData = (False, _email)
                        if _type == "registration":
                            sqlQuery = "UPDATE user SET qm_activate=%s, active=%s WHERE email=%s"
                            bindData = (False, True, _email)

                        cursor.execute(sqlQuery, bindData)
                        cnx.commit()

                        # TIDY Remove all rows belonging to a user
                        with cnx.cursor() as cursor:
                             cursor.execute(
                                 "DELETE FROM email_queue "
                                 "WHERE email = %s ", (_email,))
                             cnx.commit()

                    responed = jsonify(row)
                    responed.status_code = 200
                    return responed
            else:
                return show_500_message()
        else:
            return show_405_message()
            
    except Exception as e:
        print(f"Database error: {e}")
        return []
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

@app.route('/users/change', methods=['PUT'])
def usersChange():
    cursor = None
    cnx = None
    try:
        _json = request.json
        _email = str(_json['email'].lower().strip())
        _password =  str(_json['password'].strip())

        if _password and _email and request.method == 'PUT':
            cnx = connect_to_mysql(config, attempts=3)
            if cnx and cnx.is_connected():
                 with cnx.cursor() as cursor:	
                    sqlQuery = "UPDATE user SET password=%s WHERE email=%s"
                    bindData = (_password, _email)
                    cursor.execute(sqlQuery, bindData)
                    cnx.commit()
                    response = jsonify({"Response": "Account Password Updated"})
                    response.status_code = 200
                    return response
            else:
                return show_500_message()
        else:
            return show_405_message()
            
    except Exception as e:
        print(f"Database error: {e}")
        return []
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'cnx' in locals() and cnx:
            cnx.close()

## Verify Token JWT
@auth.verify_token
def verify_token(token):
    try:
        data = jwt.decode(
            token, 
            app.config['SECRET_KEY'], 
            algorithms=['HS256'])
    except:  # noqa: E722
        return False
    if 'username' in data:
        return data['username']

## ERRORS ##
@app.errorhandler(404)
def show_404_message(error=None):
    message = {
        'status': 404,
        'message': 'Record not found: ' + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 404
    return respone

@app.errorhandler(500)
@cache.cached(timeout=50)
def show_500_message(error=None):
    message = {
        'status': 500,
        'message': 'Not Accessable: ' + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 500
    return respone

@app.errorhandler(405)
@cache.cached(timeout=50)
def show_405_message(error=None):
    message = {
        'status': 405,
        'message': 'Method Not Allowed: ' + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 405
    return respone

## UTILS ##
def is_numeric(x):
    if not isinstance(x, (int, float, complex)):
        raise ValueError('{0} is not numeric'.format(x))
        return False
    return True

def sanitize_input(input_str):
    return bleach.clean(input_str, tags=allowed_tags)

if __name__ == "__main__":
    app.run(host='0.0.0.0')