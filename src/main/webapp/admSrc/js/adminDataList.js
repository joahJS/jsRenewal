/** 
관리자 > 소장 자료 리스트
작업자 :	장민선
작업일자 :	2022-12-15
*/

document.addEventListener('DOMContentLoaded', () => {
	getCltDataList();
})

let _length = 10; //게시글 수
let pageNum = 0; //현재 게시판 번호
let delYn = 'N';
if(getItem("cltDataMgt") != null){
	_start = getItem("cltDataMgt")*_length;
}

const cltDataList = document.querySelector('[data-data-list]');

function getCltDataList() {
	
	let page = getItem("cltDataMgt");
	
	if(page == 0){
		page = 1;
	}
	pageNum = (page-1)*_length;
	
	
	$.ajax({
		url : 'getCltDataList.do',
		type : 'post',
		data : {
			'pageNum' : pageNum
		},
		success : function(res) {
			cltDataList.innerHTML = '';
			if(res.length > 0) {
				let item = `
	                <div id="adminDataId"></div>
	                <div id="adminDataImg">
						<article class="admin-list-img-container">
	                    	<img src="/common/img/coll-item-temp01.jpg" data-img alt="">
						</article>
	                    <div>
	                        <p class="admin-list-subtitle">원문이미지</p>
	                        <a href="" data-img-link>http://pineit.co.kr</a>
	                    </div>
	                </div>
	                <section class="admin-data-detail">

						<h3 data-asgn></h3>

	                    <div id="adminDataName">
	
	                        <p><span class="admin-list-subtitle">국가</span><span data-ntl-from></span></p>
	                        <p><span class="admin-list-subtitle">등재번호</span><span data-regno></span></p>
	                        <p><span class="admin-list-subtitle">저자</span><span data-author></span></p>
	                        <p><span class="admin-list-subtitle">작품제목</span><span data-title>별이빛나는밤에</span></p>
	                        <p><span class="admin-list-subtitle">시대</span><span data-trange></span></p>
	                    </div>
	                    <div id="adminTexts">
	                        <p><span class="admin-list-subtitle">형태</span><span data-form>서적</span></p>
	                        <p><span class="admin-list-subtitle">크기</span><span data-dmn>27.9 X 18.2cm</span></p>
	                        <p><span class="admin-list-subtitle">제작방식</span><span data-craft>종이에 묵서</span></p>
	                        <p><span class="admin-list-subtitle">분류</span><span data-category>문화교류의 기록</span></p>
	                        <p><span class="admin-list-subtitle">소장처</span><span data-acq>국립박물관</span></p>
	                        
	                    </div>
						<button id="btnDel" class="admindata-del-btn">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="rgba(255,255,255,1)"/></svg>
							삭제
						</button>
	                </section>
				`;
				
				res.forEach((e) => {
					const card = document.createElement('div');
					card.classList.add('admin-data-table');
					
					card.innerHTML = item;
					
					card.querySelector('#adminDataId').textContent = e.ID;
					card.querySelector('[data-asgn]').textContent = e.ASGN_KR;
					card.querySelector('[data-img]').src = e.FILURL;
					card.querySelector('[data-img-link]').textContent = e.IMGLINK;
					card.querySelector('[data-title]').textContent = e.TITLE_KR;
					card.querySelector('[data-regno]').textContent = e.REGNO;
					card.querySelector('[data-ntl-from]').textContent = e.NTL_FROM;
					card.querySelector('[data-author]').textContent = e.AUTHOR_KR;
					card.querySelector('[data-trange]').textContent = e.TRANGE;
					card.querySelector('[data-form]').textContent = e.FORM_KR;
					card.querySelector('[data-dmn]').textContent = e.DMN;
					card.querySelector('[data-craft]').textContent = e.CRAFT_KR;
					card.querySelector('[data-category]').textContent = e.CATEGORY;
					card.querySelector('[data-acq]').textContent = e.ACQ_KR;
					
					cltDataList.appendChild(card);
					
					card.querySelector("#btnDel").addEventListener('click', () => {
						getModal(e.ID);
					})
					
					card.querySelector("#adminDataImg").addEventListener('click', () => {
						location.href = 'adminData.do?ID='+ e.ID
					})

				})
				
				let totCnt = res[0]["CNT"];
				if(pageNum == 0) {
					pageNum = 1;
				}
				paging(totCnt, page);
			}
		},
		error : function() {
			alert('리스트를 가져오는데 오류가 발생하였습니다.');
			return;
		}
	})
}

function getModal(id) {
	if (confirm('삭제하시겠습니까?')) {
		delIlbook(id);
	} else {
		return;
	}
}

function delIlbook(id) {
	$.ajax({
        url : 'delIlbook.do',
        type : 'post',
        data : {"ID": id},
        success : function(res) {
            if(res != null) {
            	alert(res.MSG);
            	location.href="adminDataList.do";
            }
        },
        error : function() {
            alert('삭제중 오류가 발생하였습니다.');
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
         
        setItem('cltDataMgt', myID);
         
        getCltDataList();
         
         e.classList.add('on');
         notE.forEach((a) => {
           a.classList.remove('on');
         })
      });
   });
   
   prevBtn.addEventListener('click',function() {
      if(this.id == "prev"){
         setItem("cltDataMgt",prev);
         
         getCltDataList();
       }
   })
   
   nextBtn.addEventListener('click',function() {
      if(this.id == "next"){
         setItem("cltDataMgt",next);
         
         getCltDataList();
       }
   })
}