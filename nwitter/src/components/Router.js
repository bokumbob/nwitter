import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from './Navigation';
import Profile from 'routes/Profile';
// as를 이용해서 HashRouter의 이름을 Router로 변경함

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                <Route path='/' element={isLoggedIn ? <Home userObj={userObj} /> : <Auth />} />
                <Route path='/profile' element={<Profile />} />
                {/* <Route path='/profile' element={<Profile replace to ='/' />} /> */}
                {/* 여러 라우트 중 하나만 렌더링할 수 있게 해줌
                그런데 스위치는 이제 사라졌다... */}
                {/* <Route> */}
                {/* {isLoggedIn ? (
                    <Route exact path="/">
                        <Home />
                    </Route>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )
            } */}
                {/* 누이터에 처음 접속했을 때, home 또는 auth 컴포넌트를 보여줄 수 있다 = 루트 페이지! */}
                {/* </Route> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;