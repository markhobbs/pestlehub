// Snippets.tsx;
import Link from "next/link";
import dictionary from '@/data/dictionary.json';
const snippets = dictionary.snippets;

export function ForgottenPassword() {
  return <Link 
    className="ml-2 text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
    href={{pathname: "/pages/recover" }}>
    {snippets.forgottenPassword}
  </Link>
};

export function NoBookmarks() {
  return <p className="mb-4">{snippets.noBookmarks}</p>
};

export function NoCreations() {
  return <p className="mb-4">{snippets.noCreations}</p>
};

export function NoIngredients() {
  return <div 
    className="bg-red-100 border border-red-600 text-red-700 px-4 py-3 rounded relative" 
    role="alert">
    <strong className="font-bold">{snippets.noIngredients}</strong>
  </div>
};

export function NoMethods() {
  return <div 
    className="bg-red-100 border border-red-600 text-red-700 px-4 py-3 rounded relative" 
    role="alert">
    <strong className="font-bold">{snippets.noMethods}</strong>
  </div>
};

export function NoUserAccount() {
  return <p>
    <Link 
      className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
      href={"/login"}>Login</Link> {snippets.noAccount}
    </p>
};

export function Inspiration() {
  return <span className="ml-2">
    <Link 
      className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
      href={"/pages/search"}>
      {snippets.inspiration.link}
    </Link> {snippets.inspiration.additional}
  </span>
};



