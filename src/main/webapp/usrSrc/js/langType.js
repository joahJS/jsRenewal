/* 해당 프로젝트 : 조선통신사 디지털 아카이브
 * 작업일 : 2022. 12. 13 (화)
 * 작업자 : 김창완
 * 기능 내용 :
 * - 언어 선택시 로컬 스토리지에 언어 설정 저장, 이후 페이지 로드시 해당 언어 설정에 맞는 텍스트 (<span> 태그의 데이터셋 사용) 표시
 * - 향후 언어 갯수가 늘어나더라도 추가 적용이 용이하도록 언어 설정을 국한하지 않고 function의 인자를 통해 구분하게끔 설계
 * 필요 적용 수준 : default (header)
 *
 * 최종 수정일 : -
 * 최종 수정자 : -
 * 수정 내용 :
 * -
 */
//
//if (document.readyState !== 'loading') { // Read Language Setting On Load
//    checkLangType();
//} else {
//    document.addEventListener('DOMContentLoaded', function() {
//        checkLangType();
//    });
//}

function setLangType(lang) { // Set Language Setting To LocalStorage
    localStorage.setItem('JSArchiveLangType', lang);

    checkLangType(); // select의 change 이벤트에서 선택된 option의 value로 언어를 설정
    location.reload();
}

function checkLangType() { // Read Language Setting From LocalStorage
    const whatsLang = localStorage.getItem('JSArchiveLangType');
    let enElements = document.querySelectorAll('[data-lang-type]');

//    if (whatsLang === null || whatsLang === 'undefined') {
//        localStorage.setItem('JSArchiveLangType', 'kr');
//    }

    enElements.forEach((e) => {
        if (e.dataset.langType !== whatsLang) {
            e.classList.remove('show');
        }

        if (e.dataset.langType === whatsLang) {
            e.classList.add('show');
        }
    });
}

// function langSelector(element) {
//     document.addEventListener('DOMContentLoaded', function() {
//         const whatsLang = localStorage.getItem('JSArchiveLangType');
//         let options = element.querySelectorAll('option');

//         options.forEach((e) => {
//             if (e.value === whatsLang) {
//                 e.selected = true;
//             }
//         });
//     });

//     element.addEventListener('change', () => {
//         let currentValue = element.value;

//         setLangType(currentValue);
//     });
// }

function langSelector(element) {
    

    document.addEventListener('DOMContentLoaded', function() {
        const whatsLang = localStorage.getItem('JSArchiveLangType');

        element.forEach((e) => {
            if (e.value === whatsLang) {
                e.selected = true;
            }
        });
    });

    element.forEach((f) => {
        f.addEventListener('click', () => {
            let currentValue = f.value;
    
            setLangType(currentValue);
        });
    });
    
}



// function langSelector2(element) {
//     document.addEventListener('DOMContentLoaded', function() {
//         const whatsLang = localStorage.getItem('JSArchiveLangType');
//         let options = element.querySelectorAll('option');

//         options.forEach((e) => {
//             if (e.value === whatsLang) {
//                 e.selected = true;
//             }
//         });
//     });

//     element.addEventListener('click', () => {
//         let currentValue = element.value;

//         setLangType(currentValue);
//     });
// }

/* 적용 예제
 * <p>
 *     <span data-lang-type="placeholder">자리 배치용 글</span>
 *     <span class="show" data-lang-type="kr">한국어 글</span>
 *     <span data-lang-type="en">English Text</span>
 *     <span data-lang-type="jp">日本語 文</span>
 * <p>
 */