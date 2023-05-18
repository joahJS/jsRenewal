<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ include file="/WEB-INF/views/user/page/btmSlider.jsp" %>
    <footer>
        <div class="web-common-inner">
            <img src="/common/img/logo_bscf.svg" alt="">
            <section class="footer-text-side">
                <p>
                    <span data-lang-type="kr">48543 부산광역시 동구 자성로 99 (범일동 380-4) 조선통신사역사관</span>
                    <span data-lang-type="jp">48543釜山広域市東区磁城路99 (汎日洞380-4) 朝鮮通信使歴史館</span>
                    <span data-lang-type="en">99, Jaseong-ro, Dong-gu, Busan, JOSEON TONGSINSA History Museum</span>
                </p>
                <p class="footer-text-bold">TEL : 051-631-0858 / FAX : 051-631-0859</p>
                <p>Copyrights by 조선통신사문화사업. All right reserved.</p>
            </section>
            <aside class="footer-right-side">
            	<div class="footer-web-links">
                    <a class="hd-outer-link" href="http://www.bscf.or.kr/main.do" target="_blank">
                        <span>부산문화재단</span>
                    </a>
                    <div class="nav-hr"></div>
                    <a class="hd-outer-link" href="http://www.tongsinsa.com/" target="_blank">
                        <span>조선통신사문화교류사업</span>
                    </a>
                </div>
                
                <select class="footer-lang-select" id="langSelector">
                    <option value="kr">KR</option>
                    <option value="jp">JP</option>
                    <option value="en">EN</option>
                </select>
                
            </aside>
            
        </div>
    </footer>
</body>
</html>