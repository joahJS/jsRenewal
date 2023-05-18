/** 
관리자 로그인
작성자 :	장민선
작성일자 :	2022-12-12
*/

const usrid = document.getElementById('usrid');
const pass = document.getElementById('password');
const saveId = document.getElementById('chkKeepLog');
const loginBtn = document.querySelector('.Square_btnStyle');
const loginForm = document.getElementById('frmSignIn');

document.addEventListener('DOMContentLoaded', () => {
	// 아이디 저장 값 세팅
	let userInputId = getCookie("userInputId");
	usrid.value = userInputId;
})

usrid.addEventListener('keyup', (e) => {
	if(e.keyCode == 13) {
		pass.focus();
	}
})

pass.addEventListener('keyup', (e) => {
	if(e.keyCode == 13) {
		
		if(saveId.checked){ 	// 아이디 저장하기
	        setCookie("userInputId", usrid.value, 700); // 700일 동안 쿠키 보관
	    }
		
		loginForm.submit();
	}
})

loginBtn.addEventListener('click', () => {
	
	if (usrid.value == '') {
		alert('아이디를 입력해주세요.');
		usrid.focus();
		return;
	}
	
	if (pass.value == '') {
		alert('비밀번호를 입력해주세요.');
		pass.focus();
		return;
	}
	
	if(saveId.checked){  	// 아이디 저장하기
        setCookie("userInputId", usrid.value, 700); // 700일 동안 쿠키 보관
    }
	
	loginForm.submit();
})

function setCookie(cookieName, value, exdays){
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    let cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}
 
function deleteCookie(cookieName){
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
 
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    let cookieData = document.cookie;
    let start = cookieData.indexOf(cookieName);
    let cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        let end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}