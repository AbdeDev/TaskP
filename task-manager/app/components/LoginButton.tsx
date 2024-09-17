"use client";

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <p className="text-gray-300">Bienvenue, {session.user?.name}!</p>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-md shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300"
        >
          Déconnexion
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn('github')}
      className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-md shadow-md hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
    >
      Connexion avec GitHub
    </button>
  );
}