/** 
메인 > 기록물 검색
작업자 :	장민선
작업일자 :	2022-12-21
*/

document.addEventListener('DOMContentLoaded', () => {
	getSearchArchive();
	recentSearch();
})

const searchText = document.getElementById('inputSearch');
const searchBtn = document.getElementById('btnSearch');

searchText.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
        e.preventDefault();
		recentSave(searchText);
		setItem("searchArchive", 0);
		getSearchArchive();
      }
})

searchBtn.addEventListener('click', () => {
	recentSave(searchText);
	setItem("searchArchive", 0);
	getSearchArchive();
})

let _length = 10; //게시글 수
let pageNum = 0; //현재 게시판 번호

if(getItem("searchArchive") != null){
	_start = getItem("searchArchive")*_length;
}

// 검색
const findObj = document.getElementById('slctFilter');
const findWord = document.getElementById('inputSearch');

const archiveList = document.querySelector('[data-archive-list]');
const totalCnt = document.querySelector('[data-total-cnt]');

// 디지털 소장자료 리스트
function getSearchArchive(){
	let page = getItem("searchArchive");
	
	if(page == 0){
		page = 1;
	}
	pageNum = (page-1)*_length;
	
	let data = {};
	data['pageNum'] = pageNum;
	data['findObj'] = findObj.value;
	data['findWord'] = findWord.value;
	
	$.ajax({
		url : 'getSearchArchive.do',
		type : 'post',
		data : {
			'data' : JSON.stringify(data)
		},
		success : function(res) {
			archiveList.innerHTML = '';
			if(res.length > 0) {
				totalCnt.textContent = res[0].CNT;
				
				let item = `
					
					<h3 class="searchArc-item-title">
                        <span data-lang-type="kr" data-asgn-kr></span>
                        <span data-lang-type="jp" data-asgn-jp>(jp)</span>
                        <span data-lang-type="en" data-asgn-en>(en)</span>
                    </h3>
                    <p data-lang-type="kr" data-cont-kr></p>
                    <p data-lang-type="jp" data-cont-jp>(jp)</p>
                    <p data-lang-type="en" data-cont-en>(en)</p>
                    <div class="searchArc-item-buttons">
                        <button data-probook-link>
                            <span data-lang-type="kr">기록물 보기</span>
                            <span data-lang-type="jp">アーカイブの表示</span>
                            <span data-lang-type="en">Viewing Archives</span>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                        </button>
                        <button data-normalbook-link>
                            <span data-lang-type="kr">일반인 해설서 보기</span>
                            <span data-lang-type="jp">公開マニュアルを見る</span>
                            <span data-lang-type="en">View the Public Manual</span>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                        </button>
                    </div>
				`;
				
				res.forEach((e) => {
					const card = document.createElement('div');
					card.classList.add('searchArc-content-box');
					
					card.innerHTML = item;

					card.querySelector('[data-asgn-kr]').textContent = e.ASGN_KR;
					card.querySelector('[data-asgn-jp]').textContent = e.ASGN_JP;
					card.querySelector('[data-asgn-en]').textContent = e.ASGN_EN;
					card.querySelector('[data-cont-kr]').textContent = e.CONT_KR;
					card.querySelector('[data-cont-jp]').textContent = e.CONT_JP;
					card.querySelector('[data-cont-en]').textContent = e.CONT_EN;
					
					if(e.LINKP_KR == '') {
						card.querySelector('[data-probook-link]').style.display = 'none';
					}
					
					if(e.LINKN_KR == '') {
						card.querySelector('[data-normalbook-link]').style.display = 'none';
						card.querySelector('.searchArc-item-buttons').style.gridTemplateColumns = '1fr';
					}
					
					archiveList.appendChild(card);
					
					card.querySelector('[data-probook-link]').addEventListener('click', () => {
						if(e.LINKP_KR != '') {
							window.open(e.LINKP_KR);
						} else {
							alert('등록된 자료가 없습니다.');							
						}
					})
					
					card.querySelector('[data-normalbook-link]').addEventListener('click', () => {
						if(e.LINKN_KR != '') {
							window.open(e.LINKN_KR);
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
         
        setItem('searchArchive', myID);
         
        getSearchArchive();
         
         e.classList.add('on');
         notE.forEach((a) => {
           a.classList.remove('on');
         })
      });
   });
   
   prevBtn.addEventListener('click',function() {
      if(this.id == "prev"){
         setItem("searchArchive",prev);
         
         getSearchArchive();
       }
   })
   
   nextBtn.addEventListener('click',function() {
      if(this.id == "next"){
         setItem("searchArchive",next);
         
         getSearchArchive();
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






