<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/user/include/header.jsp" %>
<script src="/usrSrc/js/digital.js?v=<%=System.currentTimeMillis()%>" defer></script>

<body id="backgroundImg">
    <div id="wrap">
        <section id="back_img" class="digital-img"><!--상단 이미지-->
            <article id="back_img_inner">
                <h3>
                    <span data-lang-type="kr">디지털 소장자료</span>
                    <span data-lang-type="jp">デジタルコレクション</span>
                    <span data-lang-type="en">Digital collection</span>
                </h3>
            </article>
        </section>
        
        <section id="total-search-box"><!--total-search-box-->
            <div class="search-title-box">
                <h3 class="search-title-text">
                    <span data-lang-type="kr">디지털 소장자료 검색</span>
                    <span data-lang-type="jp">デジタル コレクションの検索</span>
                    <span data-lang-type="en">Search for Digital Collections</span>
                </h3>   
            </div>
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
    </section><!--total-search-box-->
    <section id="digital-content">
        <article id="digital-content-inner">
            <h3 class="digital-content-title">
                <span data-lang-type="kr">디지털 소장 자료</span>
                <span data-lang-type="jp">デジタルコレクション</span>
                <span data-lang-type="en">Digital collection</span>
                <span class="Small-font">(전체 <span data-total-cnt>0</span>건)</span>
            </h3>
            

            <div class="digital-content-flexBox" data-digital-list>
            
                <!-- <div class="digital-content-box">반복영역
                    <div class="digital-content-img">
                        <img src="/common/img/coll-item-temp02.jpg">
                    </div>
                    <div class="digital-content-list">
                        <h6 class="digital-title" >K-I-1 통신사등록</h6>
                        <p class="digital-subTitle">통신사등록</p>
                        <br>
                        <ul class="digital-data-list">
                            <li>
                                <span data-lang-type="kr">1641</span>
                                <span data-lang-type="jp">(jp)1641</span>
                                <span data-lang-type="en">(en)1641</span>
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
                                <span data-lang-type="en">(height x width) 41.8 x 26.6cm</span>
                            </li>
                            <li>
                                <span data-lang-type="kr">서울대학교 규장각한국학 연구원</span>
                                <span data-lang-type="jp">(jp)서울대학교 규장각한국학 연구원</span>
                                <span data-lang-type="en">(en)서울대학교 규장각한국학 연구원</span>
                            </li>
                        </ul>

                        <button class="round_btnStyle" onclick="window.open('http://archive.tongsinsa.com/data/original_image/K-I-1/12870-1_1/#p=1')">
                            <span data-lang-type="kr">디지털 소장자료 보기</span>
                            <span data-lang-type="jp">(jp)디지털 소장자료 보기</span>
                            <span data-lang-type="en">show digital collection data</span>
                        </button>
                    </div>
                </div>반복영역

                <div class="digital-content-box">반복영역
                    <div class="digital-content-img">
                        <img src="/common/img/coll-item-temp01.jpg">
                    </div>
                    <div class="digital-content-list">
                        <h6 class="digital-title" >K-I-2 통신사등록</h6>
                        <p class="digital-subTitle">통신사등록</p>
                        <br>
                        <ul class="digital-data-list">
                            <li>
                                <span data-lang-type="kr">1641</span>
                                <span data-lang-type="jp">(jp)1641</span>
                                <span data-lang-type="en">(en)1641</span>
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
                                <span data-lang-type="en">(height x width) 41.8 x 26.6cm</span>
                            </li>
                            <li>
                                <span data-lang-type="kr">서울대학교 규장각한국학 연구원</span>
                                <span data-lang-type="jp">(jp)서울대학교 규장각한국학 연구원</span>
                                <span data-lang-type="en">(en)서울대학교 규장각한국학 연구원</span>
                            </li>
                        </ul>

                        <button class="round_btnStyle" onclick="window.open('http://archive.tongsinsa.com/data/original_image/K-I-1/12870-1_1/#p=1')">
                            <span data-lang-type="kr">디지털 소장자료 보기</span>
                            <span data-lang-type="jp">(jp)디지털 소장자료 보기</span>
                            <span data-lang-type="en">show digital collection data</span>
                        </button>
                    </div>
                </div> --><!--반복영역-->
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
    </section><!--digtal-content-->


    </div>

<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>