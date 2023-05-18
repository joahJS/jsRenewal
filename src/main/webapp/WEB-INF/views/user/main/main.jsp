<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/user/include/header.jsp" %>
<link rel="stylesheet" href="/usrSrc/css/swiper.min.css"> <!--variables-->
<script src="/usrSrc/js/swiper-bundle.min.js" defer></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/usrSrc/js/main.js?v=<%=System.currentTimeMillis()%>" defer></script>

	<div id="wrap" class="main-wrap-back">
        <section id="mainSearch">
            <article id="mainSearchInner" class="web-common-inner">
                <div class="total-space"></div>
                <div class="main-search-title">
                    <img src="/common/img/logo_w.svg" alt="조선통신사 디지털아카이브 로고">
                    <h2 data-lang-type="kr" >조선통신사 <span class="span-block">디지털 아카이브</span></h2>
                    <h2 data-lang-type="jp" >朝鮮通信使デジタルアーカイブ</h2>
                    <h2 data-lang-type="en" >Joseon Tongsinsa Digital Archive</h2>
                </div>
                <form class="main-search-bar">
                    <input type="text" placeholder="Search..." data-main-search-text maxlength="50">
                    <button data-main-search-btn>
                        <p>
                            <span data-lang-type="kr">찾아보기</span>
                            <span data-lang-type="jp">けんさく</span>
                            <span data-lang-type="en">Search</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
                    </button>
                </form>
            </article>
        </section>
        <!-- <section id="mainIntro">
            <article id="mainIntroInner" class="web-common-inner">
                <div class="main-intro-left">
                    
                    <h2>
                        <span data-lang-type="kr">조선통신사 디지털 아카이브</span>
                        <span data-lang-type="jp">朝鮮通信使デジタルアーカイブ</span>
                        <span data-lang-type="en">Joseon Tongsinsa Digital Archive</span>
                    </h2>
                    <P>
                        <span data-lang-type="kr">부산의 유일한 유네스코 세계기록유산인 </span>
                        <span data-lang-type="jp">釜山で唯一のユネスコ世界遺産である朝鮮通信使の</span>
                        <span data-lang-type="en">It is an online museum that preserves the records of Joseon Tongsinsa,</span>
                    </P>
                    <p>
                        <span data-lang-type="kr">조선통신사 기록물을 보관하는</span>
                        <span data-lang-type="jp">記録を保存するオンライン博物館です。</span>
                        <span data-lang-type="en">the only UNESCO World Heritage Site in Busan. </span>
                    </p>
                    <p>
                        <span data-lang-type="kr">온라인 박물관입니다.</span>
                       </p>
                </div>
                <div class="vt-line"></div>
                <div class="main-intro-right">
                    
                    <h2>
                        <span data-lang-type="kr">유네스코 세계문화유산</span>
                        <span data-lang-type="jp">ユネスコの世界遺産</span>
                        <span data-lang-type="en">UNESCO World Heritage</span>
                    </h2>
                    <p>2017年10月31日</p>
                    <p>
                        <span data-lang-type="kr">200여년간 이어진 한일 교류의 상징</span>
                        <span data-lang-type="jp">200年以上続いた韓日交流の象徴</span>
                        <span data-lang-type="en">A symbol of Korea-Japan exchange that lasted for over 200 years</span>
                    </p>
                    <P>
                        <span data-lang-type="kr">조선통신사 기록물 유네스코 등재</span>
                        <span data-lang-type="jp">ユネスコのリストに記載されている朝鮮通信使の記録</span>
                        <span data-lang-type="en">Joseon Tongsinsa records listed on the UNESCO list
                        </span>
                    </P>
                </div>
            </article>
            
        </section> -->
 
        <section id="mainCollection">
            <article id="mainCollInner" class="web-common-inner">
                <hr>
                <h3>
                    <span data-lang-type="kr">디지털 소장자료</span>
                    <span data-lang-type="jp">デジタルコレクション</span>
                    <span data-lang-type="en">Digital collection</span>
                </h3>
                <div class="main-more-button" onclick="location.href='digital.do'">
                    <span data-lang-type="kr">더보기</span>
                    <span data-lang-type="jp">もっと見る</span>
                    <span data-lang-type="en">MORE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                </div>
            </article>
            <article id="mainCollBottom">
                <div class="main-coll-slider">
                    <div class="swiper-wrapper">
                         <!--반복문 시작-->
                        <!--반복문 끝-->
                    </div>
                </div>
                <div class="main-coll-slider-buttons">
                    <button class="main-slider-prev"></button>
                    <button class="main-slider-pause"></button>
                    <button class="main-slider-next"></button>
               	</div>
            </article>
        </section>

        <section id="mainSubject">
            <article id="mainSubjectInner" class="web-common-inner">
                <hr>
                <h3>
                    <span data-lang-type="kr">분류별 기록물</span>
                    <span data-lang-type="jp">分類別記録</span>
                    <span data-lang-type="en">Records by Classification</span>
                </h3>
                <div class="main-more-button" onclick="location.href='categorical.do#more'">
                    <span data-lang-type="kr">더보기</span>
                    <span data-lang-type="jp">もっと見る</span>
                    <span data-lang-type="en">MORE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                </div>
                <div class="main-subject-list">
                    <div class="main-subject-item main-subject-nation">
                        <ul class="main-subject-eachlist">
                            <li>
                                <span data-lang-type="kr">소장 국가별</span>
                                <span data-lang-type="jp">収集国別</span>
                                <span data-lang-type="en">by country of collection</span>
                            </li>
                            <li onclick="location.href='categorical.do#josun'">
                               <span data-lang-type="kr">한국</span>
                                <span data-lang-type="jp">韓国</span>
                                <span data-lang-type="en">Korea</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                            <li onclick="location.href='categorical.do#japan'">
                                
                                <span data-lang-type="kr">일본</span>
                                <span data-lang-type="jp">日本</span>
                                <span data-lang-type="en">Japan</span>
                              
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                        </ul>
                    </div>

                    <div class="main-subject-item main-subject-form">
                        <ul class="main-subject-eachlist">
                            <li>
                                <span data-lang-type="kr">기록물 형태별</span>
                                <span data-lang-type="jp">レコードの種類別</span>
                                <span data-lang-type="en">by type of record</span>
                            </li>
                            <li onclick="location.href='categorical.do#book'">
                               
                               <span data-lang-type="kr">책자</span>
                                <span data-lang-type="jp">本</span>
                                <span data-lang-type="en">book</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                            <li onclick="location.href='categorical.do#ilbook'">
                               
                               <span data-lang-type="kr">서화(글)</span>
                                <span data-lang-type="jp">書道・絵画 (執筆)</span>
                                <span data-lang-type="en">Calligraphy and painting (writing)</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                            <li onclick="location.href='categorical.do#ilart'">
                                
                                <span data-lang-type="kr">서화(그림)</span>
                                <span data-lang-type="jp">書道と絵画 (絵画)</span>
                                <span data-lang-type="en">Calligraphy and painting (painting)</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                        </ul>
                    </div>

                    <div class="main-subject-item main-subject-category">
                        <ul class="main-subject-eachlist">
                            <li>
                                <span data-lang-type="kr"> 등재구분별</span>
                                <span data-lang-type="jp">登録区分</span>
                                <span data-lang-type="en">Classification of registration</span>
                            </li>
                            <li onclick="location.href='categorical.do#trade'">

                                <span data-lang-type="kr">외교 기록</span>
                                <span data-lang-type="jp">外交記録</span>
                                <span data-lang-type="en">diplomatic record</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                            <li onclick="location.href='categorical.do#travel'">
                               
                               <span data-lang-type="kr">여정의 기록</span>
                                <span data-lang-type="jp">旅の記録</span>
                                <span data-lang-type="en">record of the journey</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                            <li onclick="location.href='categorical.do#culture'">
                                
                                <span data-lang-type="kr">문화교류의 기록</span>
                                <span data-lang-type="jp">文化交流の記録</span>
                                <span data-lang-type="en">Records of cultural exchange</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                        </ul>
                    </div>

                    <div class="main-subject-item main-subject-age">
                        <ul class="main-subject-eachlist">
                            <li>
                                <span data-lang-type="kr">제작 시기별</span>
                                <span data-lang-type="jp">生産時期別</span>
                                <span data-lang-type="en">By production period</span>
                            </li>
                            <li onclick="location.href='categorical.do#age1'">
                                1607~1642
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                            <li onclick="location.href='categorical.do#age2'">
                                1643~1711
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                            <li onclick="location.href='categorical.do#age3'">
                                1719~1811
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                            <li onclick="location.href='categorical.do#age4'">
                               
                               <span data-lang-type="kr">제작년도 미상</span>
                                <span data-lang-type="jp">製造年不明</span>
                                <span data-lang-type="en">Production year unknown</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                            </li>
                        </ul>
                    </div>

                </div>
            </article>
        </section>
    </div>

<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>