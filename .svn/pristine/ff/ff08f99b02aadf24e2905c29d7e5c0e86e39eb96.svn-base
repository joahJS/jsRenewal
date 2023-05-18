package com.pineit.JSArchive.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import com.pineit.JSArchive.dao.AdminDao;
import com.pineit.JSArchive.vo.CollectDataVO;
import com.pineit.JSArchive.vo.IlbookVO;

public class AdminDaoImpl implements AdminDao{
   
   @Autowired
   SqlSession session;

   @Override
   public int getIlBookId() {
      return session.selectOne("com.pineit.JSArchive.dao.adminDao.getIlBookId");
   }

   @Override
   public int addIlBook(JSONObject obj) {
      return session.insert("com.pineit.JSArchive.dao.adminDao.addIlBook", obj);
   }

   @Override
   public List<Map<String, Object>> getIlBookList(IlbookVO vo) {
      return session.selectList("com.pineit.JSArchive.dao.adminDao.getIlBookList", vo);
   }

   @Override
   public Map<String, Object> getIlBookDtl(IlbookVO vo) {
      return session.selectOne("com.pineit.JSArchive.dao.adminDao.getIlBookDtl", vo);
   }

   @Override
   public int udtIlBook(JSONObject obj) {
      return session.update("com.pineit.JSArchive.dao.adminDao.udtIlBook", obj);
   }

   @Override
   public int getCltDataId() {
      return session.selectOne("com.pineit.JSArchive.dao.adminDao.getCltDataId");
   }

   @Override
   public int addCltData(JSONObject obj) {
      return session.insert("com.pineit.JSArchive.dao.adminDao.addCltData", obj);
   }

   @Override
   public List<Map<String, Object>> getCltDataList(CollectDataVO vo) {
      return session.selectList("com.pineit.JSArchive.dao.adminDao.getCltDataList", vo);
   }

   @Override
   public Map<String, Object> getCltDataDtl(CollectDataVO vo) {
      return session.selectOne("com.pineit.JSArchive.dao.adminDao.getCltDataDtl", vo);
   }

   @Override
   public int udtCltData(JSONObject obj) {
      return session.update("com.pineit.JSArchive.dao.adminDao.udtCltData", obj);
   }

   @Override
   public int delIlbook(String id) {
      return session.delete("com.pineit.JSArchive.dao.adminDao.delIlbook", id);
   }

}