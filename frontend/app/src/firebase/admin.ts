// Firebase admin SDKの初期化
// NextAuthのcredential認証の際にクライアントから送られたトークンの検証に利用する
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = require("/firebaseSecretKey.json");
export const firebaseAdmin =
  getApps()[0] ??
  initializeApp({
    credential: cert(serviceAccount),
  });

export const auth = getAuth();