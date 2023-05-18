package com.pineit.JSArchive.dao.impl;

import com.pineit.JSArchive.dao.UserDao;
import com.pineit.JSArchive.vo.IlbookVO;
import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

public class UserDaoImpl implements UserDao {

    @Autowired
    SqlSession session;

    @Override
    public List<Map<String, Object>> getCatIlBookList(IlbookVO vo) {
        return session.selectList("com.pineit.JSArchive.dao.userDao.getCatIlBookList", vo);
    }

	@Override
	public List<Map<String, Object>> getSearchArchive(JSONObject obj) {
		return session.selectList("com.pineit.JSArchive.dao.userDao.getSearchArchive", obj);
	}

}
