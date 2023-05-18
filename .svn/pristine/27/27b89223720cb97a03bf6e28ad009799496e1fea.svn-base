package com.pineit.JSArchive.service.impl;

import com.pineit.JSArchive.dao.UserDao;
import com.pineit.JSArchive.service.UserService;
import com.pineit.JSArchive.vo.IlbookVO;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("usrService")
public class UserServiceImpl implements UserService {
    @Autowired
    UserDao usrDao;

    @Override
    public List<Map<String, Object>> getCatIlBookList(IlbookVO vo) {
        return usrDao.getCatIlBookList(vo);
    }

	@Override
	public List<Map<String, Object>> getSearchArchive(JSONObject obj) {
		return usrDao.getSearchArchive(obj);
	}
}

