/** 
관리자 > 소장자료 등록, 수정
작업자 :	장민선
작업일자 :	2022-12-15
*/

let id = $.urlParam('ID');

const regno = document.querySelector('[data-regno]');
const imgKr = document.querySelector('[data-img-kr]');
//const imgJp = document.querySelector('[data-img-jp]');
//const imgEn = document.querySelector('[data-img-en]');
const asgnKr = document.querySelector('[data-assign-kr]');
const asgnJp = document.querySelector('[data-assign-jp]');
const asgnEn = document.querySelector('[data-assign-en]');
const titleKr = document.querySelector('[data-title-kr]');
const titleJp = document.querySelector('[data-title-jp]');
const titleEn = document.querySelector('[data-title-en]');
const tRange = document.querySelector('[data-range]');
const authorKr = document.querySelector('[data-author-kr]');
const authorJp = document.querySelector('[data-author-jp]');
const authorEn = document.querySelector('[data-author-en]');
const formKr = document.querySelector('[data-form-kr]');
const formJp = document.querySelector('[data-form-jp]');
const formEn = document.querySelector('[data-form-en]');
const craftKr = document.querySelector('[data-craft-kr]');
const craftJp = document.querySelector('[data-craft-jp]');
const craftEn = document.querySelector('[data-craft-en]');
const dmn = document.querySelector('[data-dmn]');
const acqKr = document.querySelector('[data-acq-kr]');
const acqJp = document.querySelector('[data-acq-jp]');
const acqEn = document.querySelector('[data-acq-en]');
const imgLink = document.querySelector('[data-img-link]');

const saveBtn = document.getElementById('savebtn');

document.addEventListener('DOMContentLoaded', () => {
	if(id != null) {
		getCltDataDtl();
	}
})

// 수정시 상세정보
function getCltDataDtl() {
	$.ajax({
		url : 'getCltDataDtl.do',
		type : 'post',
		data : {
			'ID' : id 
		},
		success:function(res) {
			if(res != null) {
				regno.value = res.REGNO;
				document.querySelector('.upload-name').value = res.FILE_NAME;
				asgnKr.value = res.ASGN_KR;
				asgnJp.value = res.ASGN_JP;
				asgnEn.value = res.ASGN_EN;
				titleKr.value = res.TITLE_KR;
				titleJp.value = res.TITLE_JP;
				titleEn.value = res.TITLE_EN;
				tRange.value = res.TRANGE;
				authorKr.value = res.AUTHOR_KR;
				authorJp.value = res.AUTHOR_JP;
				authorEn.value = res.AUTHOR_EN;
				formKr.value = res.FORM_KR;
				formJp.value = res.FORM_JP;
				formEn.value = res.FORM_EN;
				craftKr.value = res.CRAFT_KR;
				craftJp.value = res.CRAFT_JP;
				craftEn.value = res.CRAFT_EN;
				dmn.value = res.DMN;
				acqKr.value = res.ACQ_KR;
				acqJp.value = res.ACQ_JP;
				acqEn.value = res.ACQ_EN;
				imgLink.value = res.IMGLINK;
				
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
		error:function() {
			alert('상세정보를 가져오는데 오류가 발생하였습니다.');
			return;
		}
	})
}

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
	data['TITLE_KR'] = titleKr.value;
	data['TITLE_JP'] = titleJp.value;
	data['TITLE_EN'] = titleEn.value;
	data['TRANGE'] = tRange.value;
	data['AUTHOR_KR'] = authorKr.value;
	data['AUTHOR_JP'] = authorJp.value;
	data['AUTHOR_EN'] = authorEn.value;
	data['FORM_KR'] = formKr.value;
	data['FORM_JP'] = formJp.value;
	data['FORM_EN'] = formEn.value;
	data['CRAFT_KR'] = craftKr.value;
	data['CRAFT_JP'] = craftJp.value;
	data['CRAFT_EN'] = craftEn.value;
	data['DMN'] = dmn.value;
	data['ACQ_KR'] = acqKr.value;
	data['ACQ_JP'] = acqJp.value;
	data['ACQ_EN'] = acqEn.value;
	data['IMGLINK'] = imgLink.value;
	data['CATEGORY'] = category.value;
	data['NTL_FROM'] = ntlFrom.value;
	
	if(imgKr.files.length != 0) {
		formData.append('imgKr', imgKr.files[0]);
	}
	
	/*if(imgJp.files.length != 0) {
		formData.append('imgJp', imgJp.files[0]);
	}
	
	if(imgEn.files.length != 0) {
		formData.append('imgEn', imgEn.files[0]);
	}*/
	
	if(id == null) {	// 등록
		formData.append('data', JSON.stringify(data));
	
		$.ajax({
			url : 'addCltData.do',
			type : 'post',
			data : formData,
			enctype: 'multipart/form-data',
	        cache: false,
	        contentType: false,
	        processData: false,
			success: function(res) {
				alert(res.MSG);
				location.href = 'adminDataList.do';
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
			url : 'udtCltData.do',
			type : 'post',
			data : formData,
			enctype: 'multipart/form-data',
	        cache: false,
	        contentType: false,
	        processData: false,
			success: function(res) {
				alert(res.MSG);
				location.href = 'adminDataList.do';
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