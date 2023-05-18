<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/user/include/header.jsp" %>
<script src="/usrSrc/js/searchArchive.js?v=<%=System.currentTimeMillis()%>" defer></script>

<body id="backgroundImg">
    <div id="wrap">
        <section id="back_img" class="searchArchive-img"><!--상단 이미지-->
        <article id="back_img_inner">
            <h3 data-lang-type="kr">기록물 검색</h3> 
            <h3 data-lang-type="jp">アーカイブを検索</h3> 
            <h3 data-lang-type="en">Search Archives</h3>
            </article>
        </section>
        
        <section id="total-search-box"><!--total-search-box-->
            <div class="search-title-box">
                <h3 class="search-title-text">
                    <span data-lang-type="kr">기록물 통합 검색</span>
                    <span data-lang-type="jp">アーカイブ 統合検索</span>
                    <span data-lang-type="en">Archives Integrated Search</span>
                </h3>   
            </div>
        <!--검색 서치 영역 모듈화 자리-->
        <%@ include file="/WEB-INF/views/user/page/totalSearch.jsp" %>
        
        <div class="ago-search-box">
            <p class="Recent_searches" >
                <span data-lang-type="kr">최근검색어</span>
                <span data-lang-type="jp">最近の検索</span>
                <span data-lang-type="en">Recent search</span>
            </p>
            <ul data-recent-list>
                
            </ul>
        </div>
    </section>
    <!--기록물해설 검색결과 시작-->
    <section id="searchArchive">
        <article id="searchArc-content-inner">
            <h3 class="searchArc-content-title">
                <span data-lang-type="kr">기록물 해설</span>
                <span data-lang-type="jp">アーカイブの解釈</span>
                <span data-lang-type="en">Interpretation of Archives</span>
                <span class="Small-font">(전체 <span data-total-cnt>0</span>건)</span>
            </h3>
            <div class="searchArc-content-flexBox" data-archive-list>

            </div>
            
            <div class="web-common-inner" data-board-pager>
			   <div class="button-outta-focus" data-board-pager-prev>
			       
			       <span>이전</span>
			   </div>
			   <ul id="paging" data-board-pager-bullets-container>
			    </ul>
			    <div class="button-outta-focus" data-board-pager-next>
			        <span>다음</span>
			        
			    </div>
			</div>
        </article>
    </section>
    <!--기록물해설 검색결과 끝-->

    </div>

<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>