import React, { useCallback, useRef, useState } from "react";
import "../css/mypage.css";
const Modal = (openModal) => {

  



  return (

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

  )




}

export default Modal;