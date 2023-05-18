/** 
관리자 > 도록 리스트
작업자 :	장민선
작업일자 :	2022-12-14
*/

document.addEventListener('DOMContentLoaded', () => {
	getIlBookList();
})

let _length = 10; //게시글 수
let pageNum = 0; //현재 게시판 번호

if(getItem("ilBookMgt") != null){
	_start = getItem("ilBookMgt")*_length;
}

const ilBookList = document.querySelector('[data-book-list]');

function getIlBookList() {
	
	let page = getItem("ilBookMgt");
	
	if(page == 0){
		page = 1;
	}
	pageNum = (page-1)*_length;
	
	
	$.ajax({
		url : 'getIlBookList.do',
		type : 'post',
		data : {
			'pageNum' : pageNum
		},
		success : function(res) {
			ilBookList.innerHTML = '';
			if(res.length > 0) {
				let item = `
					<div id="adminBookId"></div>
			        <div id="adminBookImg">
			            <img src="" data-img alt="">
			        </div>
			        <div id="adminBookName">
			            <h3></h3>
			            <hr>
			            <p></p>
			        </div>
			        <div id="adminTexts">
			            <p>
			            </p>
			        </div>
			        <div id="adminLinks">
			            <a href="#" class="admin-link-pro" data-link-professional></a>
			            <a href="#" class="admin-link-ordinary" data-link-normal></a>
						<div id="admin-del_box">
							<button id="btnDel" class="admin-delete-btn" data-delete-btn>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="rgba(255,255,255,1)"/></svg>
							삭제
							</button>
						</div>
			        </div>

				`;
				
				res.forEach((e) => {
					const card = document.createElement('div');
					card.classList.add('admin-book-item');
					
					card.innerHTML = item;
					
					card.querySelector('#adminBookId').textContent = e.ID;
					card.querySelector('#adminBookName').textContent = e.ASGN_KR;
					card.querySelector('#adminTexts').textContent = e.CONT_KR;
					card.querySelector('[data-link-professional]').textContent = e.LINKP_KR;
					card.querySelector('[data-link-professional]').href = e.LINKP_KR;
					card.querySelector('[data-link-normal]').textContent = e.LINKN_KR;
					card.querySelector('[data-link-normal]').href = e.LINKN_KR;
					if(e.FILURL != '') {
						card.querySelector('[data-img]').src = e.FILURL;
					} else {
						card.querySelector('[data-img]').src = '/common/img/no-img-base.svg';
					}
					
					
					ilBookList.appendChild(card);
					
					card.querySelector("#btnDel").addEventListener('click', () => {
						getModal(e.ID);
					})
					card.querySelector('#adminBookName').addEventListener('click', () => {
						location.href = 'adminBook.do?ID='+ e.ID
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
            	location.href='adminBookList.do';
            } else {
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
         
        setItem('ilBookMgt', myID);
         
        getIlBookList();
         
         e.classList.add('on');
         notE.forEach((a) => {
           a.classList.remove('on');
         })
      });
   });
   
   prevBtn.addEventListener('click',function() {
      if(this.id == "prev"){
         setItem("ilBookMgt",prev);
         
         getIlBookList();
       }
   })
   
   nextBtn.addEventListener('click',function() {
      if(this.id == "next"){
         setItem("ilBookMgt",next);
         
         getIlBookList();
       }
   })
}