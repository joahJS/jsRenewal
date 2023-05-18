// /**
//  사용자 > 분류별 기록물 > 도록 리스트
//  작업자 :	박현민
//  작업일자 :	2022-12-19
//  */
//
// document.addEventListener('DOMContentLoaded', () => {
//     getCatIlBookList();
// })
//
// let _length = 10; //게시글 수
// let pageNum = 0; //현재 게시판 번호
//
// if(getItem("ilBookMgt") != null){
//     _start = getItem("ilBookMgt")*_length;
// }
//
// const ilBookList = document.querySelector('[data-cat-book-list]');
//
// function getCatIlBookList() {
//
//     let page = getItem("ilBookMgt");
//
//     if(page == 0){
//         page = 1;
//     }
//     pageNum = (page-1)*_length;
//
//
//     $.ajax({
//         url : 'getCatIlBookList.do',
//         type : 'post',
//         data : {
//             'pageNum' : pageNum
//         },
//         success : function(res) {
// 			ilBookList.innerHTML = '';
//             if(res.length > 0) {
//                 let item = `
//                     <h3 class="categoricalArc-item-title">
//                         <span data-lang-type="kr" data-asgn-kr></span>
//                         <span data-lang-type="jp" data-asgn-jp>(jp)</span>
//                         <span data-lang-type="en" data-asgn-en>(en)</span>
//                     </h3>
//                     <div class="categoricalArc-content">
//                         <p data-lang-type="kr" data-cont-kr></p>
//                     	<p data-lang-type="jp" data-cont-jp>(jp)</p>
//                     	<p data-lang-type="en" data-cont-en>(en)</p>
//                     </div>
//
//                     <div class="categoricalArc-item-buttons">
//                         <button data-probook-link>
//                             <span data-lang-type="kr">도록 보기</span>
//                             <span data-lang-type="jp">(jp)도록 보기</span>
//                             <span data-lang-type="en">Read more</span>
//
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
//                         </button>
//                         <button data-normalbook-link>
//                             <span data-lang-type="kr">일반인 해설서 보기</span>
//                             <span data-lang-type="jp">(jp)일반인 해설서 보기</span>
//                             <span data-lang-type="en">(en)일반인 해설서 보기</span>
//
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="27"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/></svg>
//                         </button>
//                     </div>
// 				`;
//
//                 res.forEach((e) => {
//                     const card = document.createElement('div');
//                     card.classList.add('categoricalArc-content-box');
//                     card.innerHTML = item;
//
// 					card.querySelector('[data-asgn-kr]').textContent = e.ASGN_KR;
// 					card.querySelector('[data-asgn-jp]').textContent = e.ASGN_JP;
// 					card.querySelector('[data-asgn-en]').textContent = e.ASGN_EN;
// 					card.querySelector('[data-cont-kr]').textContent = e.CONT_KR;
// 					card.querySelector('[data-cont-jp]').textContent = e.CONT_JP;
// 					card.querySelector('[data-cont-en]').textContent = e.CONT_EN;
//
//                     ilBookList.appendChild(card);
//
// 					card.querySelector('[data-probook-link]').addEventListener('click', () => {
// 						if(e.LINKP_KR != '') {
// 							window.open(e.LINKP_KR);
// 						} else {
// 							alert('등록된 자료가 없습니다.');
// 						}
// 					})
//
// 					card.querySelector('[data-normalbook-link]').addEventListener('click', () => {
// 						if(e.LINKN_KR != '') {
// 							window.open(e.LINKN_KR);
// 						} else {
// 							alert('등록된 자료가 없습니다.');
// 						}
// 					})
//                 })
//
//                 checkLangType();
//
//                 let totCnt = res[0]["CNT"];
//                 if(pageNum == 0) {
//                     pageNum = 1;
//                 }
//                 paging(totCnt, pageNum);
//             }
//         },
//         error : function() {
//             alert('리스트를 가져오는데 오류가 발생하였습니다.');
//             return;
//         }
//     })
// }
//
// const pageArea = document.querySelector('[data-board-pager-bullets-container]');
// function paging(totalData, currentPage){
//     let dataPerPage = _length;    // 한 페이지에 나타낼 데이터 수
//     let pageCount = 10;        // 한 화면에 나타낼 페이지 수
//
//     let totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
//     let pageGroup = Math.ceil(currentPage/pageCount);    // 페이지 그룹
//
//     let prevBtn = document.querySelector('[data-board-pager-prev]');
//     let nextBtn = document.querySelector('[data-board-pager-next]');
//
//     let last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
//     if(last > totalPage)
//         last = totalPage;
//     let first = last - (pageCount-1);    // 화면에 보여질 첫번째 페이지 번호
//     if(first < 1){
//         first = 1;
//     }
//     let next = last+1;
//     let prev = first-1;
//     let html = "";
//
//     if(prev > 0) prevBtn.id= 'prev';
//     if (first == 1) prevBtn.classList.add('edge')
//     else prevBtn.classList.remove('edge')
//
//     for(let i=first; i <= last; i++){
//         html += "<li id=" + i + " data-board-pager-bullets><a href='#'>" + i + "</a></li> ";
//     }
//
//     if(last < totalPage) nextBtn.id = 'next';
//     if(last == totalPage) nextBtn.classList.add('edge');
//     else nextBtn.classList.remove('edge');
//
//     pageArea.innerHTML = html;
//
//
//     $("#paging li#" + currentPage).addClass('on');    // 현재 페이지 표시
//
//     const pagerEl = document.getElementById('paging');
//     const pagerBullets = pagerEl.querySelectorAll('li');
//
//     pagerBullets.forEach((e) =>{
//         e.addEventListener('click', () => {
//             let myID = e.id;
//             let notE = getSiblings(e);
//
//             setItem('ilBookMgt', myID);
//
//             getCatIlBookList();
//
//             e.classList.add('on');
//             notE.forEach((a) => {
//                 a.classList.remove('on');
//             })
//         });
//     });
//
//     prevBtn.addEventListener('click',function() {
//         if(this.id == "prev"){
//             setItem("ilBookMgt",prev);
//
//             getCatIlBookList();
//         }
//     })
//
//     nextBtn.addEventListener('click',function() {
//         if(this.id == "next"){
//             setItem("ilBookMgt",next);
//
//             getCatIlBookList();
//         }
//     })
// }