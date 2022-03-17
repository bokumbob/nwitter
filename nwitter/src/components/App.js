import { useEffect, useState } from "react";
import AppRouter from "./Router";
import {authService} from 'fbase'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  // 아무튼 초기값으로 세팅해준다
  // console.log(authService.currentUser)
  // setInterval(()=>console.log(authService.currentUser),2000)
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      // 위 함수를 통해 로그인한 사람의 정보를 알 수 있음 user에 담김
      if(user){
        setIsLoggedIn(true)
        setUserObj(user);
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
    // useEffect에 의해 컴포넌트가 렌더링된 이후 인증 상태 출력됨
  }, []);
  return (
    <>
    {init ? (<AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />) : ("Initializing...")}
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    {/* 저 카피는 카피라이트 문구를 넣어주고 뒤에는 년도 출력해줌 */}
    </>
  );
}

export default App;
