// lib/initFirebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7aV3fReUtEHqV3iVk4TJVhLRLWnA4XF4",
  authDomain: "verify-firebase-48198.firebaseapp.com",
  projectId: "verify-firebase-48198",
  storageBucket: "verify-firebase-48198.appspot.com",
  messagingSenderId: "37893379320",
  appId: "1:37893379320:web:d805b9c7aeef41f0b8570d",
  measurementId: "G-GHMDW4RGTV"
};

// Firebase初期化し、FirebaseAppオブジェクトを作成
// appが既に存在する場合、そのappを取得する
const getFirebaseApp = () => {
  if (getApps().length === 0) {
    return initializeApp(firebaseConfig);
  } else {
    return getApp();
  }
};

const app = getFirebaseApp();

// FirebaseAppに関連付けられたAuthインスタンスを取得
export const auth = getAuth(app);