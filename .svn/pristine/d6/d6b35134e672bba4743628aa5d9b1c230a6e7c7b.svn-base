<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/user/include/header.jsp" %>
<script src="/usrSrc/js/categorical.js?v=<%=System.currentTimeMillis()%>" defer></script>

<body id="backgroundImg">
    <div id="wrap">
        <section id="back_img" class="categorical-img"><!--상단 이미지-->
            <article id="back_img_inner">
                <h3 data-lang-type="kr">분류별 기록물</h3> 
                <h3 data-lang-type="jp">カテゴリー別記録</h3> 
                <h3 data-lang-type="en">Records by Category</h3>
            </article>
        </section>
        <!--total-search-box-->
        <!-- <section id="total-search-box">
            <div class="search-title-box">
                <h3 class="search-title-text">
                    <span data-lang-type="kr">분류별 기록물 검색</span>
                    <span data-lang-type="jp">アーカイブをカテゴリ別に検索</span>
                    <span data-lang-type="en">Search Archives by Category</span>
                </h3>   
            </div>
        
            <div class="ago-search-box">
                <p class="Recent_searches" >
                    <span data-lang-type="kr">최근검색어</span>
                    <span data-lang-type="jp">最近の検索</span>
                    <span data-lang-type="en">Recent search</span>
                </p>
                <ul data-recent-list>
                    
                </ul>
            </div>
        </section> -->
    <!-- 검색영역 전체 시작 -->
    <section id="categoricalArchive">
        <article id="categoricalArc-content-inner">
            <ul id="categoricalTab">
                <li data-top-tab>
                    <span data-lang-type="kr">등재 구분별</span>
                    <span data-lang-type="jp">仕分け</span>
                    <span data-lang-type="en">Classification</span>
                </li>
                <li data-top-tab>
                    <span data-lang-type="kr">제작 시기별</span>
                    <span data-lang-type="jp">時給</span>
                    <span data-lang-type="en">period</span>
                </li>
                <li data-top-tab>
                    <span data-lang-type="kr">소장 국가별</span>
                    <span data-lang-type="jp">国家</span>
                    <span data-lang-type="en">country</span>
                </li>
                <li data-top-tab>
                    <span data-lang-type="kr">형태별</span>
                    <span data-lang-type="jp">形態</span>
                    <span data-lang-type="en">form</span>
                </li>
                <li data-top-tab>
                    <span data-lang-type="kr">소장처별</span>
                    <span data-lang-type="jp">コレクション</span>
                    <span data-lang-type="en">collection</span>
                </li>
            </ul>

            <div class="categoricalArc-content-flexBox"><!-- 검색결과 표출영역 -->

                <!-- 등재 구분별 결과영역 -->
                <div data-cata-result-area class="cate-selected-show">
                    <ul data-select-tab id="data-cate-tab">
                        <li data-bot-tab="cate">
                            <span data-lang-type="kr">외교 기록</span>
                            <span data-lang-type="jp">外交記録</span>
                            <span data-lang-type="en">diplomatic record</span>
                            </li>
                        <li data-bot-tab="cate">
                            <span data-lang-type="kr">여정의 기록</span>
                            <span data-lang-type="jp">旅の記録</span>
                            <span data-lang-type="en">record of the journey</span>
                        </li>
                        <li data-bot-tab="cate">
                            <span data-lang-type="kr">문화교류의 기록</span>
                            <span data-lang-type="jp">文化交流の記録</span>
                            <span data-lang-type="en">Records of cultural exchange</span>
                        </li>
                    </ul>

                </div>

                <!-- 제작 시기별 결과영역 -->
                <div data-cata-result-area>
                    <ul data-select-tab id="data-age-tab">
                        <li data-bot-tab="age">
                            <span data-lang-type="kr">1607~1636 (1~4차)</span>
                            <span data-lang-type="jp">1607~1636 (1~4会)</span>
                            <span data-lang-type="en">1607~1636 (1~4th)</span>
                        </li>
                        <li data-bot-tab="age">
                            <span data-lang-type="kr">1643~1711 (5~8차)</span>
                            <span data-lang-type="jp">1643~1711 (5~8会)</span>
                            <span data-lang-type="en">1643~1711 (5~8th)</span>
                        </li>
                        <li data-bot-tab="age">
                            <span data-lang-type="kr">1719~1811 (9~12차)</span>
                            <span data-lang-type="jp">1719~1811 (9~12会)</span>
                            <span data-lang-type="en">1719~1811 (9~12th)</span>
                        </li>
                        <li data-bot-tab="age">
                            <span data-lang-type="kr">제작연도 미상</span>
                            <span data-lang-type="jp">製造年不明</span>
                            <span data-lang-type="en">Production year unknown</span>
                        </li>
                    </ul>

                </div>


                <!-- 제작 국가별 결과영역 -->
                <div data-cata-result-area>
                    <ul data-select-tab id="data-national-tab">
                        <li data-bot-tab="nation">
                            <span data-lang-type="kr">한국</span>
                            <span data-lang-type="jp">韓国</span>
                            <span data-lang-type="en">Korea</span>
                        </li>
                        <li data-bot-tab="nation">
                            <span data-lang-type="kr">일본</span>
                            <span data-lang-type="jp">日本</span>
                            <span data-lang-type="en">Japan</span>
                        </li>
                    </ul>
                </div>

                <!-- 형태별 결과영역 -->
                <div data-cata-result-area>
                    <ul data-select-tab id="data-form-tab">
                        <li data-bot-tab="form">
                            <span data-lang-type="kr">책자</span>
                            <span data-lang-type="jp">本</span>
                            <span data-lang-type="en">book</span>
                        </li>
                        <li data-bot-tab="form">
                            <span data-lang-type="kr">서화(글)</span>
                            <span data-lang-type="jp">書道・絵画 (執筆)</span>
                            <span data-lang-type="en">Calligraphy and painting (writing)</span>
                        </li>
                        <li data-bot-tab="form">
                            <span data-lang-type="kr">서화(그림)</span>
                            <span data-lang-type="jp">書道と絵画 (絵画)</span>
                            <span data-lang-type="en">Calligraphy and painting (painting)</span>
                        </li>
                    </ul>
                </div>

                <!-- 소장처별 결과영역 -->
                <div data-cata-result-area>
                    <ul data-select-tab id="data-national-divide">
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">한국</span>
                            <span data-lang-type="jp">韓国</span>
                            <span data-lang-type="en">KOREA</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">고려대도서관</span>
                            <span data-lang-type="en">KOREA UNIVERSITY LIBRARY</span>
                            <span data-lang-type="jp">高麗大學校図書館</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">국립고궁박물관</span>
                            <span data-lang-type="en">NATIONAL PALACE MUSEUM OF KOREA</span>
                            <span data-lang-type="jp">國立古宮博物館</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">국립중앙도서관</span>
                            <span data-lang-type="en">NATIONAL LIBRARY OF KOREA</span>
                            <span data-lang-type="jp">國立中央圖書館</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">국립중앙박물관</span>
                            <span data-lang-type="en">NATIONAL MUSEUM OF KOREA</span>
                            <span data-lang-type="jp">國立中央博物館</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">국립해양박물관</span>
                            <span data-lang-type="en">KOREA NATIONAL MARITIME MUSEUM</span>
                            <span data-lang-type="jp">國立海洋博物館</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">국사편찬위원회</span>
                            <span data-lang-type="en">INSTITUTE OF KOREAN HISTORY</span>
                            <span data-lang-type="jp">國史編纂委員會</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">부산박물관</span>
                            <span data-lang-type="en">BUSAN MUSEUM</span>
                            <span data-lang-type="jp">釜山廣域市立博物館</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">서울대학교 규장각 한국학연구원</span>
                            <span data-lang-type="en">KYUJANGGAK INSTITUTE FOR KOREAN STUDIES</span>
                            <span data-lang-type="jp">ソウル大学奎章閣閣韓国学研究院</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">충청남도역사문화연구원</span>
                            <span data-lang-type="en">CHUNGNAM INSTITUTE OF HISTORY AND CULTURE</span>
                            <span data-lang-type="jp">忠南歴史文化学院</span>
                        </li>
                    </ul>
                    <ul data-select-tab id="data-national-divide2"> 
                    	<li data-bot-tab="owner">
                            <span data-lang-type="kr">일본</span>
                            <span data-lang-type="jp">日本</span>
                            <span data-lang-type="en">JAPAN</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">공익재단법인 고려미술관</span>
                            <span data-lang-type="jp">公益財団法人高麗美術館</span>
                            <span data-lang-type="en">Korea Art Museum, a public interest foundation</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">교토대학 종합박물관</span>
                            <span data-lang-type="jp">京都大学総合博物館</span>
                            <span data-lang-type="en">Kyoto University General Museum</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">구레시(공익재단법인 란토문화진흥재단 관리)</span>
                            <span data-lang-type="jp">呉市(公益財団法人蘭島文化振興財団管理)</span>
                            <span data-lang-type="en">Kure City(Managed by Ranshima Culture Promotion Foundation)</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">규슈역사자료관</span>
                            <span data-lang-type="jp">九州歴史資料館</span>
                            <span data-lang-type="en">Kyushu Historical Museum</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">나가사키현 쓰시마 역사연구 센터</span>
                            <span data-lang-type="jp">長崎県対馬歴史研究センター</span>
                            <span data-lang-type="en">Nagasaki Prefectural Tsushima Historical Research Center</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">나고야시 호우사 문고</span>
                            <span data-lang-type="jp">名古屋市蓬左文庫</span>
                            <span data-lang-type="en">Nagoya City Hoza Bunko</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">닛코도쇼궁</span>
                            <span data-lang-type="jp">日光東照宮</span>
                            <span data-lang-type="en">niskodosyogung</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">닛코산 린노우지</span>
                            <span data-lang-type="jp">日光山りんのうじ</span>
                            <span data-lang-type="en">niskosan linnouji</span>
                        </li>
                        <li data-bot-tab="owner">
                            <span data-lang-type="kr">도쿄국립박물관</span>
                            <span data-lang-type="jp">東京国立博物館</span>
                            <span data-lang-type="en">Tokyo National Museum</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">마쓰바라 가즈유키(松原一征)</span>
                            <span data-lang-type="jp">松原家</span>
                            <span data-lang-type="en">Kazuyuki Matsubara</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">세이켄지</span>
                            <span data-lang-type="jp">聖けんじ</span>
                            <span data-lang-type="en">Seikenji</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">센뉴지</span>
                            <span data-lang-type="jp">センニュージー</span>
                            <span data-lang-type="en">Sennyuji</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">시가현립 비와호문화관</span>
                            <span data-lang-type="jp">滋賀県立琵琶湖文化館</span>
                            <span data-lang-type="en">Shiga Prefectural biwaho Cultural Center</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">시모노세키 시립 역사박물관</span>
                            <span data-lang-type="jp">下関市立歴史博物館</span>
                            <span data-lang-type="en">Shimonoseki City Museum of History</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">아카마신궁</span>
                            <span data-lang-type="jp">赤間神宮</span>
                            <span data-lang-type="en">Akama Shrine</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">야마구치현립 야마구치 박물관</span>
                            <span data-lang-type="jp">山口県立山口博物館</span>
                            <span data-lang-type="en">Yamaguchi Prefectural Yamaguchi Museum</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">야마구치현 문서관</span>
                            <span data-lang-type="jp">山口県文書館</span>
                            <span data-lang-type="en">Yamaguchi Prefectural Archives</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">오우미하치만시</span>
                            <span data-lang-type="jp">大海八幡市</span>
                            <span data-lang-type="en">Omi Hachiman City</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">오사카역사박물관</span>
                            <span data-lang-type="jp">大阪歴史博物館</span>
                            <span data-lang-type="en">Osaka Museum of History</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">이키시 교육위원회</span>
                            <span data-lang-type="jp">壱岐市教育委員会</span>
                            <span data-lang-type="en">Iki City Board of Education</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">죠센지(가미노세키 교육위원회 기탁)</span>
                            <span data-lang-type="jp">城之寺(上ノ関教育委員会寄託)</span>
                            <span data-lang-type="en">Josenji Temple (deposited by the Kaminoseki Board of Education)</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">지쇼인(慈照院)</span>
                            <span data-lang-type="jp">慈照院</span>
                            <span data-lang-type="en">Jisho-in Temple</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">하다가(시모노세키시립 역사박물관 기탁)</span>
                            <span data-lang-type="jp">波田家(下関市立歴史博物館寄託)</span>
                            <span data-lang-type="en">Hata Family(deposited at Shimonoseki City Museum of History)</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">호슈회(관리단체:나가하마시)</span>
                            <span data-lang-type="jp">保州会(管理団体:長浜市)</span>
                            <span data-lang-type="en">Hoshi Association (management organization: Nagahama City)</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">혼간지 하치만 별원</span>
                            <span data-lang-type="jp">本願寺八幡別院</span>
                            <span data-lang-type="en">honganji hachiman byeol-won</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">혼렌지(오카야마현립 박물관 기탁)</span>
                            <span data-lang-type="jp">本蓮寺(岡山県立博物館寄託)</span>
                            <span data-lang-type="en">(en)혼렌지</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">후쿠야마시 도모노우라 역사민속자료관</span>
                            <span data-lang-type="jp">福山市富良浦歴史民俗資料館</span>
                            <span data-lang-type="en">Fukuyama City Tomonoura Museum of History and Folklore</span>
                        </li>
                        <li data-bot-tab="owner" style="display:none">
                            <span data-lang-type="kr">후쿠오카현립 이쿠토쿠칸 고등학교 긴료 동창회(미야코정 역사민속박물관 기탁)</span>
                            <span data-lang-type="jp">福岡県立育徳館高等学校錦陵同窓会(みやこ町歴史民俗博物館寄託)</span>
                            <span data-lang-type="en">Fukuoka Prefectural Ikuto Kukan High School Ginryo Alumni Association (Miyakojeong Museum of History and Folklore)</span>
                        </li>
                        <li id="more" data-bot-more="close">
    						<span data-lang-type="kr">+ 더보기</span>
    						<span data-lang-type="jp">+ もっと見る</span>
    						<span data-lang-type="en">+ more</span>
						</li>
                    </ul>
                    
                </div>
                <!-- 소장처별 결과영역 끝 -->

                <!-- 분류별 검색영역 -->
                <article class="cate-in-Search">
                    <input data-cate-search type="text" placeholder="Search..">
                    <button data-cate-btn>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(0,0,0,.6)"></path></svg>
                    </button>
                </article>
                
                <p id="searchNone" style="font-size:18px; display: none">해당 검색어에 대한 검색결과가 없습니다.</p>

                <!-- 결과검색 나오는 리스트 영역-->
                <article data-cat-book-list></article>
                <!-- 결과검색 나오는 리스트 영역 끝-->

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
    <!-- 검색영역 전체 끝 -->


    </div>

<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>