<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="kr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta id="_csrf" name="_csrf" content="${_csrf.token}">
    <meta id="_csrf_name" name="_csrf_name" content="${_csrf.headerName}">

    <link rel="stylesheet" href="/common/css/reset.css">
    <link rel="stylesheet" href="/common/css/default.css">
    <link rel="stylesheet" href="/common/css/dropDown.css"><!--dropDowm-->
    <link rel="stylesheet" href="/common/css/variables.css"><!--variables-->

    <link rel="stylesheet" href="/admSrc/adminStyle.css">

    <script src="/common/js/jquery-3.6.0.js"></script>
    <script src="/common/js/default.js" defer></script>
    <script src="/common/js/extraDropDown.js" defer></script><!--dropDowm-->
    <script src="/admSrc/js/adminWritePage.js?v=<%=System.currentTimeMillis()%>" defer></script>
	<title>::조선통신사 디지털아카이브::</title>
</head>

<body>
    <div id="wrap">
           <!--서브페이지 탭 + 이미지-->
        <div id="admin-sub-Page">
        <div id="sub-page-box">
            <img src="https://picsum.photos/1920/1080?random=1" alt="" data-sub-image="">
            <div data-sub-text="">
                <h4 data-sub-title="">조선통신사 디지털 아카이브 자료등록 관리자페이지</h4>
                <hr class="hf">
            </div>
        </div>
        <ul id="subNav">
            <li class="sub-page-routes current" onclick="location.href='adminBookList.do'">기록물</li>
            <li class="sub-page-routes " onclick="location.href='adminDataList.do'">소장 자료</li>
        </ul>
        <section id="contentView" data-sub-route="community" data-sub-route-current="도록"></section>
    </div>



    <section id="book-write-page">
        <article id="bookWrite-page-inner">
            <h3>기록물 등록</h3>
            <!-- <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>I</span>
                    <span>D</span>
                </p>
                <input type="text" class="field-text" readonly>
            </div> -->

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>등</span>
                    <span>재</span>
                    <span>번</span>
                    <span>호</span>
                </p>
                <input type="text" class="field-text" data-regno>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>표</span>
                    <span>지</span>
                    <span>이</span>
                    <span>미</span>
                    <span>지</span>
                </p>
                <div class="text-box">
                    <input type="file" id="imgFile" data-img-kr>
                    <label for="imgFile" class="imgFiles">선택</label>
                    <input class="upload-name field-text" value="국문파일" placeholder="첨부파일" readonly>

                    <input type="file" id="imgFile1" data-img-jp>
                    <label for="imgFile1" class="imgFiles">선택</label>
                    <input class="upload-name1 field-text" value="일문파일" placeholder="첨부파일" readonly>

                    <input type="file" id="imgFile2" data-img-en>
                    <label for="imgFile2" class="imgFiles">선택</label>
                    <input class="upload-name2 field-text" value="영문파일" placeholder="첨부파일" readonly>
                </div>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>명</span>
                    <span>칭</span>
                </p>
                <div class="text-box">
                    <input type="text" class="field-text1" placeholder="국문" data-assign-kr>
                    <input type="text" class="field-text1" placeholder="일문" data-assign-jp>
                    <input type="text" class="field-text1" placeholder="영문" data-assign-en>
                </div>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>시</span>
                    <span>대</span>

                </p>
                <input type="text" class="field-text" data-range>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>형</span>
                    <span>태</span>
                </p>
                <div class="text-box">
                    <input type="text" class="field-text1" placeholder="국문" data-form-kr>
                    <input type="text" class="field-text1" placeholder="일문" data-form-jp>
                    <input type="text" class="field-text1" placeholder="영문" data-form-en>
                </div>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>소</span>
                    <span>장</span>
                    <span>처</span>

                </p>
                <div class="text-box">
                    <input type="text" class="field-text1" placeholder="국문" data-acq-kr>
                    <input type="text" class="field-text1" placeholder="일문" data-acq-jp>
                    <input type="text" class="field-text1" placeholder="영문" data-acq-en>
                </div>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>기</span>
                    <span>록</span>
                    <span>물</span>
                    <span>분</span>
                    <span>류</span>
                </p>
                <input type="radio" class="field-choice" name="Record" id="diplomacy" value="외교 기록"><label
                    for="diplomacy">외교 기록</label>
                <input type="radio" class="field-choice" name="Record" id="journey" value="여정의 기록"><label for="journey">여정의
                    기록</label>
                <input type="radio" class="field-choice" name="Record" id="Culture" value="문화교류의 기록"><label for="Culture">문화교류의
                    기록</label>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>제</span>
                    <span>작</span>
                    <span>국</span>
                    <span>가</span>

                </p>
                <input type="radio" class="field-choice" name="nation" id="Korea" value="조선"><label
                    for="Korea">조선</label>
                <input type="radio" class="field-choice" name="nation" id="Japan" value="일본"><label for="Japan">일본</label>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>기</span>
                    <span>록</span>
                    <span>물</span>
                    <span>링</span>
                    <span>크</span>
                    <span>/</span>
                    <span>전</span>
                    <span>문</span>
                    <span>가</span>
                </p>
                <div class="text-box">
                    <input type="text" class="field-text1" placeholder="국문" data-link-professional-kr>
                    <input type="text" class="field-text1" placeholder="일문" data-link-professional-jp>
                    <input type="text" class="field-text1" placeholder="영문" data-link-professional-en>
                </div>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title">
                    <span>기</span>
                    <span>록</span>
                    <span>물</span>
                    <span>링</span>
                    <span>크</span>
                    <span>/</span>
                    <span>일</span>
                    <span>반</span>
                    <span>인</span>
                </p>
                <div class="text-box">
                    <input type="text" class="field-text1" placeholder="국문" data-link-normal-kr>
                    <input type="text" class="field-text1" placeholder="일문" data-link-normal-jp>
                    <input type="text" class="field-text1" placeholder="영문" data-link-normal-en>
                </div>
            </div>

            <div class="dataWrite-field-box">
                <p class="field-title1 ">
                    <span>기</span>
                    <span>록</span>
                    <span>물</span>
                    <span>본</span>
                    <span>문</span>
                </p>
                <div class="textarea-box">
                    <textarea type="text" class="field-textarea" placeholder="국문" data-content-kr></textarea>
                    <textarea type="text" class="field-textarea" placeholder="일문" data-content-jp></textarea>
                    <textarea type="text" class="field-textarea" placeholder="영문" data-content-en></textarea>
                </div>
            </div>

            <div class="admin-btn">
                <button class="btn-list" onclick="location.href='adminBookList.do'">목록</button>
                <button id="savebtn">저장</button>
                <!-- <button>취소</button> -->
            </div>

</div>
</body>

</html>