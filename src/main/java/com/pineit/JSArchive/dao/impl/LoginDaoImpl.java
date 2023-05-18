package com.pineit.JSArchive.dao.impl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import com.pineit.JSArchive.dao.LoginDao;
import com.pineit.JSArchive.vo.UserVO;

public class LoginDaoImpl implements LoginDao{

	@Autowired
	SqlSession session;

	@Override
	public UserVO getUserInfo(String username) {
		return session.selectOne("com.pineit.JSArchive.dao.LoginDao.getUserInfo", username);
	}
}
