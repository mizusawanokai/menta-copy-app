"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import type { AuthProvider } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn as signInByNextAuth } from "next-auth/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    if (!email) return;
    if (!password) return;

    try {
      // Firebase client SDKのメソッドを用いて認証し、idTokenを取得する
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      // 認証後、NextAuthのsignInメソッドに対して取得したidTokenと認証後のリダイレクト先URLを渡す
      await signInByNextAuth("credentials", {
        idToken,
        callbackUrl: "/",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const googleProvider = new GoogleAuthProvider();

  const handleOAuthSignIn = (provider: AuthProvider) => {
    signInWithPopup(auth, provider)
      // 認証に成功したら ID トークンを NextAuth に渡す
      .then((credential) => credential.user.getIdToken(true))
      .then((idToken) => {
        signInByNextAuth("credentials", { idToken });
      })
      .catch((err) => console.error(err));
  };

  return (
      <div>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="メールアドレス"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="パスワード"
        />
        <button
          type="button"
          onClick={() => {
            signIn();
          }}
        >
          ログイン
        </button>
        <br />
        <button onClick={() => handleOAuthSignIn(googleProvider)}>Google</button>
      </div>
  );
};

export default SignIn;