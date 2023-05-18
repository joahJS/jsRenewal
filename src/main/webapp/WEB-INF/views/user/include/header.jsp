<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html>
<html lang="kr">
	<head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">

		<meta property="og:image" content="/common/img/logo_color.svg">
	    
	    <meta id="_csrf" name="_csrf" content="${_csrf.token}">
    	<meta id="_csrf_name" name="_csrf_name" content="${_csrf.headerName}">
	
	    <link rel="stylesheet" href="/common/css/reset.css">
	    <link rel="stylesheet" href="/common/css/default.css">
	    <link rel="stylesheet" href="/common/css/dropDown.css"> <!--dropDowm-->
	    <link rel="stylesheet" href="/common/css/variables.css"> <!--variables-->
	
	    <link rel="stylesheet" href="/usrSrc/style.css">
	
	    <script src="/common/js/jquery-3.6.0.js"></script>
	    <script src="/common/js/default.js" defer></script>
	    <script src="/usrSrc/js/langType.js"></script>
	    <script src="/usrSrc/js/header.js" defer></script>
	    <script src="/usrSrc/js/powerHead.js" defer></script>
	    <script src="/common/js/extraDropDown.js" defer></script> <!--dropDowm-->

		<link rel="stylesheet" href="/usrSrc/css/swiper.min.css" defer> <!-- for btmSlider -->
		<script src="/usrSrc/js/swiper-bundle.min.js" defer></script> <!-- for btmSlider -->
		<script src="/usrSrc/js/btmSlider.js" defer></script> <!-- for btmSlider -->

	    <title>::조선통신사 디지털아카이브::</title>
	</head>
	<header id="header" class="web-common-inner">
	    
			<div class="hd-logo-div" onclick="location.href='/'">
				<img class="mob-logo-img" src="/common/img/logo_w.svg" alt="조선통신사 디지털아카이브 로고">
				<h2>조선통신사</h2>
				<p>Joseon Tongsinsa</p>
			</div>
	        <div class="hd-search-bar">
				<button data-total-search-btn>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(0,0,0,.6)"/></svg>
				</button>
	            <input type="text" placeholder="Search.." data-total-search-text maxlength="50">
	        </div>
			<nav>
				<ul class="web-common-inner">
					<li onclick="location.href='/'">
						<span>Home</span>
					</li>
					<li onclick="location.href='/archive.do'">
						<!-- <a href="/archive.do"> -->
							<span data-lang-type="kr">아카이브 소개</span>
							<span data-lang-type="jp">アーカイブの紹介</span>
							<span data-lang-type="en">Introduction</span>
						<!-- </a> -->

						<div data-nav-sublist class="hd-subnav-hidden hd-subnav-list">
							<ul>
								<li>
									<a href="/archive.do">
										<span data-lang-type="kr">아카이브 안내</span>
										<span data-lang-type="jp">アーカイブの紹介</span>
										<span data-lang-type="en">Introduction to the Archives</span>  
									</a>
								</li>
								<li>
									<a href="/DataUse.do">
										<span data-lang-type="kr">자료이용 안내</span>
										<span data-lang-type="jp"> 資料の使用ガイド</span>
										<span data-lang-type="en">guide to Using Materials</span>   
									</a>
								</li>
							</ul>
						</div>
					</li>

					<li onclick="location.href='/categorical.do#trade'">
						<!-- <a href="/categorical.do#trade"> -->
							<span data-lang-type="kr">기록물 분류</span>
							<span data-lang-type="jp">カテゴリー別記録</span>
							<span data-lang-type="en">Records by Category</span>
						<!-- </a> -->
							<div data-nav-sublist class="hd-subnav-hidden hd-subnav-list">
								<ul>
									<li>
										<a class="nav-cate-link" href="/categorical.do#trade" onclick="cateTabInit()">
											<span data-lang-type="kr"> 등재구분별</span>
											<span data-lang-type="jp">登録区分</span>
											<span data-lang-type="en">classification of registration</span>
										</a>
									</li>
									<li>
										<a class="nav-cate-link" href="/categorical.do#age1" onclick="cateTabInit()">
											<span data-lang-type="kr">제작 시기별</span>
											<span data-lang-type="jp">生産時期別</span>
											<span data-lang-type="en">production period</span>
										</a>
									</li>
									<li>
										<a class="nav-cate-link" href="/categorical.do#nation" onclick="cateTabInit()">
											<span data-lang-type="kr">소장 국가별</span>
											<span data-lang-type="jp">収集国別</span>
											<span data-lang-type="en">country of collection</span>
										</a>
									</li>
									<li>
										<a class="nav-cate-link" href="/categorical.do#form" onclick="cateTabInit()">
											<span data-lang-type="kr">형태별</span>
											<span data-lang-type="jp">形で</span>
											<span data-lang-type="en">shape</span>
										</a>
									</li>
									<li>
										<a class="nav-cate-link" href="/categorical.do#owner" onclick="cateTabInit()">
											<span data-lang-type="kr">소장처별</span>
											<span data-lang-type="jp">コレクション別</span>
											<span data-lang-type="en">collection</span>
										</a>
									</li>
								</ul>
							</div>
					</li>
					<li onclick="location.href='/digital.do'">
						<!-- <a href="/digital.do"> -->
							<span data-lang-type="kr">디지털 소장자료</span>
							<span data-lang-type="jp">デジタルコレクション</span>
							<span data-lang-type="en">Digital Collection</span>
						<!-- </a> -->
					</li>
					
				</ul>

			</nav>

			<button data-nav-exhibition onclick="location.href='http://210.114.225.94:8080/'">
				<span data-lang-type="kr">가상전시관</span>
				<span data-lang-type="jp">仮想展示館</span>
				<span data-lang-type="en">Virtual Exhibition Hall</span>
			</button>


	    
	</header>
	<section id="mobile-header">
		<p id="mobile-burger-button">
			<span></span><span></span><span></span>
		</p>
		<div class="mob-logo-div" onclick="location.href='/'">
			<img class="mob-logo-img" src="/common/img/logo_color.svg" alt="조선통신사 디지털아카이브 로고">
			
		</div>
		<div>
			
		</div>
	</section>