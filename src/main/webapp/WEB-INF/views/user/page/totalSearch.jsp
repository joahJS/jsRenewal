<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

 <!--여기만 모듈화-->
<script src="/usrSrc/js/totalSearch.js" defer></script>
<section id="totalSearchBack">
    <div id="totalSearch" data-prod-search class="web-common-inner">
        <!-- <select name="totSearch" id="slctFilter" data-tot-select>
            <option disabled >전체</option>
            <option value="all">전체</option>
            <option value="title">제목</option>
            <option value="content">본문</option>
        </select> -->
        <input type="hidden" id="inputFilter" data-input-select>
    
        <!-- <hr class="vf" data-just-deco-hr> -->
    
        <input type="text" name="totSearch" id="inputSearch" placeholder="검색어를 입력하세요." data-tot-input>
        <!-- <input type="hidden" id="inputSearch" data-input-text>
    
        <hr class="vf"> -->
    
        <button type="button" id="btnSearch" data-tot-button>
            <span data-lang-type="kr">Search</span>
            <span data-lang-type="jp">けんさく</span>
            <span data-lang-type="en">Search</span>
        </button>
    </div>
</section>


