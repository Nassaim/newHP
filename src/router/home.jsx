import React from "react";
import "../css/home.css";

const Home = () => {
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
        <input placeholder="아이디를 입력해주세요." />
        <input placeholder="비밀번호를 입력해주세요." type="password" />
        <button className="loginBtn">로그인</button>
      </div>

      <div className="line">
        <p>
          <span>회원가입</span>&nbsp;OR SNS
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
