'use client';

import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { verifyIdToken } from "./authUtils";

export default function LoginPage() {
  const { loginWithGoogle } = useFirebaseAuth();

  const handleGoogleLogin = () => {
    verifyIdToken(loginWithGoogle);
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}