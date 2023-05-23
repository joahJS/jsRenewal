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
                <div class="main-logo-div">
                    <img src="/common/img/logo_w.svg" alt="조선통신사 디지털아카이브 로고">
                    <div>
                        <h2>
                            <span data-lang-type="kr">조선통신사</span>
                            <span data-lang-type="jp">朝鮮通信使</span>
                            <span data-lang-type="en">Joseon Tongsinsa</span>
                        </h2>
                        <p>
                            <span data-lang-type="kr">Joseon Tongsinsa</span>
                            <span data-lang-type="jp">(jp)Joseon Tongsinsa</span>
                            <span data-lang-type="en">(en)Joseon Tongsinsa</span>
                        </p>
                    </div>
                </div>
                <hgroup class="main-search-title">
                    <p>
                        <span data-lang-type="kr">Joseon Tongsinsa Digital Archive</span>
                        <span data-lang-type="jp">(jp)Joseon Tongsinsa Digital Archive</span>
                        <span data-lang-type="en">(en)Joseon Tongsinsa Digital Archive</span>
                    </p>
                    <h2>
                        <span data-lang-type="kr">조선통신사 <span class="span-block"> 디지털 아카이브</span></span>
                        <span data-lang-type="jp" >朝鮮通信使デジタルアーカイブ</span>
                        <span data-lang-type="en" >Joseon Tongsinsa Digital Archive</span>
                    </h2>
                </hgroup>
                <p data-main-title-texts>
                    <span data-lang-type="kr">부산의 유일한 유네스코 세계기록유산인 조선통신사 기록들을 보관하는 온라인 박물관입니다.</span>
                    <span data-lang-type="jp">釜山で唯一のユネスコ世界遺産である朝鮮通信使の 記録を保存するオンライン博物館です。</span>
                    <span data-lang-type="en">It is an online museum that preserves the records of Joseon Tongsinsa, the only UNESCO World Heritage Site in Busan.</span>
                    
                </p>
                <form class="main-search-bar">
                    <input type="text" placeholder="검색어를 입력하세요." data-main-search-text maxlength="50">
                    <button data-main-search-btn>
                        <p>
                            <span data-lang-type="kr">Search</span>
                            <span data-lang-type="jp">けんさく</span>
                            <span data-lang-type="en">Search</span>
                        </p>
                        
                    </button>
                </form>
            </article>
        </section>
        <section id="mainIntro" class="web-common-inner">
            <div class="main-intro-logo-div">
                <img src="/common/img/logo_color.svg" alt="조선통신사 디지털아카이브 로고">
                <div>
                    <h2>
                        <span data-lang-type="kr">조선통신사</span>
                        <span data-lang-type="jp">朝鮮通信使</span>
                        <span data-lang-type="en">Joseon Tongsinsa</span>
                    </h2>
                    <p>
                        <span data-lang-type="kr">Joseon Tongsinsa</span>
                        <span data-lang-type="jp">(jp)Joseon Tongsinsa</span>
                        <span data-lang-type="en">(en)Joseon Tongsinsa</span>
                    </p>
                </div>
            </div> 
            <h2 data-section-head-title>
                <span data-lang-type="kr">아카이브 안내</span>
                <span data-lang-type="jp">(jp)아카이브 안내</span>
                <span data-lang-type="en">(en)아카이브 안내</span>
            </h2>
            <div data-main-intro-texts>
                <div data-main-intro-item>
                    <img src="/common/img/main_archive_01.jpg" alt="기록물검색 안내 이미지">
                    <p class="main-item-subtitle">Part 1.</p>
                    <h3 class="main-item-title">
                        <span data-lang-type="kr">기록물 검색</span>
                        <span data-lang-type="jp">(jp)기록물 검색</span>
                        <span data-lang-type="en">(en)기록물 검색</span>
                    </h3>
                    <p data-main-intro-item-text>
                        <span data-lang-type="kr">유네스코 세계기록유산으로 등재된 조선통신사 기록물의 정보를 통합 검색할 수 있습니다.</span>
                        <span data-lang-type="jp">(jp)유네스코 세계기록유산으로 등재된 조선통신사 기록물의 정보를 통합 검색할 수 있습니다.</span>
                        <span data-lang-type="en">(en)유네스코 세계기록유산으로 등재된 조선통신사 기록물의 정보를 통합 검색할 수 있습니다.</span>
                    </p>
                </div>
                <div data-main-intro-item>
                    <img src="/common/img/main_archive_02.jpg" alt="기록물해석 안내 이미지">
                    <p class="main-item-subtitle">Part 2.</p>
                    <h3 class="main-item-title">
                        <span data-lang-type="kr">기록물 해석</span>
                        <span data-lang-type="jp">(jp)기록물 해석</span>
                        <span data-lang-type="en">(en)기록물 해석</span>
                    </h3>
                    <p data-main-intro-item-text>
                        <span data-lang-type="kr">사용자의 목적에 맞게 기록물의 정보를 선택할 수 있도록 연구자용(도록)과 일반 해설을 각각 제공합니다.</span>
                        <span data-lang-type="jp">(jp)사용자의 목적에 맞게 기록물의 정보를 선택할 수 있도록 연구자용(도록)과 일반 해설을 각각 제공합니다.</span>
                        <span data-lang-type="en">(en)사용자의 목적에 맞게 기록물의 정보를 선택할 수 있도록 연구자용(도록)과 일반 해설을 각각 제공합니다.</span>
                    </p>
                </div>
                <div data-main-intro-item>
                    <img src="/common/img/main_archive_03.jpg" alt="디지털소장자료 안내 이미지">
                    <p class="main-item-subtitle">Part 3.</p>
                    <h3 class="main-item-title">
                        <span data-lang-type="kr">디지털 소장자료</span>
                        <span data-lang-type="jp">(jp)디지털 소장자료</span>
                        <span data-lang-type="en">(en)디지털 소장자료</span>
                    </h3>
                    <p data-main-intro-item-text>
                        <span data-lang-type="kr">유네스코 세계기록유산으로 등재된 조선통신사 기록물 소장처의 협조를 통해 기록물의 원본 이미지를 제공합니다.</span>
                        <span data-lang-type="jp">(jp)유네스코 세계기록유산으로 등재된 조선통신사 기록물 소장처의 협조를 통해 기록물의 원본 이미지를 제공합니다.</span>
                        <span data-lang-type="en">(en)유네스코 세계기록유산으로 등재된 조선통신사 기록물 소장처의 협조를 통해 기록물의 원본 이미지를 제공합니다.</span>
                    </p>
                </div>
                <div data-main-intro-item>
                    <img src="/common/img/main_archive_04.jpg" alt="기록물활용 안내 이미지">
                    <p class="main-item-subtitle">Part 4.</p>
                    <h3 class="main-item-title">
                        <span data-lang-type="kr">기록물 활용 콘텐츠</span>
                        <span data-lang-type="jp">(jp)기록물 활용 콘텐츠</span>
                        <span data-lang-type="en">(en)기록물 활용 콘텐츠</span>
                    </h3>
                    <p data-main-intro-item-text>
                        <span data-lang-type="kr">음성지원 콘텐츠, 가상 전시 등 조선통신사 기록물을 활용한 콘텐츠를 개발, 제공합니다.</span>
                        <span data-lang-type="jp">(jp)음성지원 콘텐츠, 가상 전시 등 조선통신사 기록물을 활용한 콘텐츠를 개발, 제공합니다.</span>
                        <span data-lang-type="en">(en)음성지원 콘텐츠, 가상 전시 등 조선통신사 기록물을 활용한 콘텐츠를 개발, 제공합니다.</span>
                    </p>
                </div>
            </div>

        </section>
       
        <!-- 분류별 기록물 -->
        <section id="mainSubj">
            <article id="mainSubjInner" class="web-common-inner">
                <h2 data-section-head-title>
                    <span data-lang-type="kr">분류별 기록물</span>
                    <span data-lang-type="jp">分類別記録</span>
                    <span data-lang-type="en">Records by Classification</span>
                </h2>
                <div class="main-subj-texts">
                    <!-- 등재구분별 -->
                    <ul data-subj-list>
                        <li data-subj-subtitle>
                            <span data-lang-type="kr">등재구분별</span>
                            <span data-lang-type="jp">登録区分</span>
                            <span data-lang-type="en">Classification of registration</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#trade'">
                            <span data-lang-type="kr">외교기록</span>
                            <span data-lang-type="jp">外交記録</span>
                            <span data-lang-type="en">diplomatic record</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#travel'">
                            <span data-lang-type="kr">여정의 기록</span>
                            <span data-lang-type="jp">旅の記録</span>
                            <span data-lang-type="en">record of the journey</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#culture'">
                            <span data-lang-type="kr">문화교류의 기록</span>
                            <span data-lang-type="jp">文化交流の記録</span>
                            <span data-lang-type="en">Records of cultural exchange</span>
                        </li>
                    </ul>

                    <!-- 제작시기별 -->
                    <ul data-subj-list>
                        <li data-subj-subtitle>
                            <span data-lang-type="kr">제작시기별</span>
                            <span data-lang-type="jp">生産時期別</span>
                            <span data-lang-type="en">By production period</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#age1'">
                            <span data-lang-type="kr">1607~1636</span>
                            <span data-lang-type="jp">1607~1636</span>
                            <span data-lang-type="en">1607~1636</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#age2'">
                            <span data-lang-type="kr">1643~1711</span>
                            <span data-lang-type="jp">1643~1711</span>
                            <span data-lang-type="en">1643~1711</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#age3'">
                            <span data-lang-type="kr">1719~1811</span>
                            <span data-lang-type="jp">1719~1811</span>
                            <span data-lang-type="en">1719~1811</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#age4'">
                            <span data-lang-type="kr">제작연도 미상</span>
                            <span data-lang-type="jp">製造年不明</span>
                            <span data-lang-type="en">Production year unknown</span>
                        </li>
                    </ul>

                    <!-- 소장국가별 -->
                    <ul data-subj-list>
                        <li data-subj-subtitle>
                            <span data-lang-type="kr">소장국가별</span>
                            <span data-lang-type="jp">収集国別</span>
                            <span data-lang-type="en">by country of collection</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#josun'">
                            <span data-lang-type="kr">한국</span>
                            <span data-lang-type="jp">韓国</span>
                            <span data-lang-type="en">Korea</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#japan'">
                            <span data-lang-type="kr">일본</span>
                            <span data-lang-type="jp">日本</span>
                            <span data-lang-type="en">Japan</span>
                        </li>
                    </ul>

                    <!-- 소장처별 -->
                    <ul data-subj-list>
                        <li data-subj-subtitle>
                            <span data-lang-type="kr">소장처별</span>
                            <span data-lang-type="jp">コレクション</span>
                            <span data-lang-type="en">collection</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#owner'">
                            <span data-lang-type="kr">한국</span>
                            <span data-lang-type="jp">韓国</span>
                            <span data-lang-type="en">Korea</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#owner'">
                            <span data-lang-type="kr">일본</span>
                            <span data-lang-type="jp">日本</span>
                            <span data-lang-type="en">Japan</span>
                        </li>
                    </ul>

                    <!-- 형태별 -->
                    <ul data-subj-list>
                        <li data-subj-subtitle>
                            <span data-lang-type="kr">형태별</span>
                            <span data-lang-type="jp">種類別</span>
                            <span data-lang-type="en">by type of record</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#book'">
                            <span data-lang-type="kr">책자</span>
                            <span data-lang-type="jp">本</span>
                            <span data-lang-type="en">book</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#ilbook'">
                            <span data-lang-type="kr">서화(글)</span>
                            <span data-lang-type="jp">書道・絵画 (執筆)</span>
                            <span data-lang-type="en">Calligraphy and painting (writing)</span>
                        </li>
                        <li data-subj-item onclick="location.href='categorical.do#ilart'">
                            <span data-lang-type="kr">서화(그림)</span>
                            <span data-lang-type="jp">書道と絵画 (絵画)</span>
                            <span data-lang-type="en">Calligraphy and painting (painting)</span>
                        </li>
                    </ul>

                </div>
            </article>
        </section>

        <!-- 분류별 기록물 / 모바일 슬라이드 -->
        <section id="mainSubjMob">
            <article id="mainSubjInnerMob" class="web-common-inner">
                <h2 data-section-head-title>
                    <span data-lang-type="kr">분류별 기록물</span>
                    <span data-lang-type="jp">分類別記録</span>
                    <span data-lang-type="en">Records by Classification</span>
                </h2>
                <div class="main-subj-texts-mob swiper-wrapper">
                    <!-- 등재구분별 / 모바일-->
                    <div class="swiper-slide">
                        <ul data-subj-list-mob>
                            <li data-subj-subtitle-mob>
                                <span data-lang-type="kr">등재구분별</span>
                                <span data-lang-type="jp">登録区分</span>
                                <span data-lang-type="en">Classification of registration</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#trade'">
                                <span data-lang-type="kr">외교기록</span>
                                <span data-lang-type="jp">外交記録</span>
                                <span data-lang-type="en">diplomatic record</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#travel'">
                                <span data-lang-type="kr">여정의 기록</span>
                                <span data-lang-type="jp">旅の記録</span>
                                <span data-lang-type="en">record of the journey</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#culture'">
                                <span data-lang-type="kr">문화교류의 기록</span>
                                <span data-lang-type="jp">文化交流の記録</span>
                                <span data-lang-type="en">Records of cultural exchange</span>
                            </li>
                        </ul>                    
                    </div>

                    <!-- 제작시기별 / 모바일 -->
                    <div class="swiper-slide">
                        <ul data-subj-list-mob>
                            <li data-subj-subtitle-mob>
                                <span data-lang-type="kr">제작시기별</span>
                                <span data-lang-type="jp">生産時期別</span>
                                <span data-lang-type="en">By production period</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#age1'">
                                <span data-lang-type="kr">1607~1642</span>
                                <span data-lang-type="jp">1607~1636</span>
                                <span data-lang-type="en">1607~1636</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#age2'">
                                <span data-lang-type="kr">1643~1711</span>
                                <span data-lang-type="jp">1643~1711</span>
                                <span data-lang-type="en">1643~1711</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#age3'">
                                <span data-lang-type="kr">1719~1811</span>
                                <span data-lang-type="jp">1719~1811</span>
                                <span data-lang-type="en">1719~1811</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#age4'">
                                <span data-lang-type="kr">제작연도 미상</span>
                                <span data-lang-type="jp">製造年不明</span>
                                <span data-lang-type="en">Production year unknown</span>
                            </li>
                        </ul>
                    </div>

                    <!-- 소장국가별 / 모바일 -->
                    <div class="swiper-slide">
                        <ul data-subj-list-mob>
                            <li data-subj-subtitle-mob>
                                <span data-lang-type="kr">소장국가별</span>
                                <span data-lang-type="jp">収集国別</span>
                                <span data-lang-type="en">by country of collection</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#josun'">
                                <span data-lang-type="kr">한국</span>
                                <span data-lang-type="jp">韓国</span>
                                <span data-lang-type="en">Korea</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#japan'">
                                <span data-lang-type="kr">일본</span>
                                <span data-lang-type="jp">日本</span>
                                <span data-lang-type="en">Japan</span>
                            </li>
                        </ul>
                    </div>

                    <!-- 소장처별 / 모바일 -->
                    <div class="swiper-slide">
                        <ul data-subj-list-mob>
                            <li data-subj-subtitle-mob>
                                <span data-lang-type="kr">소장처별</span>
                                <span data-lang-type="jp">コレクション</span>
                                <span data-lang-type="en">collection</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#owner'">
                                <span data-lang-type="kr">한국</span>
                                <span data-lang-type="jp">韓国</span>
                                <span data-lang-type="en">Korea</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#owner'">
                                <span data-lang-type="kr">일본</span>
                                <span data-lang-type="jp">日本</span>
                                <span data-lang-type="en">Japan</span>
                            </li>
                        </ul>
                    </div>

                    <!-- 형태별 / 모바일 -->
                    <div class="swiper-slide">
                        <ul data-subj-list-mob>
                            <li data-subj-subtitle-mob>
                                <span data-lang-type="kr">형태별</span>
                                <span data-lang-type="jp">種類別</span>
                                <span data-lang-type="en">by type of record</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#book'">
                                <span data-lang-type="kr">책자</span>
                                <span data-lang-type="jp">本</span>
                                <span data-lang-type="en">book</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#ilbook'">
                                <span data-lang-type="kr">서화(글)</span>
                                <span data-lang-type="jp">書道・絵画 (執筆)</span>
                                <span data-lang-type="en">Calligraphy and painting (writing)</span>
                            </li>
                            <li data-subj-item-mob onclick="location.href='categorical.do#ilart'">
                                <span data-lang-type="kr">서화(그림)</span>
                                <span data-lang-type="jp">書道と絵画 (絵画)</span>
                                <span data-lang-type="en">Calligraphy and painting (painting)</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </article>

            <div class="main-subj-slider-buttons">
                <button class="main-subj-prev"></button>
                <button class="main-subj-next"></button>
            </div>

            <div class="swiper-pagination">

            </div>
         
        </section>
        

        <!-- 구 디지털 소장자료 -->
        <!-- <section id="mainCollection">
            <article id="mainCollInner" class="web-common-inner">
                
                <h3>
                    <span data-lang-type="kr">디지털 소장자료</span>
                    <span data-lang-type="jp">(jp)デジタルコレクション</span>
                    <span data-lang-type="en">(en)Digital collection</span>
                </h3>
            </article>
            <article id="mainCollBottom">
                <div class="main-coll-slider">
                    <div class="swiper-wrapper">-->
                         <!--반복문 시작-->
                        <!--반복문 끝-->
                    <!-- </div>
                </div>
                <div class="main-coll-slider-buttons">
                    <button class="main-slider-prev"></button>
                    <button class="main-slider-pause"></button>
                    <button class="main-slider-next"></button>
               	</div>
            </article>
        </section> --> 

        <!-- 디지털 소장자료 -->
        <section id="mainDigital">
            <div class="web-common-inner">
                <h3 data-section-head-title>
                    <span data-lang-type="kr">디지털 소장자료</span>
                    <span data-lang-type="jp">(jp)디지털 소장자료</span>
                    <span data-lang-type="en">(en)디지털 소장자료</span>
                </h3>
                <div data-main-digital-list>
                    <div data-main-digital-item class="tl01">
                        <img src="/common/img/coll-item-temp01.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->

                    <div data-main-digital-item class="tl02">
                        <img src="/common/img/main_archive_02.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->

                    <div data-main-digital-item class="tl03">
                        <img src="/common/img/coll-item-temp01.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->

                    <div data-main-digital-item class="tl04-tp">
                        <img src="/common/img/coll-item-temp01.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->

                    <div data-main-digital-item class="tl04-bt">
                        <img src="/common/img/main_subject_back.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->

                    <div data-main-digital-item class="bl01-tp">
                        <img src="/common/img/coll-item-temp01.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->

                    <div data-main-digital-item class="bl01-bt">
                        <img src="/common/img/coll-item-temp01.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->

                    <div data-main-digital-item class="bl02">
                        <img src="/common/img/main_back_01.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->

                    <div data-main-digital-item class="bl03">
                        <img src="/common/img/coll-item-temp01.jpg" alt="">
                        <div data-main-digital-texts>
                            <h4>K-II-22 일관창수</h4>
                            <!-- <ul data-main-digital-textlist>
                                <li data-main-digital-name>일관창수</li>
                                <li data-main-digital-age>1763</li>
                                <li data-main-digital-writer>남욱</li>
                                <li data-main-digital-form>책자</li>
                                <li data-main-digital-size>32.5 * 22.5cm</li>
                                <li data-main-digital-location>국립중앙도서관</li>
                            </ul> -->
                            <button data-main-digital-morebutton type="button">
                                디지털 소장자료
                                <span></span>
                            </button>
                        </div>
                    </div><!-- item 끝 -->
                </div>

                
            </div>
        </section>

    </div>
<%@ include file="/WEB-INF/views/user/page/btmSlider.jsp" %> <!-- 하단 소장처 슬라이드 -->
<%@ include file="/WEB-INF/views/user/include/viewVirtualEx.jsp" %> <!-- 가상전시관 바로가기 영역 -->    
<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>