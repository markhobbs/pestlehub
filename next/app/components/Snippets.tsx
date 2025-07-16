// Snippets.tsx;
import Link from "next/link";
import dictionary from '@/data/dictionary.json';

export function ForgottenPassword() {
  return <Link 
    className="ml-2 text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
    href={{pathname: "/pages/recover" }}>
    {dictionary.snippets.forgottenPassword}
  </Link>
};

export function NoIngredients() {
  return <div 
    className="bg-red-100 border border-red-600 text-red-700 px-4 py-3 rounded relative" 
    role="alert">
    <strong className="font-bold">{dictionary.snippets.noIngredients}</strong>
  </div>
};

export function NoCurrentMethods() {
  return <div 
    className="bg-red-100 border border-red-600 text-red-700 px-4 py-3 rounded relative" 
    role="alert">
    <strong className="font-bold">{dictionary.snippets.noMethods}</strong>
  </div>
};

export function NoUserAccount() {
  return <p>{dictionary.snippets.noAccount} <Link className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" href={"/login"}>Login</Link>.</p>
};

export function Inspiration() {
  return <span className="ml-2"><Link 
      className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
      href={"/pages/search"}>
      {dictionary.snippets.inspiration.link}
      </Link> {dictionary.snippets.inspiration.additional}
  </span>
};



