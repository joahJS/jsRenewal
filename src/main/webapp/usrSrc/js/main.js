/** 
메인 페이지
작업자 :	장민선
작업일자 :	2022-12-19
*/

document.addEventListener('DOMContentLoaded', () => {
	// 접속한 IP 나라 식별 후 언어 자동전환
	if(localStorage.getItem('JSArchiveLangType')) {
		checkLangType();
	} else {
		$.get("http://ip-api.com/json", function(data) {
			if(data.countryCode == 'KR') {
				localStorage.setItem('JSArchiveLangType', 'kr');
			} else if(data.countryCode == 'JP') {
				localStorage.setItem('JSArchiveLangType', 'jp');
			} else {
				localStorage.setItem('JSArchiveLangType', 'en');
			}
			checkLangType();
			
			$("#cty").text(data.county);
		}, "jsonp");
	}
	
	mainCltData();
})

const mainSliderPause = document.querySelector(".main-slider-pause");

// 통합 검색 버튼
const mainSearchText = document.querySelector('[data-main-search-text]');
const mainSearchBtn = document.querySelector('[data-main-search-btn]');

// 디지털 소장자료에 사용
const cktDataList = document.querySelector('.swiper-wrapper');

mainSearchBtn.addEventListener('click', () => {
	$.ajax({
		url : 'saveSearch.do',
		type : 'post',
		data : {
			'searchText' : mainSearchText.value
		},
		success: function(){
			location.href = '/searchResult.do';
		},
		error:function() {
			alert('통합 검색을 하던 도중 오류가 발생하였습니다.');
			return;
		}
	})
})



// 디지털 소장자료
function mainCltData() {
	$.ajax({
		url : 'mainCltData.do',
		type : 'post',
		success : function(res) {
			if(res.length > 0) {
				let item = `
					<div class="main-coll-each-container">
                        <img src="/common/img/coll-item-temp01.jpg" alt="" data-clt-img>
                    </div>
                    <h4><span data-regno></span> 
                        <span data-lang-type="kr" data-asgn-kr></span>
                        <span data-lang-type="jp" data-asgn-jp></span>
                        <span data-lang-type="en" data-asgn-en></span>
                    </h4>
                    <p>
                        <span data-lang-type="kr" data-acq-kr></span>
                        <span data-lang-type="jp" data-acq-jp></span>
                        <span data-lang-type="en" data-acq-en></span>
                    </p>
                    <a href="javascript:void(0)" target="_blank" class="coll-item-more-button">
						<span data-lang-type="kr">상세보기</span>
						<span data-lang-type="jp">もっと見る</span>
						<span data-lang-type="en">View</span>
					</a>
				`;
				
				res.forEach((e) => {
					const swipe = document.createElement('div');
					
					swipe.classList.add('swiper-slide');
					
					swipe.innerHTML = item;
					
					if(e.FILURL != '') {
						swipe.querySelector('[data-clt-img]').src = e.FILURL;
					} else {
						swipe.querySelector('[data-clt-img]').src = '/common/img/no-img-base.svg';
					}
					swipe.querySelector('[data-regno]').textContent = e.REGNO;
					swipe.querySelector('[data-asgn-kr]').textContent = e.ASGN_KR;
					swipe.querySelector('[data-asgn-jp]').textContent = e.ASGN_JP;
					swipe.querySelector('[data-asgn-en]').textContent = e.ASGN_EN;
					swipe.querySelector('[data-acq-kr]').textContent = e.ACQ_KR;
					swipe.querySelector('[data-acq-jp]').textContent = e.ACQ_JP;
					swipe.querySelector('[data-acq-en]').textContent = e.ACQ_EN;
					
					const collBtn = document.querySelector('.coll-item-more-button');

					if(e.IMGLINK != ""){

						// let movingSlide = swipe.querySelector('.main-coll-each-container');
						
						// movingSlide.onclick = function(){
						// 	window.location.href = e.IMGLINK;
						// }

						swipe.querySelector('.coll-item-more-button').href = e.IMGLINK;

						swipe.querySelector('.coll-item-more-button').addEventListener('mouseup',function(){
							window.location.href = e.IMGLINK;
						})

					} else {
						swipe.querySelector('.coll-item-more-button').addEventListener('mouseup',function(){
							alert('등록된 자료가 없습니다.');
						})
						
					}

					collSwiper.appendSlide(swipe);
				})
				checkLangType();
			}
		},
		error : function() {
			alert('디지털 소장자료를 가져오는데 오류가 발생하였습니다.');
			return;
		}
	})
}

const collSwiper = new Swiper('.main-coll-slider', {
    slidesPerView: 3,
    spaceBetween: 10,
	resistance: false,
	allowTouchMove:true,
	simulateTouch:false,
	preventClicks:false,
	preventClicksPropagation:false,
	touchStartPreventDefault:false,
	observer: true, 
	observeParents: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.main-slider-next',
      prevEl: '.main-slider-prev',
    },
    breakpoints : {
      480 : {
        slidesPerView: 5,
        spaceBetween: 20, 
      },
    }
});

 
/* 디지털 소장자료 slider - autoplay 일시중지 버튼 */

// mainSliderPause.addEventListener("click",function(){
// 	if( mainSliderPause.classList.contains("pause-off") == true){
// 		collSwiper.autoplay.start();
// 		mainSliderPause.classList.remove("pause-off");
// 	} else if(mainSliderPause.classList.contains("pause-off") == false){
// 		collSwiper.autoplay.stop();
// 		mainSliderPause.classList.add("pause-off");
// 	}
// })



