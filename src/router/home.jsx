import React, { useEffect, useRef, useState } from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {


  // 회원가입 정보 대신 localStorage
  useEffect(() => {
      //localStorage.clear();
      //localStorage.setItem("test1", "zzzzzz");
  }, []);

    // const [userId, setUserId] = useState('');
    // const [password, setPassword] = useState('');

    // 로그인 정보
    const [loginInfo, setLoginInfo] = useState( {
      userId : '',
      password : '',
    })

    const focusId = useRef();
    const focusPass = useRef();
    const pageNavigate = useNavigate();

    // 로그인 정보 입력
    const getLoginInfoHandler = (e) => {
      setLoginInfo( {
        ...loginInfo,
        [e.target.name] : e.target.value
      })
      
      console.log(e.target.value);
    }

    // 로그인 정보 확인
    const submitHandler = () => {

      if (loginInfo.userId.length < 2) {
        alert('아이디는 최소 2글자 이상 입력해주세요.');
        focusId.current.focus();
        return;
      }

      if (loginInfo.password.length < 5) {
        alert('패스워드는 6글자 이상 입력해주세요.');
        focusPass.current.focus();
        return;
      }

      const memInfo = JSON.parse(localStorage.getItem(loginInfo.userId));

        // 로그인 - 패스워드 확인
        if (memInfo != null && memInfo.password === loginInfo.password ) {
          alert("로그인 성공!");
        } else if (memInfo === null) {
          alert("가입한 이력이 없는 아이디입니다.");
          focusId.current.focus();
          return;

        } else {
          alert("비밀번호를 확인해주세요.");
          focusPass.current.focus();
          return;
        }

        naviMyPageHandler();

    }

    const naviMyPageHandler = () => {
      pageNavigate("/mypage", {state : loginInfo});
    }

    const naviSignupHandler = () => {
      pageNavigate("/signup");
    }


  return (
    <section className="home">
      <h1>
        가장 편한 방법으로
        <br />
        시작해 보세요!
      </h1>
      <h4>
        <span>1분</span>이면 회원가입 가능해요
      </h4>

      <div className="login">
        <input name="userId" ref={focusId}  placeholder="아이디를 입력해주세요." onChange={getLoginInfoHandler} />
        <input name="password" ref={focusPass} placeholder="비밀번호를 입력해주세요." type="password"  onChange={getLoginInfoHandler}  />
        <button className="loginBtn" onClick={submitHandler}>로그인</button>
      </div>

      <div className="line">
        <p>
          <span onClick={naviSignupHandler}>회원가입</span>&nbsp;OR SNS
        </p>
      </div>

      <button className="google">
        <div className="text">
          <p>구글 로그인</p>
        </div>
        <div>
          <img src="./images/google.png" />
        </div>
      </button>
      <button className="kakao">
        <div className="text">
          <p>카카오 로그인</p>
        </div>
        <div>
          <img src="./images/kakao.png" />
        </div>
      </button>
      <button className="git">
        <div className="text">
          <p>깃 로그인</p>
        </div>
        <div>
          <img src="./images/git.png" />
        </div>
      </button>
    </section>
  );
};

export default Home;
