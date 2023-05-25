<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/user/include/header.jsp" %>
<script src="/usrSrc/js/searchResult.js?v=<%=System.currentTimeMillis()%>" defer></script>

<body id="backgroundImg">
    <div id="wrap">
        
        <section id="back_img" class="sr-img"><!--상단 이미지-->
            <article id="back_img_inner">
                <hgroup>
                    <p data-search-subtitle>
                        조선통신사 디지털 아카이브
                    </p>
                    <h3>
                        <span data-lang-type="kr">통합검색</span>
                        <span data-lang-type="jp">統合検索</span>
                        <span data-lang-type="en">Integrated Search</span>
                    </h3>
                </hgroup>
            </article>
        </section>
        <%@ include file="/WEB-INF/views/user/page/totalSearch.jsp" %>
        <p class="search-result-notify web-inner-depth">
            "<span class="search-keyword">${searchText }</span>" 
            <span data-lang-type="kr">
                검색 결과 (전체 <span data-total-search-cnt>0</span>건)
            </span>
            <span data-lang-type="jp">
                (jp)검색 결과 (전체 <span data-total-search-cnt>0</span>건)
            </span>
            <span data-lang-type="en">
                (en)검색 결과 (전체 <span data-total-search-cnt>0</span>건)
            </span>
        </p>
        
        
    <section id="searchResult" class="web-inner-depth">
        <article id="searchResult-content-inner">

                <section id="resultArchive"><!-- 도록 결과 영역 -->

                    <h3 class="searchResult-content-title">
                        <span data-lang-type="kr">
                            기록물 자료<span class="Small-font">(전체 <span data-ilbook-cnt>0</span>건)</span>
                        </span>
                        <span data-lang-type="jp">
                            記録資料<span class="Small-font">(전체 <span data-ilbook-cnt>0</span>건)</span>
                        </span>
                        <span data-lang-type="en">
                            Archives data<span class="Small-font">(전체 <span data-ilbook-cnt>0</span>건)</span>
                        </span>
                        
                    </h3>
					
					<div data-ilbook-list>
					</div>
                    <!-- 반복영역 -->
                    <div class="categoricalArc-content-box"> 
                        <h3 class="categoricalArc-item-title">
                            <span data-lang-type="kr">기록물 검색결과 01</span>
                            <span data-lang-type="jp">(jp)けっか</span>
                            <span data-lang-type="en">(en)</span>
                        </h3>
                        <p>예문 01</p>
                        <div class="categoricalArc-item-buttons">
                            <button>
                                <span data-lang-type="kr">도록 보기</span>
                                <span data-lang-type="jp">(jp)도록 보기</span>
                                <span data-lang-type="en">Read more</span>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </button>
                            <button>
                                <span data-lang-type="kr">일반인 해설서 보기</span>
                                <span data-lang-type="jp">(jp)일반인 해설서 보기</span>
                                <span data-lang-type="en">(en)일반인 해설서 보기</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </button>
                        </div>
                    </div>
                    <!--반복영역-->
                </section>
                <section id="resultsearchResult"><!-- 디지털소장자료 결과 영역 -->

                    <h3 class="searchResult-content-title">
                        <span data-lang-type="kr">
                            디지털 소장 자료<span class="Small-font">(전체 <span data-clt-data-cnt>0</span>건)</span>
                        </span>
                        <span data-lang-type="jp">
                            デジタルコレクション<span class="Small-font">(전체 <span data-clt-data-cnt>0</span>건)</span>
                        </span>
                        <span data-lang-type="en">
                            Digital Collection<span class="Small-font">(전체 <span data-clt-data-cnt>0</span>건)</span>
                        </span>
                        
                    </h3>
                    
                    <div data-clt-data-list>
                    
                    </div>

                    <!-- 반복영역 -->
                    <div class="searchResult-content-box">
                        <div class="searchResult-content-img">
                            <img src="#">
                        </div>
                        <div class="searchResult-content-list">
                            <h6 class="searchResult-title">K-I-1 통신사등록</h6>
                            <p class="searchResult-subTitle">통신사등록</p>
                            <br>
                            <ul class="searchResult-data-list">
                                <li>
                                    <span data-lang-type="kr">1641</span>
                                    <span data-lang-type="jp">(jp)</span>
                                    <span data-lang-type="en">(en)</span>
                                </li>
                                <li>
                                    <span data-lang-type="kr">책자</span>
                                    <span data-lang-type="jp">(jp)책자</span>
                                    <span data-lang-type="en">(en)책자</span>
                                </li>
                                <li>
                                    <span data-lang-type="kr">종이에 묵서</span>
                                    <span data-lang-type="jp">(jp)종이에 묵서</span>
                                    <span data-lang-type="en">(en)종이에 묵서</span>
                                </li>
                                <li>
                                    <span data-lang-type="kr">(세로 x 가로) 41.8 x 26.6cm</span>
                                    <span data-lang-type="jp">(jp)(세로 x 가로) 41.8 x 26.6cm</span>
                                    <span data-lang-type="en">(en)(세로 x 가로) 41.8 x 26.6cm</span>
                                </li>
                                <li>
                                    <span data-lang-type="kr">서울대학교 규장각한국학 연구원</span>
                                    <span data-lang-type="jp">(jp)서울대학교 규장각한국학 연구원</span>
                                    <span data-lang-type="en">(en)서울대학교 규장각한국학 연구원</span>
                                </li>
                            </ul>
    
                            <button class="round_btnStyle">
                                <span data-lang-type="kr">디지털 소장자료보기</span>
                                <span data-lang-type="jp">(jp)디지털 소장자료 보기</span>
                                <span data-lang-type="en">show digital collection data</span>
                            </button>
                        </div>
                    </div>
                    <!-- 반복영역 -->
                </section>
   
        </article>
    </section><!--searchResult-content-->

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


    </div>

<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>