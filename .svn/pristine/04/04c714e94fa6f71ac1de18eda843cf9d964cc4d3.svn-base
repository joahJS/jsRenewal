/** 
관리자 > 도록 등록
작업자 :	장민선
작업일자 :	2022-12-13
*/

const regno = document.querySelector('[data-regno]');
const imgKr = document.querySelector('[data-img-kr]');
const imgJp = document.querySelector('[data-img-jp]');
const imgEn = document.querySelector('[data-img-en]');
const asgnKr = document.querySelector('[data-assign-kr]');
const asgnJp = document.querySelector('[data-assign-jp]');
const asgnEn = document.querySelector('[data-assign-en]');
const tRange = document.querySelector('[data-range]');
const formKr = document.querySelector('[data-form-kr]');
const formJp = document.querySelector('[data-form-jp]');
const formEn = document.querySelector('[data-form-en]');
const acqKr = document.querySelector('[data-acq-kr]');
const acqJp = document.querySelector('[data-acq-jp]');
const acqEn = document.querySelector('[data-acq-en]');
const linkPKr = document.querySelector('[data-link-professional-kr]');
const linkPJp = document.querySelector('[data-link-professional-jp]');
const linkPEn = document.querySelector('[data-link-professional-en]');
const linkNKr = document.querySelector('[data-link-normal-kr]');
const linkNJp = document.querySelector('[data-link-normal-jp]');
const linkNEn = document.querySelector('[data-link-normal-en]');
const contKr = document.querySelector('[data-content-kr]');
const contJp = document.querySelector('[data-content-jp]');
const contEn = document.querySelector('[data-content-en]');

const saveBtn = document.getElementById('savebtn');

let id = $.urlParam('ID');


document.addEventListener('DOMContentLoaded', () => {
	if(id != null) {
		getIlBookDtl();
	}
})

// 디테일 값
function getIlBookDtl() {
	$.ajax({
		url : 'getIlBookDtl.do',
		type : 'post',
		data : {
			ID : id
		},
		success: function(res) {
			if(res != null) {
				regno.value = res.REGNO;
				document.querySelector('.upload-name').value = res.KRIMGNM;
				document.querySelector('.upload-name1').value = res.JPIMGNM;
				document.querySelector('.upload-name2').value = res.ENIMGNM;
				asgnKr.value = res.ASGN_KR;
				asgnJp.value = res.ASGN_JP;
				asgnEn.value = res.ASGN_EN;
				tRange.value = res.TRANGE;
				formKr.value = res.FORM_KR;
				formJp.value = res.FORM_JP;
				formEn.value = res.FORM_EN;
				acqKr.value = res.ACQ_KR;
				acqJp.value = res.ACQ_JP;
				acqEn.value = res.ACQ_EN;
				linkPKr.value = res.LINKP_KR;
				linkPJp.value = res.LINKP_JP;
				linkPEn.value = res.LINKP_EN;
				linkNKr.value = res.LINKN_KR;
				linkNJp.value = res.LINKN_JP;
				linkNEn.value = res.LINKN_EN;
				contKr.value = res.CONT_KR;
				contJp.value = res.CONT_JP;
				contEn.value = res.CONT_EN;
				
				if(res.CATEGORY != '') {
					document.getElementsByName('Record').forEach((e) => {
						if(res.CATEGORY == e.value) {
							e.checked = true;
						}
					})
				}
				
				if(res.NTL_FROM != '') {
					document.getElementsByName('nation').forEach((e) => {
						if(res.NTL_FROM == e.value) {
							e.checked = true;
						}
					})
				}
			}
		},
		error : function() {
			alert('상세 데이터를 가져오던 도중 오류가 발생하였습니다.');
			return;
		}
	})
}

// 저장
saveBtn.addEventListener('click', () => {
	
	const category = document.querySelector('input[name=Record]:checked');
	const ntlFrom = document.querySelector('input[name=nation]:checked');
	
	if(regno.vlaue == '') {
		alert('등재번호를 입력해주세요.');
		regno.focus();
		return;
	}
	
	if(category == null) {
		alert('기록물분류를 선택해주세요.');
		return;
	}
	
	if(ntlFrom == null) {
		alert('제작국가를 선택해주세요.');
		return;
	}
	
	let formData = new FormData();
	let data = {};
	
	data['REGNO'] = regno.value;
	data['ASGN_KR'] = asgnKr.value;
	data['ASGN_JP'] = asgnJp.value;
	data['ASGN_EN'] = asgnEn.value;
	data['TRANGE'] = tRange.value;
	data['FORM_KR'] = formKr.value;
	data['FORM_JP'] = formJp.value;
	data['FORM_EN'] = formEn.value;
	data['ACQ_KR'] = acqKr.value;
	data['ACQ_JP'] = acqJp.value;
	data['ACQ_EN'] = acqEn.value;
	data['CATEGORY'] = category.value;
	data['NTL_FROM'] = ntlFrom.value;
	data['LINKP_KR'] = linkPKr.value;
	data['LINKP_JP'] = linkPJp.value;
	data['LINKP_EN'] = linkPEn.value;
	data['LINKN_KR'] = linkNKr.value;
	data['LINKN_JP'] = linkNJp.value;
	data['LINKN_EN'] = linkNEn.value;
	data['CONT_KR'] = contKr.value;
	data['CONT_JP'] = contJp.value;
	data['CONT_EN'] = contEn.value;
	
	if(imgKr.files.length != 0) {
		formData.append('imgKr', imgKr.files[0]);
	}
	
	if(imgJp.files.length != 0) {
		formData.append('imgJp', imgJp.files[0]);
	}
	
	if(imgEn.files.length != 0) {
		formData.append('imgEn', imgEn.files[0]);
	}
	
	if(id == null) {	// 등록
		formData.append('data', JSON.stringify(data));
	
		$.ajax({
			url : 'addIlBook.do',
			type : 'post',
			data : formData,
			enctype: 'multipart/form-data',
	        cache: false,
	        contentType: false,
	        processData: false,
			success: function(res) {
				alert(res.MSG);
				location.href = 'adminBookList.do';
			},
			error : function() {
				alert('도록을 등록하던 도중 오류가 발생하였습니다.');
				return;
			} 
		})
	} else {	// 수정
		data['ID'] = id;
		formData.append('data', JSON.stringify(data));
	
		$.ajax({
			url : 'udtIlBook.do',
			type : 'post',
			data : formData,
			enctype: 'multipart/form-data',
	        cache: false,
	        contentType: false,
	        processData: false,
			success: function(res) {
				alert(res.MSG);
				location.href = 'adminBookList.do';
			},
			error : function() {
				alert('도록을 등록하던 도중 오류가 발생하였습니다.');
				return;
			} 
		})
	}
})

// 이미지 파일
$("#imgFile").on('change', function () {
    var fileName = $("#imgFile").val();
    $(".upload-name").val(fileName);
});
$("#imgFile1").on('change', function () {
    var fileName = $("#imgFile1").val();
    $(".upload-name1").val(fileName);
});
$("#imgFile2").on('change', function () {
    var fileName = $("#imgFile2").val();
    $(".upload-name2").val(fileName);
});