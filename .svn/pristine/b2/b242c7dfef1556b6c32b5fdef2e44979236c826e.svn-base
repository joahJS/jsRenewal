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
    <script src="/admSrc/js/adminDataList.js?v=<%=System.currentTimeMillis()%>" defer></script>
	<title>::조선통신사 디지털아카이브::</title>
</head>

<body>
    <div id="wrap">
           <!--서브페이지 탭 + 이미지-->
        <div id="admin-sub-Page">
        <div id="sub-page-box">
                <img src="https://picsum.photos/1920/1080?random=1" alt="" data-sub-image="">
            <div data-sub-text="">
                <h4 data-sub-title="">조선통신사 디지털 아카이브 관리자페이지</h4>
                <hr class="hf">
            </div>
        </div>
        <ul id="subNav">
            <li class="sub-page-routes " onclick="location.href='adminBookList.do'">기록물</li>
            <li class="sub-page-routes current" onclick="location.href='adminDataList.do'">소장 자료</li>
        </ul>
        <section id="contentView" data-sub-route="community" data-sub-route-current="도록"></section>
    </div>

    <section id="adminContent">
        <article class="web-common-inner">
            <div class="admin-list-topline">
                <a class="adm-go-home-button" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z"/></svg>
                    메인으로 이동
                </a>
                <p><span class="point_color">" 명칭 및 정보 "</span> 항목을 클릭하면 상세보기/수정하기 페이지로 이동합니다.</p>
                <button onclick="location.href='/admin/adminData.do'">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
                    글쓰기
                </button>
            </div>

            <div class="admin-data-item">
                <div class="admin-data-header">
                    <p>ID</p>
                    <p>명칭 및 정보</p>
                    <p>상세</p>
                </div>
                
                <div data-data-list>
            
            	</div>
            </div>
        </article>
    </section>

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
</body>

</html>