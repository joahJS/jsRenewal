<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/user/include/header.jsp" %>
<script src="/usrSrc/js/cateResult.js>" defer></script>

<body id="backgroundImg">
    <div id="wrap">
        
        <section id="back_img" class="sr-img"><!--상단 이미지-->
            <article id="back_img_inner">
                <h3>
                    <h3 data-lang-type="kr">분류별 기록물</h3> 
                    <h3 data-lang-type="jp">カテゴリー別記録</h3> 
                    <h3 data-lang-type="en">Records by Category</h3>
                </h3>
            </article>
        </section>
        <p class="search-result-notify web-inner-depth">
            "<span class="search-keyword">${searchText }</span>" 검색어에 대한 결과입니다.
        </p>
        
        
    <section id="searchResult" class="web-inner-depth">
        <article id="searchResult-content-inner">

                <section id="resultSorting"><!-- 등재 구분별 영역 -->

                    <h3 class="searchResult-content-title">
                        <span data-lang-type="kr">등재 구분별</span>
                        <span data-lang-type="jp">しわけ</span>
                        <span data-lang-type="en">Classification</span>
                        <span class="Small-font">(전체 <span data-sorting-cnt>0</span>건)</span>
                    </h3>
					
					<div data-sorting-list></div>

            <!-- 반복영역
                <div class="categoricalArc-content-box">
                        <h3 class="categoricalArc-item-title">
                            <span data-lang-type="kr">검색결과 제목 나오는 곳</span>
                            <span data-lang-type="jp">(jp)けっか</span>
                            <span data-lang-type="en">(en)</span>
                        </h3>
                        <p>본문내역 들어가는 곳</p>
                        <div class="categoricalArc-item-buttons">
                            <button>
                                <span data-lang-type="kr">도록 보기</span>
                                <span data-lang-type="jp">図録を見る</span>
                                <span data-lang-type="en">Read more</span>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </button>
                            <button>
                                <span data-lang-type="kr">일반인 해설서 보기</span>
                                <span data-lang-type="jp">公開マニュアルを見る</span>
                                <span data-lang-type="en">View the Public Manual</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </button>
                        </div>
                    </div> --><!--반복영역-->
                </section>

                <section id="resultPeriod"><!-- 제작 시기별 영역 -->

                    <h3 class="searchResult-content-title">
                        <span data-lang-type="kr">제작 시기별</span>
                        <span data-lang-type="jp">じき</span>
                        <span data-lang-type="en">period</span>
                        <span class="Small-font">(전체 <span data-period-cnt>0</span>건)</span>
                    </h3>
                    
                    <div data-period-list></div>
                </section>

                <section id="resultCountry"><!-- 소장 국가별 영역 -->

                    <h3 class="searchResult-content-title">
                        <span data-lang-type="kr">소장 국가별</span>
                        <span data-lang-type="jp">こっか</span>
                        <span data-lang-type="en">country</span>
                        <span class="Small-font">(전체 <span data-country-cnt>0</span>건)</span>
                    </h3>
					
					<div data-country-list></div>
                </section>

                <section id="resultForm"><!-- 형태별 영역 -->

                    <h3 class="searchResult-content-title">
                        <span data-lang-type="kr">형태별</span>
                        <span data-lang-type="jp">けいたい</span>
                        <span data-lang-type="en">form</span>
                        <span class="Small-font">(전체 <span data-form-cnt>0</span>건)</span>
                    </h3>
					
					<div data-form-list></div>
                </section>

                <section id="resultCollection"><!-- 소장처별 영역 -->
                    <h3 class="searchResult-content-title">
                        <span data-lang-type="kr">소장처별</span>
                        <span data-lang-type="jp">コレクション</span>
                        <span data-lang-type="en">collection</span>
                        <span class="Small-font">(전체 <span data-collection-cnt>0</span>건)</span>
                    </h3>
					
					<div data-collection-list></div>
                </section>
   
        </article>
    </section><!--searchResult-content-->

    <!-- <div class="web-common-inner" data-board-pager>
        <div class="button-outta-focus" data-board-pager-prev>
            
            <span>이전</span>
        </div>
        <ul id="paging" data-board-pager-bullets-container>
         </ul>
         <div class="button-outta-focus" data-board-pager-next>
             <span>다음</span>
             
         </div>
     </div> -->


    </div>

<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>