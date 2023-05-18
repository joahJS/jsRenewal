const getSiblingsCT = elm => elm && elm.parentNode && [...elm.parentNode.children].filter(node => node != elm);
const ctgrcTab = document.querySelectorAll("#categoricalTab > li");
const ctgrResultTab = document.querySelectorAll(".categoricalArc-content-flexBox > div");

const cateSearchText = document.querySelector('[data-tot-input]');
const cateSearchBtn = document.querySelector('[data-tot-button]');
const cateTab = document.querySelector('#tempBtn');

const botTab = document.querySelectorAll("[data-bot-tab]");
const tempTab = [botTab[0], botTab[3], botTab[7], botTab[9], botTab[12]];
const inputSearch = document.querySelector('[data-cate-search]');
const btnSearch = document.querySelector('[data-cate-btn]');

const btnMore = document.querySelector('[data-bot-more]');

let searchCate = '';
let searchText = '';

/* nav에서 서브메뉴 선택하여 진입시 선택한 메뉴에 해당하는 탭 자동선택/ 22-12-23 이주성대리 */
function cateTabInit() {
    for (let i = 0; i < ctgrcTab.length; i++){
        getSiblingsCT(ctgrcTab[i]).forEach((f) => {
            f.classList.remove('categorical-tab-selected');
        });
        getSiblingsCT(ctgrResultTab[i]).forEach((f) => {
            f.classList.remove('cate-selected-show');
        });
    }
}

let CATEGORY = ""
let TRANGE = ""
let NTL_FROM = ""
let FORM_KR = ""
let ACQ_KR = ""
let _length = 10; // 게시글 수
let pageNum = 0; // 현재 게시판 번호

document.addEventListener('DOMContentLoaded', () => {
	botTab[0].click();
})

inputSearch.addEventListener('keyup', (e) => {
      if(e.keyCode == 13) {
    	  CATEGORY = null;
          TRANGE = null;
          NTL_FROM = null;
          FORM_KR = null;
          ACQ_KR = null;
         switch(searchCate) {
          case "cate":
             CATEGORY = searchText;
               break;
          case "age":
               
             switch (searchText) {
                  case "1607~1636 (1~4차)" :
                     TRANGE = "1607"
                     break;
                  case "1643~1711 (5~8차)" :
                     TRANGE = "1643"
                     break;
                  case "1719~1811 (9~12차)" :
                     TRANGE = "1719"
                     break;
                  case "제작연도 미상" :
                     TRANGE = "제작연도 미상"
                     break;
             }
               break;
          case "nation":
        	  if(searchText == '한국') {
      	   		NTL_FROM = '조선';
      	   	  } else {
      	   		NTL_FROM = searchText;
      	   	  }
               break;
          case "form":
               FORM_KR = searchText;
               break;
          case "owner":
        	  if(searchText == '한국') {
                	NTL_FROM = '조선';
                } else if(searchText == '일본'){
             	   NTL_FROM = '일본';
                } else {
             	   ACQ_KR = searchText;
                }
               break;
             
       }
       getCatIlBookList1();
         
      }
   })
   
btnMore.addEventListener('click', () => {
	let krSpan = btnMore.querySelector('[data-lang-type="kr"]');
	let jpSpan = btnMore.querySelector('[data-lang-type="jp"]');
	let enSpan = btnMore.querySelector('[data-lang-type="en"]');
	
	if(btnMore.dataset.botMore == 'close') {
		for(let i = 32; i < botTab.length; i++) {
			botTab[i].style.display = 'flex';
		}
		btnMore.dataset.botMore = 'open';
		krSpan.textContent = '닫기';
		jpSpan.textContent = '閉じる';
		enSpan.textContent = 'close';
		
	} else {
		for(let i = 32; i < botTab.length; i++) {
			botTab[i].style.display = 'none';
		}
		btnMore.dataset.botMore = 'close';
		krSpan.textContent = '+ 더보기';
		jpSpan.textContent = '+ もっと見る';
		enSpan.textContent = '+ more';
	}
	

})   
   
btnSearch.addEventListener('click', () => {
	CATEGORY = null;
    TRANGE = null;
    NTL_FROM = null;
    FORM_KR = null;
    ACQ_KR = null; 
      switch(searchCate) {
       case "cate":
          CATEGORY = searchText;
            break;
       case "age":
            
          switch (searchText) {
               case "1607~1636 (1~4차)" :
                  TRANGE = "1607"
                  break;
               case "1643~1711 (5~8차)" :
                  TRANGE = "1643"
                  break;
               case "1719~1811 (9~12차)" :
                  TRANGE = "1719"
                  break;
               case "제작연도 미상" :
                  TRANGE = "제작연도 미상"
                  break;
          }
            break;
       case "nation":
    	   if(searchText == '한국') {
     	   		NTL_FROM = '조선';
     	   	  } else {
     	   		NTL_FROM = searchText;
     	   	  }
            break;
       case "form":
            FORM_KR = searchText;
            break;
       case "owner":
    	   if(searchText == '한국') {
              	NTL_FROM = '조선';
              } else if(searchText == '일본'){
           	   NTL_FROM = '일본';
              } else {
           	   ACQ_KR = searchText;
              }
            break;
          
    }
    getCatIlBookList1();
})   

// 하단 탭 클릭 이벤트 리스너 + 도록 리스트 출력
for(let i= 0; i < botTab.length; i++){
   botTab[i].addEventListener('click', function(){
	  setItem("ilBookMgt",1);
      let text = botTab[i].querySelector('[data-lang-type="kr"]').textContent;
        CATEGORY = null;
        TRANGE = null;
        NTL_FROM = null;
        FORM_KR = null;
        ACQ_KR = null;
        searchCate = botTab[i].dataset.botTab;
        searchText = text;
        inputSearch.value = '';
        switch(botTab[i].dataset.botTab) {
           case "cate":
              CATEGORY = text;
                break;
           case "age":
              switch (text) {
                   case "1607~1636 (1~4차)" :
                      TRANGE = "1607"
                      break;
                   case "1643~1711 (5~8차)" :
                      TRANGE = "1643"
                      break;
                   case "1719~1811 (9~12차)" :
                      TRANGE = "1719"
                      break;
                   case "제작연도 미상" :
                      TRANGE = "제작연도 미상"
                      break;
              }
                break;
           case "nation":
        	   	if(text == '한국') {
        	   		NTL_FROM = '조선';
        	   	} else {
        	   		NTL_FROM = text;
        	   	}
                break;
           case "form":
                FORM_KR = text;
                break;
           case "owner":
        	   if(text == '한국') {
               	NTL_FROM = '조선';
               } else if(text == '일본'){
            	   NTL_FROM = '일본';
               } else {
            	   ACQ_KR = text;
               }
                break;
        }
        getCatIlBookList1();
    });
}


if(getItem("ilBookMgt") != null){
    _start = getItem("ilBookMgt")*_length;
}
const ilBookList = document.querySelector('[data-cat-book-list]');

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

function hashHandler() {
    switch(location.hash) {
       case '#cate':
          ctgrcTab[0].classList.add('categorical-tab-selected');
           ctgrResultTab[0].classList.add('cate-selected-show');
           ctgrcTab[0].click();
           break;
       case '#age':
          ctgrcTab[1].classList.add('categorical-tab-selected');
           ctgrResultTab[1].classList.add('cate-selected-show');
           ctgrcTab[1].click();
           break;
       case '#nation':
          ctgrcTab[2].classList.add('categorical-tab-selected');
           ctgrResultTab[2].classList.add('cate-selected-show');
           ctgrcTab[2].click();
           break;
       case '#form':
          ctgrcTab[3].classList.add('categorical-tab-selected');
           ctgrResultTab[3].classList.add('cate-selected-show');
           ctgrcTab[3].click();
           break;
       case '#owner':
          ctgrcTab[4].classList.add('categorical-tab-selected');
           ctgrResultTab[4].classList.add('cate-selected-show');
           ctgrcTab[4].click();
           break;
       case '#more':
           ctgrcTab[2].click();
            break;
    }
  }
  
  window.addEventListener('load', hashHandler, false);

// 두번째 해시
function mainHashHandler() {
   CATEGORY = null;
   TRANGE = null;
   NTL_FROM = null;
    FORM_KR = null;
    ACQ_KR = null;
    
    ctgrcTab[0].classList.remove('categorical-tab-selected');
    ctgrResultTab[0].classList.remove('cate-selected-show');
    let text = null;
    switch(location.hash) {
       case '#trade':
          ctgrcTab[0].classList.add('categorical-tab-selected');
            ctgrResultTab[0].classList.add('cate-selected-show');
            text = botTab[0].querySelector('[data-lang-type="kr"]').textContent;
            CATEGORY = text;
            break;
       case '#travel':
          ctgrcTab[0].classList.add('categorical-tab-selected');
            ctgrResultTab[0].classList.add('cate-selected-show');
            text = botTab[1].querySelector('[data-lang-type="kr"]').textContent;
            CATEGORY = text;
            break;
       case '#culture':
          ctgrcTab[0].classList.add('categorical-tab-selected');
            ctgrResultTab[0].classList.add('cate-selected-show');
            text = botTab[2].querySelector('[data-lang-type="kr"]').textContent;
            CATEGORY = text;
            break;
       case '#age1':
          ctgrcTab[1].classList.add('categorical-tab-selected');
            ctgrResultTab[1].classList.add('cate-selected-show');
            text = botTab[3].querySelector('[data-lang-type="kr"]').textContent;
            break;
       case '#age2':
          ctgrcTab[1].classList.add('categorical-tab-selected');
            ctgrResultTab[1].classList.add('cate-selected-show');
            text = botTab[4].querySelector('[data-lang-type="kr"]').textContent;
            TRANGE = text;
            break;
       case '#age3':
          ctgrcTab[1].classList.add('categorical-tab-selected');
            ctgrResultTab[1].classList.add('cate-selected-show');
            text = botTab[5].querySelector('[data-lang-type="kr"]').textContent;
            TRANGE = text;
            break;
       case '#age4':
          ctgrcTab[1].classList.add('categorical-tab-selected');
            ctgrResultTab[1].classList.add('cate-selected-show');
            text = botTab[6].querySelector('[data-lang-type="kr"]').textContent;
            TRANGE = text;
            break;
       case '#josun':
          ctgrcTab[2].classList.add('categorical-tab-selected');
            ctgrResultTab[2].classList.add('cate-selected-show');
            // text =
			// botTab[7].querySelector('[data-lang-type="kr"]').textContent;
            NTL_FROM = '조선';
            break;
       case '#japan':
          ctgrcTab[2].classList.add('categorical-tab-selected');
          ctgrResultTab[2].classList.add('cate-selected-show');
          text = botTab[8].querySelector('[data-lang-type="kr"]').textContent;
          NTL_FROM = text;
          break;
       case '#book':
          ctgrcTab[3].classList.add('categorical-tab-selected');
            ctgrResultTab[3].classList.add('cate-selected-show');
            text = botTab[9].querySelector('[data-lang-type="kr"]').textContent;
            FORM_KR = text;
            break;
       case '#ilbook':
          ctgrcTab[3].classList.add('categorical-tab-selected');
            ctgrResultTab[3].classList.add('cate-selected-show');
            text = botTab[10].querySelector('[data-lang-type="kr"]').textContent;
            FORM_KR = text;
            break;
       case '#ilart':
          ctgrcTab[3].classList.add('categorical-tab-selected');
            ctgrResultTab[3].classList.add('cate-selected-show');
            text = botTab[11].querySelector('[data-lang-type="kr"]').textContent;
            FORM_KR = text;
            break; 
    }
    switch (text) {
   case "1607~1636 (1~4차)" :
      TRANGE = "1607"
      break;
   case "1643~1711 (5~8차)" :
      TRANGE = "1643"
      break;
   case "1719~1811 (9~12차)" :
      TRANGE = "1719"
      break;
   case "제작연도 미상" :
      TRANGE = "제작연도 미상"
      break;
    }
    getCatIlBookList1();
}

window.addEventListener('load', mainHashHandler, false);

for (let i = 0; i < ctgrcTab.length; i++){
    ctgrcTab[i].addEventListener("click", function(){
        ctgrcTab[i].classList.add('categorical-tab-selected');
        ctgrResultTab[i].classList.add('cate-selected-show');
        tempTab[i].click();
        getSiblingsCT(ctgrcTab[i]).forEach((f) => {
            f.classList.remove('categorical-tab-selected');
        });
        getSiblingsCT(ctgrResultTab[i]).forEach((f) => {
            f.classList.remove('cate-selected-show');
        });


    });
}
const searchNone = document.querySelector('#searchNone');
function getCatIlBookList1() {
    let page = getItem("ilBookMgt");
    pageNum = (page-1)*_length;

    var data = {};

    data["pageNum"] = pageNum;
    data['CATEGORY'] = CATEGORY;
    data['TRANGE'] = TRANGE;
    data['NTL_FROM'] = NTL_FROM;
    data['FORM_KR'] = FORM_KR;
    data['ACQ_KR'] = ACQ_KR;
    if(inputSearch != null) {
       data['findWord'] = inputSearch.value;
    }
    
    $.ajax({
        url : 'getCatIlBookList.do',
        type : 'post',
        data : data,
        success : function(res) {
        	searchNone.style.display='none';
            ilBookList.innerHTML = '';
            if(res.length > 0) {
                for(let i = 0; i < res.length; i++) {
                    let item = `
                    <h3 class="categoricalArc-item-title">
                        <span data-lang-type="kr" data-asgn-kr></span>
                        <span data-lang-type="jp" data-asgn-jp>(jp)</span>
                        <span data-lang-type="en" data-asgn-en>(en)</span>
                    </h3>
                    <div class="categoricalArc-content">
                        <p data-lang-type="kr" data-cont-kr></p>
                       <p data-lang-type="jp" data-cont-jp>(jp)</p>
                       <p data-lang-type="en" data-cont-en>(en)</p>
                    </div>
                    
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

                const card = document.createElement('div');
                    card.classList.add('categoricalArc-content-box');
                    card.innerHTML = item;
                    card.querySelector('[data-asgn-kr]').textContent = res[i].ASGN_KR;
                    card.querySelector('[data-asgn-jp]').textContent = res[i].ASGN_JP;
                    card.querySelector('[data-asgn-en]').textContent = res[i].ASGN_EN;
                    card.querySelector('[data-cont-kr]').textContent = res[i].CONT_KR;
                    card.querySelector('[data-cont-jp]').textContent = res[i].CONT_JP;
                    card.querySelector('[data-cont-en]').textContent = res[i].CONT_EN;
                    
                    ilBookList.appendChild(card);
            
                    if(res[i].LINKP_KR != '') {
                    	card.querySelector('[data-probook-link]').addEventListener('click', () => {
                    		let lang = localStorage.getItem('JSArchiveLangType');
                    		switch(lang) {
	                	  	case 'kr':
	                	  		window.open(res[i].LINKP_KR);
	                	  		break;
	                	  	case 'jp':
	                	  		window.open(res[i].LINKP_JP);
	                	  		break;
	                	  	case 'en':
	                	  		window.open(res[i].LINKP_EN);	
	                	  		break;
	                	  }
                    		 
                        });
                    } else {
	                  card.querySelector('[data-probook-link]').style.display = 'none';
	                  card.querySelector('.categoricalArc-item-buttons').style.gridTemplateColumns = '1fr';
	               }
                    
         
	               if(res[i].LINKN_KR != '') {
	                  card.querySelector('[data-normalbook-link]').addEventListener('click', () => {
	                	  let lang = localStorage.getItem('JSArchiveLangType');
	                	  switch(lang) {
	                	  	case 'kr':
	                	  		window.open(res[i].LINKN_KR);
	                	  		break;
	                	  	case 'jp':
	                	  		window.open(res[i].LINKN_JP);
	                	  		break;
	                	  	case 'en':
	                	  		window.open(res[i].LINKN_EN);	
	                	  		break;
	                	  }
	                           
	                  	});
	               } else {
	                  card.querySelector('[data-normalbook-link]').style.display = 'none';
	                  card.querySelector('.categoricalArc-item-buttons').style.gridTemplateColumns = '1fr';
	               }
                }
                checkLangType();

                let totCnt = res[0]["CNT"];
                if(pageNum == 0) {
                    pageNum = 1;
                }
                paging(totCnt, page);
                
            } else {
            	searchNone.style.display='block';
            }
        } ,
        error : function() {
            alert('리스트를 가져오는데 오류가 발생하였습니다.');
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