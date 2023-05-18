package com.pineit.JSArchive.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.pineit.JSArchive.dao.LoginDao;
import com.pineit.JSArchive.vo.UserVO;


public class LoginSuccessHandler implements AuthenticationSuccessHandler{
	
	private String loginidname;
    private String defaultUrl;
    
    private RedirectStrategy redirectStratgy = new DefaultRedirectStrategy();
    
    @Autowired
    LoginDao lDao;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		
		clearAuthenticationAttributes(request);
		
		//로그인 정보 저장
		UserVO uVo = lDao.getUserInfo(authentication.getName());
		System.out.println(authentication.getName());
		uVo.setPASSWD("");
		
		HttpSession session = request.getSession();
		session.setAttribute("loginInfo", uVo);
		session.setMaxInactiveInterval(60*60*12) ; // 세션유지시간

		resultRedirectStrategy(request, response, authentication);
		
	}
	
	//로그인 실패 후 로그인 성공시 실패한 세션 삭제
	protected void clearAuthenticationAttributes(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        
        if(session==null) return;
    	session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
    }
	
	protected void resultRedirectStrategy(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {
        
        //SavedRequest savedRequest = requestCache.getRequest(request, response);//로그인전 페이지
        HttpSession session = request.getSession();
        String redirectUrl = (String) session.getAttribute("prevPage");
        if(redirectUrl != null) {
        	session.removeAttribute("prevPage");
        	redirectStratgy.sendRedirect(request, response, redirectUrl);
            //String targetUrl = savedRequest.getRedirectUrl();
            //redirectStratgy.sendRedirect(request, response, targetUrl);
        } else {
        	//직접 로그인 화면으로 이동했을 경우
            redirectStratgy.sendRedirect(request, response, defaultUrl);
        }
    }

	public String getLoginidname() {
		return loginidname;
	}

	public void setLoginidname(String loginidname) {
		this.loginidname = loginidname;
	}

	public String getDefaultUrl() {
		return defaultUrl;
	}

	public void setDefaultUrl(String defaultUrl) {
		this.defaultUrl = defaultUrl;
	}

}
