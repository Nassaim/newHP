import React from "react";
import "../css/signup.css";

const Signup = () => {
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
        <input placeholder="아이디를 입력해주세요." />
      </div>
      <div className="box">
        <h1>비밀번호</h1>
        <input placeholder="비밀번호를 입력해주세요." type="password" />
      </div>
      <div className="box">
        <h1>생년월일</h1>
        <input placeholder="비밀번호를 입력해주세요." type="date" />
      </div>
      <div className="box">
        <h1>성별</h1>
        <select>
          <option value="여">여</option>
          <option value="남">남</option>
        </select>
      </div>
      <button className="signupBtn">회원가입</button>
    </section>
  );
};

export default Signup;
