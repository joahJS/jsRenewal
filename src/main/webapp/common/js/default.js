// default javascript

document.addEventListener('DOMContentLoaded', () => {
    deviceCheck();
    headerAdjust();
}); // document.ready

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        imgFound();
    }
}); // window.load

window.addEventListener('resize', () => {
    deviceCheck();
});

/* 스크롤 높이에 따라 헤더 색 변경 */
function headerAdjust() {
    const headerIndex = document.getElementById('headPrimary');
    const headerSub = document.getElementById('headSecondary');
    let maginotLine = 350;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= maginotLine) {
            if (headerIndex) {
                headerIndex.classList.add('scrolled');
            } else if (headerSub) {
                headerSub.classList.add('scrolled');
            }
        } else {
            if (headerIndex) {
                headerIndex.classList.remove('scrolled');
            } else if (headerSub) {
                headerSub.classList.remove('scrolled');
            }
        }
    });
};
/* 스크롤 높이에 따라 헤더 색 변경 끝 */

/* CSRF 토큰 */

var _header = document.getElementsByName('_csrf_name')[0].getAttribute('content');
var _token = document.getElementsByName('_csrf')[0].getAttribute('content');

/* CSRF 토큰 끝 */

/* AJAX */
$.ajaxSetup({
    // statusCode: {
    // 	400 : function() {
    // 		errorAlert("400 : Bad Request.");
    // 	},
    // 	404 : function() {
    // 		errorAlert("404 : Page Not Found.");
    // 	},
    // 	500 : function() {
    // 		errorAlert("500 : Server Error.");
    // 	}
    // },
    beforeSend : function(xhr) {
        xhr.setRequestHeader(_header, _token);
    },
    complete : function() {

    },
    error : function(xhr, ajaxOptions, thrownError) {
        var errorMessage = xhr.responseText;

        if (errorMessage.indexOf('"Error"') > -1) {
            errorMessage = errorMessage.substring(errorMessage.indexOf('", "') + 4, errorMessage.indexOf('", "red"'));
            alert(errorMessage);
        } else {
            alert(xhr.status + ' : ' + xhr.statusText);
        }

        // 이 에러메시지를 보면 500 에러도 상세 내용 확인 가능
        //errorAlert(xhr.statusCode + '\r\n' + thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
    },
    cache: false
});
/* AJAX 끝 */

/* 로컬 스토리지에 아이템 저장 */
function storeIt(keyName, itemValue) {
    localStorage.setItem(keyName, itemValue);
}
/* 로컬 스토리지에 아이템 저장 끝 */

/* 로컬 스토리지에서 아이템 가지고 오기 */
function getIt(keyName) {
    localStorage.getItem(keyName);
}
/* 로컬 스토리지에서 아이템 가지고 오기 끝 */

/* 로컬 스토리지에서 아이템 삭제 */
function deleteIt(keyName) {
    localStorage.removeItem(keyName);
}
/* 로컬 스토리지에서 아이템 삭제 */

/* Javascript 자매 요소 찾기 */
function getChildren(n, skipMe){
    let r = [];

    for (; n; n = n.nextSibling)

    if (n.nodeType == 1 && n != skipMe)
        r.push(n);

    return r;
};

function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
}
/* Javascript 자매 요소 찾기 끝 */

/* 특정 요소까지의 자매 요소 찾기 */
const nextUntil = function (elem, selector, filter) {
    let siblings = [];

    elem = elem.nextElementSibling;

    while (elem) {
        if (elem.matches(selector)) break;
        if (filter && !elem.matches(filter)) {
            elem = elem.nextElementSibling;
            continue;
        }

        siblings.push(elem);
        elem = elem.nextElementSibling;
    }

    return siblings;
};
/* 특정 요소까지의 자매 요소 찾기 끝 */

/* 디바이스 체크 */
function judgeMachine() {
    let pointerCoarse = window.matchMedia('(pointer: coarse)').matches ? true : false;
    let windowSize = window.matchMedia('only screen and (max-width: 1024px').matches ? true : false;
    let screenOrient = window.matchMedia('only screen and (orientation: portrait)').matches ? true : false;

    if (window.navigator.userAgent.match(/MSIE | Internet Explorer | Trident/i)) {
        alert('인터넷 익스플로러는 더이상 지원되지 않는 브라우저입니다.');
        window.location = 'microsoft-edge:' + window.location.href;
    } else if (window.navigator.userAgent.match(/iPhone/)) {
        document.documentElement.dataset.deviceType = 'mobile';
        return;
    }

    if (pointerCoarse == false) {
        console.log('Device check : %c사용하는 기기의 조작성이 정확합니다. PC 화면을 표시합니다.', 'color: mediumslateblue');
        return false;
    }

    if (windowSize == true) {
        console.log('Device check : %c사용하는 기기의 조작성이 정확하지 않습니다. 모바일 화면을 표시합니다.', 'color: mediumslateblue');
        return screenOrient;
    } else {
        console.log('Device check : %c사용하는 기기의 화면이 충분히 큽니다. PC 화면을 표시합니다.', 'color: mediumslateblue');
        return false;
    }
}

function deviceCheck() {
    if (judgeMachine() === false) {
        document.documentElement.dataset.deviceType = 'desktop';
    } else {
        document.documentElement.dataset.deviceType = 'mobile';
    }
}
/* 디바이스 체크 끝 */

/* vw, vh, vmin, vmax 단위 사이즈 구하기 */
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

function vmin(v) {
    return Math.min(vh(v), vw(v));
}

function vmax(v) {
    return Math.max(vh(v), vw(v));
}
/* vw, vh, vmin, vmax 단위 사이즈 구하기 끝 */

/* 배열에서 중복 체크하기 */
function isDuplicate(array) {
    const isDup = array.some(function(e) {
        return array.indexOf(e) !== array.lastIndexOf(e);
    });

    return isDup;
}
/* 배열에서 중복 체크하기 끝 */

/* 세션 가져오기 */
function getItem(key) {
    const value = sessionStorage.getItem(key);

    if (key === 'data') return value === null ? null : JSON.parse(value);
    else return value === null ? [] : JSON.parse(value);
}
/* 세션 가져오기 끝 */

/* 세션 저장 */
function setItem(key, value) {
    if (value === null || value === undefined) return;

    const toJson = JSON.stringify(value);

    sessionStorage.setItem(key, toJson);
}
/* 세션 저장 끝 */

/* 세션 삭제 */
function delItem(key) {
    sessionStorage.removeItem(key);
}
/* 세션 삭제 끝 */

/* 쿠키 */
function setCookie(cookieName, value, exdays) {
    var exdate = new Date();

    exdate.setDate(exdate.getDate() + exdays);

    var cookieValue = escape(value) + ((exdays == null) ? '' : '; expires=' + exdate.toGMTString());

    document.cookie = cookieName + '=' + cookieValue;
}

function deleteCookie(cookieName) {
    var expireDate = new Date();

    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + '= ' + '; expires=' + expireDate.toGMTString();
}

function getCookie(cookieName) {
    cookieName = cookieName + '=';

    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';

    if (start != -1) {
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);

        if (end == -1) end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }

    return unescape(cookieValue);
}
/* 쿠키 끝 */

/* URL 가져오기 */
$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}
/* URL 가져오기 끝 */

/* 파일 크기 바이트 변환 */
const getByteSize = (size) => {
    var bytes = parseInt(size);
    var s = ['Byte', 'KB', 'MB', 'GB', 'TB'];
    var e = Math.floor(Math.log(bytes) / Math.log(1024));

    if(e == "-Infinity"){
        return "0 "+s[0];
    }else if(size < 1024){
        return (bytes / Math.pow(1024, Math.floor(e))).toFixed() + ' ' + s[e];
    }else{
        return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + ' ' + s[e];
    }
}
/* 파일 크기 바이트 변환 끝 */

/* 콤마 변환 */
$.round_comma = function(str, decimal, keyupCheck, roundCheck) {
    if (str != '') {
        str = str.replace(/,/gi, ''); // 콤마 제거

        /*if (roundCheck) {
            str = round(str, decimal);
        }*/
        var regx = new RegExp(/(-?\d+)(\d{3})/);
        var bExists = str.indexOf('.', 0);
        var strArr = str.split('.');

        while (regx.test(strArr[0])) {
            strArr[0] = strArr[0].replace(regx, '$1,$2');
        }

        var result = strArr[0];

        if (keyupCheck) {
            if (bExists > -1 && decimal > 0) {
                if (strArr[1].length > decimal) {
                    if (!roundCheck) {
                        strArr[1] = strArr[1].substring(0, decimal);
                    }
                }
                result += '.' + strArr[1];
            }
        } else {
            if (bExists > -1) { // 소수점이 있는 경우
                if (strArr[1].length >= decimal) {
                    if (!roundCheck) {
                        strArr[1] = strArr[1].substring(0, decimal);
                    }
                } else if (strArr[1].length < decimal) {
                    for (var i = 0, e = decimal - strArr[1].length; i < e; i ++) strArr[1] += '0';
                }
                result += '.' + strArr[1];
            } else { // 소수점이 없는 경우
                if (decimal > 0) {
                    for (var i = 0, e = decimal; i < e; i ++) {
                        if (i == 0) result += '.';
                        result += '0';
                    }
                }
            }
        }
        return result;
    } else {
        return '';
    }
};

$.input_comma = function(str, decimal, keyupCheck) {
    if (str != '') {
        str = str.replace(/,/gi, ''); // 콤마 제거

        var regx = new RegExp(/(-?\d+)(\d{3})/);
        var bExists = str.indexOf('.', 0);
        var strArr = str.split('.');

        while (regx.test(strArr[0])) {
            strArr[0] = strArr[0].replace(regx, '$1,$2');
        }

        var result = strArr[0];

        if (keyupCheck) {
            if (bExists > -1 && decimal > 0) {
                if (strArr[1].length > decimal) {
                    strArr[1] = strArr[1].substring(0, decimal);
                }
                result += '.' + strArr[1];
            }
        } else {
            if (bExists > -1) { // 소수점이 있는 경우
                if (strArr[1].length >= decimal) {
                    strArr[1] = strArr[1].substring(0, decimal);
                } else if (strArr[1].length < decimal) {
                    for (var i = 0, e = decimal - strArr[1].length; i < e; i ++) strArr[1] += '0';
                }
                result += '.' + strArr[1];
            } else { // 소수점이 없는 경우
                if (decimal > 0) {
                    for (var i = 0, e = decimal; i < e; i ++) {
                        if (i == 0) result += '.';
                        result += '0';
                    }
                }
            }
        }

        return result;
    } else {
        return '';
    }
};

$.fn.comma = function() {
    return this.each(function() {
        var $this = jQuery(this);
        var type = $this.prop('nodeName');

        $this.css('ime-mode', 'disabled');

        var decimal = $this.data('decimal');

        if (decimal == undefined || decimal == '') {
            decimal = $this.attr('data-decimal');
            if (decimal == undefined || decimal == '') {
                decimal = 0; //소수점 자릿수
            } else {
                decimal = parseInt(decimal);
            }
        } else {
            decimal = parseInt(decimal);
        }

        var str;

        if (type == 'INPUT') {
            str = '' + $this.val();
        } else {
            str = '' + $this.text();
        }

        var result = $.round_comma(str, decimal, false, true);

        // result = result.replace('.00', '');
        // if (result == '0.00') result = '0';
        if (type == 'INPUT') {
            $this.val(result);
        } else {
            $this.text(result);
        }

        if (type == 'INPUT') {
            $this.bind('keypress', function(e) {
                if ((e.which < 48 || e.which > 57) && e.which != 8 && e.which != 9 && e.which != 13 && e.which != 27
                    && e.which != 37 && e.which != 38 && e.which != 39 && e.which != 40 && e.which != 46 && e.which != 45) {
                    return false;
                }
            }).bind('keyup', function(e) {
                $this.val($.input_comma($this.val(), decimal, true));
                //$this.val($this.val().replace('.00', ''));
            }).bind('blur', function(e) {
                $this.val($.input_comma($this.val(), decimal, false));
                //$this.val($this.val().replace('.00', ''));
            });
        } else {
            $this.text($.round_comma($this.text(), decimal, false, true));
            //$this.text($this.text().replace('.00', ''));
        }
    });
};
/* 콤마 변환 끝 */

/* 숫자 입력 강제 */
/* (Backspace:8, Tab:9, Enter:13, ESC:27, A:65, Z:90, a:97, z:122, 0:48, 9:57, +:43, -:45, =:61, 방향키:37~40) */
$.fn.only_no = function() {
    return this.each(function() {
        var $this = $(this);

        $this.css('ime-mode', 'disabled');

        var min = $this.data('min');
        var max = $this.data('max');
        var regexp = /[^0-9]/gi;

        $this.bind('keypress', function(e) {
            if ((e.which < 48 || e.which > 57) && e.which != 8 && e.which != 9 && e.which != 13 && e.which != 27
                && e.which != 37 && e.which != 38 && e.which != 39 && e.which != 40) {
                return false;
            }
        }).bind('keyup', function(e) {
            if (regexp.test($this.val())) {
                $this.val($this.val().replace(regexp, ''));
            }
            if (min != undefined) {
                var v = $this.val();
                if (v == '') v =0;
                if (v < parseInt(min)) {
                    $this.val(min);
                }
            }
            if (max != undefined) {
                var v = $this.val();
                if (v == '') v = 0;
                if (v > parseInt(max)) {
                    $this.val(max);
                }
            }
        });
    });
};
/* 숫자 입력 강제 끝 */

/* 날짜를 기준으로 요일 구하기 */
function numbDay(day) {
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var dayOfWeek = week[new Date(day).getDay()];

    return dayOfWeek;
}
/* 날짜를 기준으로 요일 구하기 끝 */

/* 날짜를 기준으로 월 숫자로 구하기 */
function numbMonth(day) {
    var month = new Date(day).getMonth() + 1;

    return month;
}
/* 날짜를 기준으로 월 숫자로 구하기 끝 */

/* 전화번호 자동 하이픈 */
// var phoneNum = document.getElementById('phoneNum');

// phoneNum.onkeyup = function() {
// 	this.value = autoHypenPhone(this.value);
// }

var autoHypenPhone = function(str) {
    str = str.replace(/[^0-9]/g, '');
    var tmp = '';

    if (str.length < 4) {
        return str;
    } else if (str.length < 7) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    } else if (str.length < 11) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    } else {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }

    return str;
}
/* 전화번호 자동 하이픈 끝 */

/* 생일 자동 하이픈 */
var autoHypenBirth = function(number) {
    let ymd = '';

    if (number.length < 4) {
        return number;
    } else if (number.length < 6) {
        ymd += number.substr(0, 4);
        ymd += '.';
        ymd += number.substr(4);

        return ymd;
    } else {
        ymd += number.substr(0, 4);
        ymd += '.';
        ymd += number.substr(4, 2);
        ymd += '.';
        ymd += number.substr(6);

        return ymd;
    }
}
/* 생일 자동 하이픈 끝 */

/* 빈 입력값 체크 */
function emptyValChk(elmt) {
    var val = elmt.value;
    var label = elmt.dataset.label;

    if (val == null || val == '') {
        createAlert('alert', label + '을(를) 입력해 주세요.');
        elmt.focus();

        return false;
    }

    return true;
}
/* 빈 입력값 체크 끝 */

/* 입력 최대 길이 표시 */
function lengthMax() {
    var lengthMaximum = this.dataset.lengthMax;
    const lengthLabel = this.nextElementSibling;

    this.addEventListener('keyup', function() {
        var lengthNow = this.value.length;

        lengthLabel.textContent = lengthNow + '/' + lengthMaximum;

        if (lengthNow > lengthMaximum) {
            this.value = this.value.substr(0, lengthMaximum);
        }
    });
}
/* 입력 최대 길이 표시 끝 */

/* 클립보드에 URL 복사 */
function copyURL() {
    var copyTaker = document.createElement('input');

    copyTaker.setAttribute('type', 'text');
    document.body.appendChild(copyTaker);

    copyTaker.value = window.document.location.href;
    copyTaker.select();
    document.execCommand('copy');
    document.body.removeChild(copyTaker);

    createAlert('alert', 'URL이 복사되었습니다.');
}
/* 클립보드에 URL 복사 끝 */

/* 존재하지 않는 이미지 교체 */
function imgFound() {
    const allImages = document.querySelectorAll('img');

    allImages.forEach((e) => {
        if (!e.complete || typeof e.naturalWidth == 'undefined' || e.naturalWidth == 0) {
            e.src = '/usrSrc/images/common/not-exist.png';
            e.title = '이미지를 찾을 수 없습니다.';
            e.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        }
    });
}
/* 존재하지 않는 이미지 교체 끝 */

/* 문자를 숫자로 변경하기 */
function toNum(input) {
    if(input == '') {
        return 0;
    }

    let changeNum = input.replace(/,/gi, '');
    changeNum = parseInt(changeNum);

    return changeNum;
}
/* 문자를 숫자로 변경하기 끝 */

/* 숫자 콤마 넣기 */
function insertCommas(n) {
  let s1 = n.toString();
  let d = s1.indexOf('.');
  let s2 = d === -1 ? s1 : s1.slice(0, d);

  for (let i = s2.length - 3; i > 0; i -= 3)
    s2 = s2.slice(0, i) + ',' + s2.slice(i);

  if (d !== -1)
    s2 += s1.slice(d);

  return s2;
}

/* 숫자 콤마 넣기 끝 */

/* 문자를 가격으로 변경하기 */
function toPrice(input) {
    if(input == '' || input == null) {
        return 0;
    }

    let s1 = input.toString().replace(/,/gi, '');
    let d = s1.indexOf('.');
    let s2 = d === -1 ? s1 : s1.slice(0, d);

    for (let i = s2.length - 3; i > 0; i -= 3)
        s2 = s2.slice(0, i) + ',' + s2.slice(i);

    if (d !== -1)
        s2 += s1.slice(d);

    return s2;
}

/* 숫자 콤마 넣기 끝 */

/* 도메인 가져오기 */

var domain = window.location.protocol+"//"+window.location.hostname;

/* 도메인 가져오기 끝 */

/* 채널톡 API (임시) - 현재 개발용 코드로 되어 있음 */
/*

(function() {
    var w = window;

    if (w.ChannelIO) {
        return (window.console.error || window.console.log || function() {})('ChannelIO script included twice.');
    }
    var ch = function() {
        ch.c(arguments);
    };

    ch.q = [];

    ch.c = function(args) {
        ch.q.push(args);
    };

    w.ChannelIO = ch;

    function l() {
        if (w.ChannelIOInitialized) {
            return;
        }

        w.ChannelIOInitialized = true;

        var s = document.createElement('script');

        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        s.charset = 'UTF-8';

        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }

    if (document.readyState === 'complete') {
        l();
    } else if (window.attachEvent) {
        window.attachEvent('onload', l);
    } else {
        window.addEventListener('DOMContentLoaded', l, false);
        window.addEventListener('load', l, false);
    }
}) ();

ChannelIO('boot', {
    'pluginKey': '3c723245-7de3-45c2-9712-96d0b616b40c' // 채널톡 API KEY
});

*/
/* 채널톡 API 끝 */

/* 네비게이션 로고 클릭시 메인 이동 but 현재 주소에 따라 다른 홈으로 이동 */

function mainSpr(){
	let home = localStorage.getItem('diveCurrentHome');

    location.href = '/' + home + '.do';
}

/* 모바일 메뉴 클릭시 서브메뉴 열기 */

const mobBtns = document.querySelectorAll('.mobile-routes');

for (let i = 0; i < mobBtns.length; i ++) {
    mobBtns[i].addEventListener('click', function() {
        mobBtns[i].classList.toggle('dp2-active');
        getSiblings(mobBtns[i]).forEach((f) => {
            f.classList.remove('dp2-active');
        });
    });
}

/* 빈 컨테이너 플레이스홀더 자동 생성 */

function emptyPlaceholder({ targetEl, titleMsg, contextMsg }) {
    const phContainer = document.createElement('div');
    let guts = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.63 77.02" class="empty-container-placeholder-image">
            <path d="M1.5,65.38s2.13,.51,5.86,1.27" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: .15rem;"/>
            <path d="M18.91,68.81c37.39,6.37,121.59,14.91,116.61-38.59,0,0-3.99-31.53-38.74-28.52-34.74,3.01-30.02,38.26-30.02,38.26,0,0,6.71,43.2,81.48,34.36" style="fill:none; stroke-dasharray: 0 0 11.76 11.76; stroke-linecap: round; stroke-linejoin: round; stroke-width: .15rem;"/>
            <path d="M154.09,73.55c1.93-.29,3.91-.6,5.93-.96" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: .15rem;"/>
            <path d="M167.24,55.9s4.43-14.6,22.04-9.99,24.85,11.25,24.85,11.25c0,0-13.29,16.37-28.49,14.8,0,0-21.61-.89-18.41-16.07Z" style="fill:none; stroke-linecap:round; stroke-linejoin:round; stroke-width:3px;"/>
            <path d="M157.5,54.97s12.04-.45,24.17,2.81" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: .15rem;"/>
        </svg>

        <div class="empty-container-placeholder-text">
            <h2 data-empty-placeholder-message>${titleMsg}</h2>
            <p data-empty-placeholder-decription>${contextMsg}</p>
        </div>
    `

    phContainer.classList.add('empty-container-placeholder');
    phContainer.innerHTML = guts;

    targetEl.appendChild(phContainer);
}

/* 날짜 형식 포맷 */
function dateFormat(date) {
	let dateFormat2 = date.getFullYear() +
		'-' + ( (date.getMonth()+1) < 9 ? "0" + (date.getMonth()+1) : (date.getMonth()+1) )+
		'-' + ( (date.getDate()) < 9 ? "0" + (date.getDate()) : (date.getDate()) );
	return dateFormat2;
}
/* 날짜 형식 포맷 끝 */

/* 달 마지막 날짜 가져오기(yyyy-MM-dd) */
function getLastDay(date) {


	date = new Date(date);

	let dateFormat = new Date(date.getFullYear(), date.getMonth()+1, 0);

	return dateFormat;
}
/* 날짜 형식 포맷 끝 */
