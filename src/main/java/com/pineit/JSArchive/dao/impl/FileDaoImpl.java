package com.pineit.JSArchive.dao.impl;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import com.pineit.JSArchive.dao.FileDao;
import com.pineit.JSArchive.vo.FileVO;

public class FileDaoImpl implements FileDao{

	@Autowired
	SqlSession session;

	@Override
	public int addIlBookFile(FileVO fVo) {
		return session.insert("com.pineit.JSArchive.dao.FileDao.addIlBookFile", fVo);
	}

	@Override
	public Map<String, Object> getFileInfo(JSONObject obj) {
		return session.selectOne("com.pineit.JSArchive.dao.FileDao.getFileInfo", obj);
	}

	@Override
	public void delIlBookFile(JSONObject obj) {
		session.delete("com.pineit.JSArchive.dao.FileDao.delIlBookFile", obj);
		
	}

	@Override
	public int addCltDataFile(FileVO fVo) {
		return session.insert("com.pineit.JSArchive.dao.FileDao.addCltDataFile", fVo);
	}

	@Override
	public void delCltDataFile(JSONObject obj) {
		session.delete("com.pineit.JSArchive.dao.FileDao.delCltDataFile", obj);
	}

	@Override
	public Map<String, Object> getFileInfoData(JSONObject obj) {
		return session.selectOne("com.pineit.JSArchive.dao.FileDao.getFileInfoData", obj);
	}
	
	
}
