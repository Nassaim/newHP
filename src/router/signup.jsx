import React, { useEffect, useRef, useState } from "react";
import "../css/signup.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Signup = () => {

  const focusId = useRef();
  const focustPassword = useRef();
  const focusBirthday = useRef();
  const focusGender = useRef();
  const loginNavigate = useNavigate();

  const [signupInfo , setSignupInfo] = useState ({
      //memNo : '',
      userId : '',
      password : '',
      birthDay : '',
      gender : '',
      nickName : '',
      bio : '',
      introduction : '',
      

  }) 

  const getSignupInfoHandler = (e) => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name] : e.target.value
     }) ;

  }

  const submitHandler = () => {

    // validation
    const findUser = localStorage.getItem(signupInfo.userId);

    if (findUser != null){
      alert('이미 가입된 아이디입니다.');
      focusId.current.focus();
      return;
    }

    if (signupInfo.userId.length < 2) {
      alert('아이디는 최소 2글자 이상 입력해주세요.');
      focusId.current.focus();
      return;
    } 

    if (signupInfo.password.length < 5) {
      alert('패스워드는 6글자 이상 입력해주세요.');
      focustPassword.current.focus();
      return;
    }

    if (signupInfo.birthDay >  moment().format('YYYY-MM-DD')) {
      alert('생년월일은 오늘 이전 날짜여야합니다.')
      focusBirthday.current.focus();
      return;
    }

    alert("회원가입이 되었습니다!");

    const newUser = {userId : signupInfo.userId, password : signupInfo.password, birthDay : signupInfo.birthDay, gender : signupInfo.gender, nickName : '', bio : '', introduction : ''};
    localStorage.setItem(signupInfo.userId, JSON.stringify(newUser));

    naviLoginHandler();
    
  }

  const naviLoginHandler = () => {
      loginNavigate("/")
  }

  return (
    <section className="signup">
      <h1>
        가장 편한 방법으로
        <br />
        시작해 보세요!
      </h1>
      <h4>
        <span>1분</span>이면 회원가입 가능해요
      </h4>

      <div className="box">
        <h1>아이디</h1>
        <input name="userId" ref={focusId} placeholder="아이디를 입력해주세요." onChange={getSignupInfoHandler}/>
      </div>
      <div className="box">
        <h1>비밀번호</h1>
        <input name="password" ref={focustPassword} placeholder="비밀번호를 입력해주세요." type="password" onChange={getSignupInfoHandler}/>
      </div>
      <div className="box">
        <h1>생년월일</h1>
        <input name="birthDay" ref={focusBirthday} placeholder="생년월일을 입력해주세요." type="date" onChange={getSignupInfoHandler} />
      </div>
      <div className="box">
        <h1>성별</h1>
        <select name="gender" ref={focusGender} onChange={getSignupInfoHandler}>
          <option value="여">여</option>
          <option value="남">남</option>
        </select>
      </div>
      <button className="signupBtn" onClick={submitHandler}>회원가입</button>
    </section>
  );
};

export default Signup;
