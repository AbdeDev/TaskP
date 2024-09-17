"use client";

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Bienvenue, {session.user?.name}!</p>
        <button onClick={() => signOut()} className="p-2 bg-red-500 text-white">
          Déconnexion
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn('github')} className="p-2 bg-black text-white">
      Connexion avec GitHub
    </button>
  );
}