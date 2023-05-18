<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/user/include/header.jsp" %>

<script src="/admSrc/js/login.js" defer></script>
	<div id="wrap">
        <section id="login-page">
            <article id="login-page-inner">
                <div class="login-title-img">
                    <img src="/common/img/logo_color.svg" />
                    <p>조선통신사 디지털 아카이브</p>
                </div>
                <form class="login-form-text" id="frmSignIn" action="/login/loginChk.do" method="post">
                    <input name="${_csrf.parameterName}" type="hidden" value="${_csrf.token}">
                    <input type="text" placeholder="아이디" name="username" id="usrid">
                    <input type="password" placeholder="비밀번호" name="password" id="password">
                    <button type="button" class="Square_btnStyle">관리자 로그인</button>
                </form>

                <!--체크박스 커스텀-->
                <div class="chkbox-keeplog" data-input-chkbox="">
                    <input type="checkbox" id="chkKeepLog">
                    <label for="chkKeepLog">
                        <span data-check-icon="">
                            <svg class="remix">
                                <use xlink:href="/module/img/remixicon.symbol.svg#ri-check-line"></use>
                            </svg>
                        </span>
                        <span data-check-label="">아이디 저장</span>
                    </label>
                </div>
                <!--체크박스 커스텀-->
                
                <!-- 로그인 실패 -->
                <c:if test="${LoginFailMessage!=null}">
	                <p class="login_failed">
	                    ❗ <c:out value="${LoginFailMessage}"/>
	                </p>
                </c:if>
                <!-- <div class="login-Find-btn">
                    <p>아이디 찾기</p>
                    <hr>
                    <p>비밀번호 찾기</p>
                </div> -->
            </article><!--login-page-inner-->
        </section><!--login-page-->
    </div><!--wrap-->

<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>