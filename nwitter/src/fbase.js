import { initializeApp } from "firebase/compat/app";
import "firebase/compat/auth"
// 인증 모듈을 쓰려면 위 모듈을 추가로 불러와야 한다, 파이어베이스는 특정 모듈을 사용할 때 모듈을 추가로 불러와야 하는 규칙이 있다
import "firebase/compat/firestore"
import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
    // appId: import.meta.process.env.REACT_APP_APP_ID
  };

  firebase.initializeApp(firebaseConfig)
  // 얘는 파이어베이스 초기화를 위한 코드 이 코드는 이 파일 내에서만 필요함, export 할 필요 x

  // const app = initializeApp(firebaseConfig);
  export const authService = firebase.auth();
  // 얘는 로그인을 위해 사용할 것이라 다른 파일에서 참조해야 하므로 내보냄

  export const firebaseInstance = firebase;

  export const dbService = firebase.firestore();