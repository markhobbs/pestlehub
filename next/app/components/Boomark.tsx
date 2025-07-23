// Boomark.tsx
import React,{useEffect,useState,useContext} from "react";
import {useRouter,usePathname} from "next/navigation";
import {ProfileContext} from '@/ContextProvider/ProfileProvider';
import {DishContext} from '@/ContextProvider/DishProvider';
import {Inspiration} from "@/components/Snippets";
import config from '@/data/config.json';

interface Props {
    table: string;
}
interface Profile {
    profile : {
        username: string;
        token: string;
        status: string;
    }
}

interface Dish {
    setStale: boolean | any;
}

const Boomark:React.FC<Props> = () => {
    const router = useRouter();
    const pathname = usePathname()
    const {profile} = useContext(ProfileContext) as unknown as Profile;
    const {setStale} = useContext(DishContext) as unknown as Dish;
    const [saved, setSaved] = useState(false)
    const currPID = pathname.split("/").slice(-1)[0];
    const {username, status, token} = profile || {};
    const isActive = status === "active";
    const api = `${process.env.NEXT_PUBLIC_API_URI || config.api}`;

    useEffect(() => { 
        const fetchSavedItems = async (
            username: string, 
            currPID: string, 
            setSaved: React.Dispatch<React.SetStateAction<boolean>>
        ) => {
            const url = `${api}/bookmarks/${username}`;
            try {
                const rawResponse = await fetch(url, { 
                    method: 'GET',
                    headers: {
                        'Authorization' : 'Bearer ' + token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }});
                if (rawResponse.status === 200) {
                    const response = await rawResponse.json();
                    if (response) {
                        setSaved(false);
                        response.forEach((item: { saved_IDX: string; type: string }) => {
                            if (currPID === item.saved_IDX) {
                                setSaved(true);
                            }
                        });
                    }
                }
            } catch (error) {
                console.error("Error fetching saved items:", error);
            }
        };

        if (isActive) {
            fetchSavedItems(username, currPID, setSaved);
        }

    }, [currPID, token, username, isActive]);

    const handleSave = async () => {
        const url = `${api}/bookmarks`;
        try {
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    saved_IDX: currPID,
                    username: username,
                    type: 'dish'
                })
            });
            if (rawResponse.status === 200) {
                setSaved(true);
                setStale(true);
            }
        } catch (error) {
            console.error('Failed to fetch saved items:', error);
            // Display error message to the user
        }
    };

    const handleRemove = async () => {
        const url = `${api}/bookmarks/${username}/${currPID}`;
        try {
            const rawResponse = await fetch(url, {
                method: 'DELETE', 
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (rawResponse.status === 200) {
                setSaved(false);
                setStale(true);
            }
        } catch (error) {
            console.error("Error removing:", error);
        }
    };

    const handleClick = (method: "save" | "remove") => {
        if(!isActive) {
            router.push("/login");
        } else {
            switch (method) {
                case "save":
                    handleSave();
                    break;
                case "remove":
                    handleRemove();
                    break;
                default:
                    console.warn("Unknown method:", method);
            }
        }
    };

    return (
        <>
            <button
                className={`cursor-pointer rounded-md bg-emerald-700 mt-4 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 disabled:bg-stone-500 ${saved ? "active" : ""}`}
                onClick={() => handleClick(saved ? "remove" : "save")}>
                {!isActive && "Login to "}
                <span>{saved ? "Remove Bookmark " : "Bookmark"}</span>
            </button> <Inspiration />
        </>
    );
};

Boomark.displayName = 'Boomark';
export default Boomark;