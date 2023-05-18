package com.pineit.JSArchive.dao;

import com.pineit.JSArchive.vo.IlbookVO;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;

public interface UserDao {

    List<Map<String, Object>> getCatIlBookList(IlbookVO vo);

	List<Map<String, Object>> getSearchArchive(JSONObject obj);
}
