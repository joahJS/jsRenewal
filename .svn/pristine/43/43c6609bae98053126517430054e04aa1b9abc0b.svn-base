package com.pineit.JSArchive.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.pineit.JSArchive.dao.LoginDao;
import com.pineit.JSArchive.service.LoginService;
import com.pineit.JSArchive.vo.UserDetailsVO;
import com.pineit.JSArchive.vo.UserVO;

@Primary
@Service("lService")
public class LoginServiceImpl implements UserDetailsService,LoginService{
	
	@Autowired
	LoginDao lDao;
	
	@Autowired
	private BCryptPasswordEncoder bcryptPasswordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// 최종적으로 리턴해야할 객체
		UserDetailsVO userDetails = new UserDetailsVO();

		// 사용자 정보 select
		UserVO userInfo = lDao.getUserInfo(username);
		
		// 사용자 정보 없으면 예외처리
		if (userInfo == null) {
			throw new UsernameNotFoundException(username);

		// 사용자 정보 있을 경우 로직 전개 (userDetails에 데이터 넣기)
		} else {
			userDetails.setUsername(userInfo.getUSRID());
			//복호화
			try {
				userDetails.setPassword(userInfo.getPASSWD());
			
			} catch (Exception e) {
				e.printStackTrace();
			}

			List<String> authlist = new ArrayList<String>();
			authlist.add(userInfo.getAUTH());
			
			// 사용자 권한 List<String> 객체 주입
			userDetails.setAuthorities(authlist);
		}

		return userDetails;
	}
}
