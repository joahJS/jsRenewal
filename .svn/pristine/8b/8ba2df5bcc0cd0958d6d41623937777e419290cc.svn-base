package com.pineit.JSArchive.service;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pineit.JSArchive.vo.CollectDataVO;
import com.pineit.JSArchive.vo.IlbookVO;

public interface AdminService {

	Map<String, Object> addIlBook(JSONObject obj, MultipartHttpServletRequest mRequest);

	List<Map<String, Object>> getIlBookList(IlbookVO vo);

	Map<String, Object> getIlBookDtl(IlbookVO vo);

	Map<String, Object> udtIlBook(JSONObject obj, MultipartHttpServletRequest mRequest);

	Map<String, Object> addCltData(JSONObject obj, MultipartHttpServletRequest mRequest);

	List<Map<String, Object>> getCltDataList(CollectDataVO vo);

	Map<String, Object> getCltDataDtl(CollectDataVO vo);

	Map<String, Object> udtCltData(JSONObject obj, MultipartHttpServletRequest mRequest);

	Map<String, Object> delIlbook(String id);

}
