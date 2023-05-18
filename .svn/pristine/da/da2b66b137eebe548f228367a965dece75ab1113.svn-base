package com.pineit.JSArchive.dao;

import java.util.Map;

import org.json.simple.JSONObject;

import com.pineit.JSArchive.vo.FileVO;

public interface FileDao {

	// 도록 파일 등록
	int addIlBookFile(FileVO fVo);

	// 도록 정보 
	Map<String, Object> getFileInfo(JSONObject obj);

	// 도록 이미지 삭제
	void delIlBookFile(JSONObject obj);

	// 소장 자료 파일 등록
	int addCltDataFile(FileVO fVo);

	void delCltDataFile(JSONObject obj);

	// 소장자료 정보 
	Map<String, Object> getFileInfoData(JSONObject obj);

}
