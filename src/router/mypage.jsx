import React, { useCallback, useState } from "react";
import "../css/mypage.css";

const Mypage = () => {
  const [status, setStatus] = useState(false); // true:수정 false:view

  const statusToggle = useCallback(() => {
    setStatus(!status);
  }, [status]);

  return (
    <section className="mypage">
      <article className="menuBox">
        <div className="profile">
          <img />

          <div className="nickname">
            <h1>환영합니다!</h1>
            <p>
              nickname <span>님</span>
            </p>
          </div>
        </div>

        <div className="box">
          <div className="menu active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>

            <p>프로필관리</p>
          </div>
          <div className="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>

            <p>마일리지관리</p>
          </div>
        </div>
      </article>
      <article className="content">
        <div className="title">
          <h1>프로필관리</h1>

          <div className="icon" onClick={statusToggle}>
            {status ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            )}
          </div>
        </div>

        <div className="profile">
          <div className="image">
            <img />

            <div className="icon" id={status ? "visible" : "invisible"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </div>
          </div>

          <div className="nickname">
            {status ? <input placeholder="nickname" /> : <h1>nickname</h1>}
          </div>
        </div>

        <div className="box">
          <h1>생년월일</h1>
          {status ? (
            <input placeholder="1998.05.30" type="date" />
          ) : (
            <div>1998.05.30</div>
          )}
        </div>

        <div className="box">
          <h1>성별</h1>
          {status ? (
            <select>
              <option value="여">여</option>
              <option value="남">남</option>
            </select>
          ) : (
            <div>여</div>
          )}
        </div>

        <div className="box">
          <h1>한줄소개</h1>
          {status ? (
            <input placeholder="한줄소개가 들어올 곳 입니다." />
          ) : (
            <div>한줄소개가 들어올 곳 입니다.</div>
          )}
        </div>

        <div className="box">
          <h1>소개글</h1>
          {status ? (
            <textarea placeholder="소개글이 들어올 곳 입니다."></textarea>
          ) : (
            <div className="textarea">소개글이 들어올 곳 입니다.</div>
          )}
        </div>
      </article>

      <article className="confirm">
        <div className="box">
          <h1>
            <span>프로필</span>을 <span>수정</span>하시겠습니까 ?
          </h1>
          <div className="btnBox">
            <button className="ok">수정</button>
            <button className="cancel">취소</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Mypage;
