// Snippets.tsx;
import Link from "next/link";

export function ForgottenPassword() {
  return <Link 
    className="ml-2 text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
    href={{pathname: "/pages/recover" }}>
    Forgot Password?
  </Link>
};

export function NoIngredients() {
  return <div 
    className="bg-red-100 border border-red-600 text-red-700 px-4 py-3 rounded relative" 
    role="alert">
    <strong className="font-bold">Currently No Ingredients.</strong>
  </div>
};

export function NoCurrentMethods() {
  return <div 
    className="bg-red-100 border border-red-600 text-red-700 px-4 py-3 rounded relative" 
    role="alert">
    <strong className="font-bold">Currently No Methods.</strong>
  </div>
};

export function NoUserAccount() {
  return <p>Unable to locate Account! Please try <Link className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" href={"/login"}>Login</Link> again.</p>
};

export function Inspiration() {
  return <span className="ml-2"><Link 
      className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
      href={"/pages/search"}>
      Search
      </Link> for a Spice.
  </span>
};



