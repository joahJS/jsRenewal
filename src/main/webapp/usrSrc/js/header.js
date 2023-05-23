/** 
헤더
작업자 :   장민선
작업일자 :   2022-12-21
*/

const mobMenuBtn = document.getElementById('mobile-burger-button');
const mobMenuList = document.getElementById('header');
const mobMenuClose = document.getElementById('mobile-header-close');



/* 모바일메뉴 여닫기, 이주성대리 */
 mobMenuBtn.addEventListener('click', function(g){
    if(mobMenuList.classList.contains('mob-menu-show') === true){
       mobMenuList.classList.remove('mob-menu-show');
    } else {
       mobMenuList.classList.add('mob-menu-show')
    };
   
 })

 mobMenuClose.addEventListener('click', function() {
   mobMenuList.classList.remove('mob-menu-show');  
 })


 /* 메뉴 mouseover or click 시 서브메뉴 출력 */
const navMenuList = document.querySelectorAll('nav > ul > li')
const navMenuPlus = document.querySelectorAll('.nav-plus-opacity')
const navSubs = document.getElementsByClassName('hd-subnav-hidden')


   for (let i = 0; i < navMenuList.length; i++) {

      //마우스 진입시 서브메뉴 출력
      navMenuList[i].addEventListener('mouseover', function() {
         if ( navMenuList[i].getElementsByClassName('hd-subnav-hidden')[0] != null) {
            navMenuList[i].getElementsByClassName('nav-plus-opacity')[0].classList.add('plus-display-none');
            navMenuList[i].getElementsByClassName('hd-subnav-hidden')[0].classList.remove('hd-subnav-hidden');
         } else {

         }
      })

      //마우스 떠날 시 서브메뉴 닫기
      navMenuList[i].addEventListener('mouseleave', function() {
         if ( navMenuList[i].getElementsByClassName('hd-subnav-list')[0] != null) {
            navMenuList[i].getElementsByClassName('nav-plus-opacity')[0].classList.remove('plus-display-none');
            navMenuList[i].getElementsByClassName('hd-subnav-list')[0].classList.add('hd-subnav-hidden');
            
         } else {

         }
      })
   }






// 통합 검색 버튼
const totalSearchText = document.querySelector('[data-total-search-text]');
const totalSearchBtn = document.querySelector('[data-total-search-btn]');

totalSearchText.addEventListener('keyup', (e) => {
   if(e.keyCode == 13) {
      saveSearch();
   }
})

totalSearchBtn.addEventListener('click', () => {
   saveSearch();
})

function saveSearch() {
   $.ajax({
      url : 'saveSearch.do',
      type : 'post',
      data : {
         'searchText' : totalSearchText.value
      },
      success: function(){
         location.href = '/searchResult.do';
      },
      error:function() {
         alert('통합 검색을 하던 도중 오류가 발생하였습니다.');
         return;
      }
   })
}


function hashHandler() {      

   if(location.hash === '#cate'){
      ctgrcTab[0].classList.add('categorical-tab-selected');
       ctgrResultTab[0].classList.add('cate-selected-show');
       ctgrcTab[0].click();
      
    }else if(location.hash === '#age'){
      ctgrcTab[1].classList.add('categorical-tab-selected');
       ctgrResultTab[1].classList.add('cate-selected-show');
       ctgrcTab[1].click();
       
    }else if(location.hash === '#nation'){
      ctgrcTab[2].classList.add('categorical-tab-selected');
        ctgrResultTab[2].classList.add('cate-selected-show');
        ctgrcTab[2].click();

    }else if(location.hash === '#form'){
      ctgrcTab[3].classList.add('categorical-tab-selected');
        ctgrResultTab[3].classList.add('cate-selected-show');
        ctgrcTab[3].click();
        
    }else if(location.hash === '#owner'){
      ctgrcTab[4].classList.add('categorical-tab-selected');
        ctgrResultTab[4].classList.add('cate-selected-show');
        ctgrcTab[4].click();

    }
  }
  
  window.addEventListener('hashchange', hashHandler, false);