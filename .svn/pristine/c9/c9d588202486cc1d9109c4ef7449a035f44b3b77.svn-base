/** 
통합검색 결과 페이지
작업자 :	장민선
작성일자 :	2022-12-21
*/

// 검색
const searchText = document.querySelector('.search-keyword');

// 리스트 영역
const ilBookList = document.querySelector('[data-ilbook-list]');
const cltDataList = document.querySelector('[data-clt-data-list]');
const ilBookCnt = document.querySelector('[data-ilbook-cnt]');
const cltDataCnt = document.querySelector('[data-clt-data-cnt]');


document.addEventListener('DOMContentLoaded', () => {
	getSearchResult();
})

function getSearchResult() {
	let resultText = searchText.textContent;
	
	let data = {};
	let langType = localStorage.getItem('JSArchiveLangType');
	data['searchText'] = resultText;
	data['LANG'] = langType;
	
	$.ajax({
		url : 'getSearchResult.do',
		type : 'post',
		aysnc : false,
		data : {
			'data' : JSON.stringify(data)
		},
		success : function(res) {
			ilBookList.innerHTML = '';
			cltDataList.innerHTML = '';
			
			if(res.cltData.length > 0) {
				cltDataCnt.textContent = res.cltData[0].CNT;
				let cltDataItem = `
					<div class="searchResult-content-img">
                        <img src="#" data-img>
                    </div>
                    <div class="searchResult-content-list">
                        <h6 class="searchResult-title" data-regno></h6>
                        <p class="searchResult-subTitle" data-title></p>
                        <br>
                        <ul class="searchResult-data-list">
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
                            <span data-lang-type="kr">디지털 소장자료보기</span>
                            <span data-lang-type="jp">デジタルコレクションを見る</span>
                            <span data-lang-type="en">View Digital Collections</span>
                        </button>
                    </div>
				`;
				
				res.cltData.forEach((e) => {
					const card = document.createElement('div');
					card.classList.add('searchResult-content-box');
					
					card.innerHTML = cltDataItem;
					card.querySelector('[data-img]').src = e.FILURL;
					card.querySelector('[data-trange]').textContent = e.TRANGE;
					card.querySelector('[data-dmn]').textContent = e.DMN;
					
					switch(langType) {
						case 'kr':
							card.querySelector('[data-regno]').textContent = e.REGNO + " " + e.TITLE_KR;
							card.querySelector('[data-title]').textContent = e.TITLE_KR;
							card.querySelector('[data-author-kr]').textContent = e.AUTHOR_KR;
							card.querySelector('[data-form-kr]').textContent = e.FORM_KR;
							card.querySelector('[data-acq-kr]').textContent = e.ACQ_KR;
							break;
							
						case 'jp':
							card.querySelector('[data-regno]').textContent = e.REGNO + " " + e.TITLE_JP;
							card.querySelector('[data-title]').textContent = e.TITLE_JP;
							card.querySelector('[data-author-jp]').textContent = e.AUTHOR_JP;
							card.querySelector('[data-form-jp]').textContent = e.FORM_JP;
							card.querySelector('[data-acq-jp]').textContent = e.ACQ_JP;
							break;
						
						case 'en':
							card.querySelector('[data-regno]').textContent = e.REGNO + " " + e.TITLE_EN;
							card.querySelector('[data-title]').textContent = e.TITLE_EN;
							card.querySelector('[data-author-en]').textContent = e.AUTHOR_EN;
							card.querySelector('[data-form-en]').textContent = e.FORM_EN;
							card.querySelector('[data-acq-en]').textContent = e.ACQ_EN;
							break;
					}
					cltDataList.appendChild(card);

					card.querySelector('.round_btnStyle').addEventListener('click', () => {
						if(e.IMGLINK != '') {
							window.open(e.IMGLINK);
						} else {
							alert('등록된 자료가 없습니다.');
						}
					})
				})
				checkLangType();
			}
			
			if(res.ilBook.length > 0) {
				ilBookCnt.textContent = res.ilBook[0].CNT;
				
				let ilBookItem = `
					<h3 class="categoricalArc-item-title">
                        <span data-lang-type="kr" data-asgn-kr></span>
                        <span data-lang-type="jp" data-asgn-jp>(jp)</span>
                        <span data-lang-type="en" data-asgn-en>(en)</span>
                    </h3>
                    <p data-lang-type="kr" data-cont-kr></p>
					<p data-lang-type="jp" data-cont-jp></p>
					<p data-lang-type="en" data-cont-en></p>
                    <div class="categoricalArc-item-buttons">
                        <button data-probook-link>
                            <span data-lang-type="kr">도록 보기</span>
                            <span data-lang-type="jp">図録を見る</span>
                            <span data-lang-type="en">Read more</span>

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
				
				res.ilBook.forEach((e) => {
					const card = document.createElement('div');
					card.classList.add('categoricalArc-content-box');
					
					card.innerHTML = ilBookItem;
					switch(langType) {
						case 'kr':
							
							card.querySelector('[data-asgn-kr]').textContent = e.ASGN_KR;
							card.querySelector('[data-cont-kr]').textContent = e.CONT_KR;
							break;
							
						case 'jp':
							card.querySelector('[data-asgn-jp]').textContent = e.ASGN_JP;
							card.querySelector('[data-cont-jp]').textContent = e.CONT_JP;
							break;
						
						case 'en':
							card.querySelector('[data-asgn-en]').textContent = e.ASGN_EN;
							card.querySelector('[data-cont-en]').textContent = e.CONT_EN;
							break;
					}
					ilBookList.appendChild(card);
					card.querySelector('[data-probook-link]').addEventListener('click', () => {
						switch(langType) {
						case 'kr':
							if(e.LINKP_KR != '') {
	                            window.open(e.LINKP_KR);
	                        } else {
	                            alert('등록된 자료가 없습니다.');
	                        }
							
							if(e.LINKN_KR != '') {
				                  card.querySelector('[data-normalbook-link]').addEventListener('click', () => {
				                           if(e.LINKN_KR != '') {
				                               window.open(e.LINKN_KR);
				                           } else {
				                               alert('등록된 자료가 없습니다.');
				                           }
				                       })
				               } else {
				                  card.querySelector('[data-normalbook-link]').style.display = 'none';
				                  card.querySelector('.categoricalArc-item-buttons').style.gridTemplateColumns = '1fr';
				               }
							card.querySelector('[data-asgn-kr]').textContent = e.ASGN_KR;
							card.querySelector('[data-cont-kr]').textContent = e.CONT_KR;
							break;
							
						case 'jp':
							if(e.LINKP_JP != '') {
	                            window.open(e.LINKP_JP);
	                        } else {
	                            alert('등록된 자료가 없습니다.');
	                        }
							
							if(e.LINKN_JP != '') {
				                  card.querySelector('[data-normalbook-link]').addEventListener('click', () => {
				                           if(e.LINKN_JP != '') {
				                               window.open(e.LINKN_JP);
				                           } else {
				                               alert('등록된 자료가 없습니다.');
				                           }
				                       })
				               } else {
				                  card.querySelector('[data-normalbook-link]').style.display = 'none';
				                  card.querySelector('.categoricalArc-item-buttons').style.gridTemplateColumns = '1fr';
				               }
							card.querySelector('[data-asgn-jp]').textContent = e.ASGN_JP;
							card.querySelector('[data-cont-jp]').textContent = e.CONT_JP;
							break;
						
						case 'en':
							if(e.LINKP_EN != '') {
	                            window.open(e.LINKP_EN);
	                        } else {
	                            alert('등록된 자료가 없습니다.');
	                        }
							
							if(e.LINKN_EN != '') {
				                  card.querySelector('[data-normalbook-link]').addEventListener('click', () => {
				                           if(e.LINKN_EN != '') {
				                               window.open(e.LINKN_EN);
				                           } else {
				                               alert('등록된 자료가 없습니다.');
				                           }
				                       })
				               } else {
				                  card.querySelector('[data-normalbook-link]').style.display = 'none';
				                  card.querySelector('.categoricalArc-item-buttons').style.gridTemplateColumns = '1fr';
				               }
							card.querySelector('[data-asgn-en]').textContent = e.ASGN_EN;
							card.querySelector('[data-cont-en]').textContent = e.CONT_EN;
							break;
					}
//                        if(e.LINKP_KR != '') {
//                            window.open(e.LINKP_KR);
//                        } else {
//                            alert('등록된 자료가 없습니다.');
//                        }
                    });
					
					
					
					if(e.LINKN_KR != '') {
		                  card.querySelector('[data-normalbook-link]').addEventListener('click', () => {
		                           if(e.LINKN_KR != '') {
		                               window.open(e.LINKN_KR);
		                           } else {
		                               alert('등록된 자료가 없습니다.');
		                           }
		                       })
		               } else {
		                  card.querySelector('[data-normalbook-link]').style.display = 'none';
		                  card.querySelector('.categoricalArc-item-buttons').style.gridTemplateColumns = '1fr';
		               }
					
				})
				checkLangType();
				
//				let totCnt = res[0]["CNT"];
//                if(pageNum == 0) {
//                    pageNum = 1;
//                }
//                paging(totCnt, pageNum);
			}
		},
		error: function() {
			alert('통합검색 결과를 가져오던 도중 오류가 발생하였습니다.');
			return;
		}
	})
	
}

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

            setItem('ilBookMgt', myID);

            getCatIlBookList1();

            e.classList.add('on');
            notE.forEach((a) => {
                a.classList.remove('on');
            })
        });
    });

    prevBtn.addEventListener('click',function() {
        if(this.id === "prev"){
            setItem("ilBookMgt",prev);

            getCatIlBookList1();
        }
    })

    nextBtn.addEventListener('click',function() {
        if(this.id === "next"){
            setItem("ilBookMgt",next);

            getCatIlBookList1();
        }
    })
}


