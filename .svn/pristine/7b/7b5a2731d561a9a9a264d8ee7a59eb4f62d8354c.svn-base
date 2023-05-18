package com.pineit.JSArchive.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import com.pineit.JSArchive.dao.MainDao;

public class MainDaoImpl implements MainDao{

	@Autowired
	SqlSession session;

	@Override
	public List<Map<String, Object>> mainCltData() {
		return session.selectList("com.pineit.JSArchive.dao.MainDao.mainCltData");
	}

	@Override
	public List<Map<String, Object>> ilBookResult(JSONObject obj) {
		return session.selectList("com.pineit.JSArchive.dao.MainDao.ilBookResult", obj);
	}

	@Override
	public List<Map<String, Object>> cltDataResult(JSONObject obj) {
		return session.selectList("com.pineit.JSArchive.dao.MainDao.cltDataResult", obj);
	}

	@Override
	public List<Map<String, Object>> getDigital(JSONObject obj) {
		return session.selectList("com.pineit.JSArchive.dao.MainDao.getDigital", obj);
	}
}
