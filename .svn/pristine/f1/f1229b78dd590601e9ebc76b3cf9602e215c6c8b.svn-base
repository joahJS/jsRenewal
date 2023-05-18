package com.pineit.JSArchive.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.map.HashedMap;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pineit.JSArchive.dao.MainDao;
import com.pineit.JSArchive.service.MainService;

@Service("mService")
public class MainServiceImpl implements MainService{

	@Autowired
	MainDao mDao;

	@Override
	public List<Map<String, Object>> mainCltData() {
		return mDao.mainCltData();
	}

	@Override
	public Map<String, Object> getSearchResult(JSONObject obj) {
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		List<Map<String, Object>> ilBookResult = mDao.ilBookResult(obj);
		List<Map<String, Object>> cltDataResult = mDao.cltDataResult(obj);
		
		result.put("ilBook", ilBookResult);
		result.put("cltData", cltDataResult);
		
		return result;
	}

	@Override
	public List<Map<String, Object>> getDigital(JSONObject obj) {
		return mDao.getDigital(obj);
	}
}
