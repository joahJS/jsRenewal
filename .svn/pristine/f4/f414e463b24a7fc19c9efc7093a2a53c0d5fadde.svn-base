/** 
메인 > 디지털 소장자료
작업자 :	장민선
작업일자 :	2022-12-21
*/

document.addEventListener('DOMContentLoaded', () => {
	getDigital();
	recentSearch();
})

const searchText = document.getElementById('inputSearch');
const searchBtn = document.getElementById('btnSearch');

searchBtn.addEventListener('click', () => {
	recentSave(searchText);
	setItem('digitalList', 0)
	getDigital();
})

let _length = 10; //게시글 수
let pageNum = 0; //현재 게시판 번호

if(getItem("digitalList") != null){
	_start = getItem("digitalList")*_length;
}

// 검색
const findObj = document.getElementById('slctFilter');
const findWord = document.getElementById('inputSearch');

const digitalList = document.querySelector('[data-digital-list]');
const totalCnt = document.querySelector('[data-total-cnt]');

// 디지털 소장자료 리스트
function getDigital(){
	let page = getItem('digitalList');
	
	if(page == 0){
		page = 1;
	}
	pageNum = (page-1)*_length;
	
	let data = {};
	data['pageNum'] = pageNum;
	data['findObj'] = findObj.value;
	data['findWord'] = findWord.value;
	
	$.ajax({
		url : 'getDigital.do',
		type : 'post',
		data : {
			'data' : JSON.stringify(data)
		},
		success : function(res) {
			digitalList.innerHTML = '';
			if(res.length > 0) {
				totalCnt.textContent = res[0].CNT;
				
				let item = `
					<div class="digital-content-img">
                        <img src="/common/img/coll-item-temp02.jpg" data-img>
                    </div>
                    <div class="digital-content-list">
                        <h6 class="digital-title">
                        	<span data-lang-type="kr" data-regno-kr></span>
                        	<span data-lang-type="jp" data-regno-jp></span>
                        	<span data-lang-type="en" data-regno-en></span>
                       </h6>
                        <p class="digital-subTitle" >
                        	<span data-lang-type="kr" data-title-kr> </span>
                        	<span data-lang-type="jp" data-title-jp> </span>
                        	<span data-lang-type="en" data-title-en> </span>
                        </p>
                        <br>
                        <ul class="digital-data-list">
                            <li>
                                <span data-trange></span>
                            </li>
                            <li>
                                <span data-lang-type="kr" data-author-kr></span>
                                <span data-lang-type="jp" data-author-jp>(jp)</span>
                                <span data-lang-type="en" data-author-en>(en)</span>
                            </li>
                            <li>
                                <span data-lang-type="kr" data-form-kr></span>
                                <span data-lang-type="jp" data-form-jp>(jp)</span>
                                <span data-lang-type="en" data-form-en>(en)</span>
                            </li>
                            <li>
                                <span data-dmn></span>
                            </li>
                            <li>
                                <span data-lang-type="kr" data-acq-kr></span>
                                <span data-lang-type="jp" data-acq-jp>(jp)</span>
                                <span data-lang-type="en" data-acq-en>(en)</span>
                            </li>
                        </ul>

                        <button class="round_btnStyle">
                            <span data-lang-type="kr">디지털 소장자료 보기</span>
                            <span data-lang-type="jp">デジタルコレクションを見る</span>
                            <span data-lang-type="en">View Digital Collections</span>
                        </button>
                    </div>
				`;
				
				res.forEach((e) => {
					const card = document.createElement('div');
					card.classList.add('digital-content-box');
					
					card.innerHTML = item;
					
					card.querySelector('[data-regno-kr]').textContent = e.REGNO + ' ' + e.ASGN_KR;
					card.querySelector('[data-regno-jp]').textContent = e.REGNO + ' ' + e.ASGN_JP;
					card.querySelector('[data-regno-en]').textContent = e.REGNO + ' ' + e.ASGN_EN;
					card.querySelector('[data-title-kr]').textContent = e.TITLE_KR;
					card.querySelector('[data-title-jp]').textContent = e.TITLE_JP;
					card.querySelector('[data-title-en]').textContent = e.TITLE_EN;
					card.querySelector('[data-img]').src = e.FILURL;
					card.querySelector('[data-author-kr]').textContent = e.AUTHOR_KR;
					card.querySelector('[data-author-jp]').textContent = e.AUTHOR_JP;
					card.querySelector('[data-author-en]').textContent = e.AUTHOR_EN;
					card.querySelector('[data-trange]').textContent = e.TRANGE;
					card.querySelector('[data-form-kr]').textContent = e.FORM_KR;
					card.querySelector('[data-form-jp]').textContent = e.FORM_JP;
					card.querySelector('[data-form-en]').textContent = e.FORM_EN;
					card.querySelector('[data-dmn]').textContent = e.DMN;
					card.querySelector('[data-acq-kr]').textContent = e.ACQ_KR;
					card.querySelector('[data-acq-jp]').textContent = e.ACQ_JP;
					card.querySelector('[data-acq-en]').textContent = e.ACQ_EN;
					
					digitalList.appendChild(card);
					
					card.querySelector('.round_btnStyle').addEventListener('click', () => {
						if(e.IMGLINK != '') {
							window.open(e.IMGLINK);
						} else {
							alert('등록된 자료가 없습니다.');
						}
					})
				})
				
				let totCnt = res[0]["CNT"];
				if(pageNum == 0) {
					pageNum = 1;
				}
				paging(totCnt, page);
				
				checkLangType();
			} else {
				totalCnt.textContent = 0;
				paging(0, 0);
			}
		},
		error : function() {
			alert('리스트를 가져오는데 오류가 발생하였습니다.');
			return;
		}
	})
}

// 페이징
const pageArea = document.querySelector('[data-board-pager-bullets-container]');
function paging(totalData, currentPage){
    let dataPerPage = _length;    // 한 페이지에 나타낼 데이터 수
    let pageCount = 10;        // 한 화면에 나타낼 페이지 수

    let totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
    let pageGroup = Math.ceil(currentPage/pageCount);    // 페이지 그룹

    let prevBtn = document.querySelector('[data-board-pager-prev]');
    let nextBtn = document.querySelector('[data-board-pager-next]');
    
    let last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
    if(last > totalPage)
        last = totalPage;
    let first = last - (pageCount-1);    // 화면에 보여질 첫번째 페이지 번호
    if(first < 1){
       first = 1;
    }
    let next = last+1;
    let prev = first-1;
    let html = "";
    
    if(prev > 0) prevBtn.id= 'prev';
    if (first == 1) prevBtn.classList.add('edge')
    else prevBtn.classList.remove('edge')
    
    for(let i=first; i <= last; i++){
        html += "<li id=" + i + " data-board-pager-bullets><a href='#'>" + i + "</a></li> ";
    }
    
    if(last < totalPage) nextBtn.id = 'next';
    if(last == totalPage) nextBtn.classList.add('edge');
    else nextBtn.classList.remove('edge');

    pageArea.innerHTML = html;
    
    
    $("#paging li#" + currentPage).addClass('on');    // 현재 페이지 표시

    const pagerEl = document.getElementById('paging');
    const pagerBullets = pagerEl.querySelectorAll('li');
   
    pagerBullets.forEach((e) =>{
    	e.addEventListener('click', () => {
        let myID = e.id;
        let notE = getSiblings(e);
         
        setItem('digitalList', myID);
         
        getDigital();
         
         e.classList.add('on');
         notE.forEach((a) => {
           a.classList.remove('on');
         })
      });
   });
   
   prevBtn.addEventListener('click',function() {
      if(this.id == "prev"){
         setItem("digitalList",prev);
         
         getDigital();
       }
   })
   
   nextBtn.addEventListener('click',function() {
      if(this.id == "next"){
         setItem("digitalList",next);
         
         getDigital();
       }
   })
}

function recentSave(element) {
	let getCurrentList = sessionStorage.getItem('totalSearchRecentWords');
	let recentWordArray = [];

	if (getCurrentList !== null) {
		recentWordArray = getCurrentList.split(',');
	}

	recentWordArray.push(element.value);
	
	let removeDups = [ ... new Set(recentWordArray) ];
	
	sessionStorage.setItem('totalSearchRecentWords', removeDups);
}

const recentList = document.querySelector('[data-recent-list]');

function recentSearch() {
	let getCurrentList = sessionStorage.getItem('totalSearchRecentWords');
	let recentWordArray = [];

	if (getCurrentList !== null) {
		recentWordArray = getCurrentList.split(',');
		
		recentWordArray.forEach((e) => {
			let item = document.createElement('li');
			item.textContent = e;
			
			item.addEventListener('click', () => {
				searchText.value = e;
				searchBtn.click();
			})
			
			recentList.appendChild(item);
		})
	}
}