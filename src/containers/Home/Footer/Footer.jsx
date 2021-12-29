import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container container">
        <div className="row">
          <div className="footer__left col-lg-7">
            <h4 className="Text-Style-15">what happened</h4>
            <ul>
              <li>
                <a href="">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
              </li>
              <li>
                <a href="">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
              </li>
              <li>
                <a href="">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
              </li>
              <li>
                <a href="">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
              </li>
              <li>
                <a href="">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
              </li>
            </ul>
            <p className="footer__corp">
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </p>
          </div>
          <div className="footer__right col-lg-5">
            <div className="footer__rightTop">
              <div className="row">
                <div className="footer__rightTop-item col-lg-3">
                  <h4 className="Text-Style-15 ">about us</h4>
                  <ul>
                    <li>
                      <a href="">회사 소개</a>
                    </li>
                    <li>
                      <a href="">회사 소개</a>
                    </li>
                    <li>
                      <a href="">회사 소개</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__rightTop-item col-lg-3">
                  <h4 className="Text-Style-15">help</h4>
                  <ul>
                    <li>
                      <a href="">1 : 1 상담 내역</a>
                    </li>
                    <li>
                      <a href="">1 : 1 상담 내역</a>
                    </li>
                    <li>
                      <a href="">회사 소개</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__rightTop-item col-lg-3">
                  <h4 className="Text-Style-15">my order</h4>
                  <ul>
                    <li>
                      <a href="">내 주문 주문</a>
                    </li>
                    <li>
                      <a href="">내 주문 주문</a>
                    </li>
                    <li>
                      <a href="">내 주문 주문</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__rightTop-item col-lg-3">
                  <h4 className="Text-Style-15">my account</h4>
                  <ul>
                    <li>
                      <a href="">회원 정보 수정</a>
                    </li>
                    <li>
                      <a href="">회원 정보 수정</a>
                    </li>
                    <li>
                      <a href="">회원 정보 수정</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__social">
                <a href="">
                  <img
                    className="ml-3"
                    src={
                      require("../../../assets/images/Home/snsicon-01.png")
                        .default
                    }
                    alt="loading image"
                  />
                </a>{" "}
                <a href="">
                  <img
                    className="ml-3"
                    src={
                      require("../../../assets/images/Home/snsicon-02.png")
                        .default
                    }
                    alt="loading image"
                  />
                </a>{" "}
                <a href="">
                  <img
                    className="ml-3"
                    src={
                      require("../../../assets/images/Home/snsicon-03.png")
                        .default
                    }
                    alt="loading image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
// xxxxxxxxxxxxxxx
