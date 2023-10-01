"use client"

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../../lib/initFirebase"
import { useRouter } from "next/navigation"

const Button = () => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result) {
      // ログインしたユーザー情報を取得する
      const user = result.user;
      // Google APIを直接利用したいなら、Google Access Tokenを取得できる
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // ログイン成功後、ホームページにリダイレクト
      router.push("/");
      return user;
    }
  }
  return (
    <div>
      <button onClick={loginWithGoogle}>test</button>
    </div>
  )
}

export default Button;