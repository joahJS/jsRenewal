package com.pineit.JSArchive.dao;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;

import com.pineit.JSArchive.vo.CollectDataVO;
import com.pineit.JSArchive.vo.IlbookVO;

public interface AdminDao {

   int getIlBookId();

   int addIlBook(JSONObject obj);

   List<Map<String, Object>> getIlBookList(IlbookVO vo);

   Map<String, Object> getIlBookDtl(IlbookVO vo);

   int udtIlBook(JSONObject obj);

   int getCltDataId();

   int addCltData(JSONObject obj);

   List<Map<String, Object>> getCltDataList(CollectDataVO vo);

   Map<String, Object> getCltDataDtl(CollectDataVO vo);

   int udtCltData(JSONObject obj);
   
   int delIlbook(String id);

}