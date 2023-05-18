/** 
분류별 검색 결과 페이지
작업자 :	박현민
작성일자 :	2023-03-17
*/
const searchText = document.querySelector('.search-keyword');

const cateList = document.querySelector('[data-sorting-list]');
const cateCnt = document.querySelector('[data-sorting-cnt]');
const ageList = document.querySelector('[data-period-list]');
const ageCnt = document.querySelector('[data-period-cnt]');
const nationList = document.querySelector('[data-country-list]'); 
const nationCnt = document.querySelector('[data-country-cnt]');
const formList = document.querySelector('[data-form-list]'); 
const formCnt = document.querySelector('[data-form-cnt]');
const ownerList = document.querySelector('[data-collection-list]'); 
const ownerCnt = document.querySelector('[data-collection-cnt]');


function getSearchResult() {
	let resultText = searchText.textContent;
	
	let data = {};
	data['searchText'] = resultText;
	data['LANG'] = localStorage.getItem('JSArchiveLangType');
	
	$.ajax({
		url : 'getSearchResult.do',
		type : 'post',
		aysnc : false,
		data : {
			'data' : JSON.stringify(data)
		},
		success : function(res) {
			cateList.innerHTML = '';
			ageList.innerHTML = '';
			nationList.innerHTML = '';
			formList.innerHTML = '';
			ownerList.innerHTML = '';
			
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
					
					card.querySelector('[data-title]').textContent = e.TITLE_KR;
					card.querySelector('[data-img]').src = e.FILURL;
					card.querySelector('[data-regno]').textContent = e.REGNO + ' ' + e.ASGN_KR;
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
					
					cltDataList.appendChild(card);
					
					card.querySelector('.round_btnStyle').addEventListener('click', () => {
						onclick="window.open('http://archive.tongsinsa.com/data/original_image/K-I-1/12870-1_1/#p=1')";
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
                    <p data-cont-kr>예문 01</p>
					<p data-cont-jp>예문 01</p>
					<p data-cont-en>예문 01</p>
                    <div class="categoricalArc-item-buttons">
                        <button>
                            <span data-lang-type="kr">도록 보기</span>
                            <span data-lang-type="jp">図録を見る</span>
                            <span data-lang-type="en">Read more</span>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
                        </button>
                        <button>
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
					
					card.querySelector('[data-asgn-kr]').textContent = e.ASGN_KR;
					card.querySelector('[data-asgn-jp]').textContent = e.ASGN_JP;
					card.querySelector('[data-asgn-en]').textContent = e.ASGN_EN;
					card.querySelector('[data-cont-kr]').textContent = e.CONT_KR;
					card.querySelector('[data-cont-jp]').textContent = e.CONT_JP;
					card.querySelector('[data-cont-en]').textContent = e.CONT_EN;
					
					ilBookList.appendChild(card);
					
				})
				checkLangType();
			}
		},
		error: function() {
			alert('통합검색 결과를 가져오던 도중 오류가 발생하였습니다.');
			return;
		}
	})
	
}