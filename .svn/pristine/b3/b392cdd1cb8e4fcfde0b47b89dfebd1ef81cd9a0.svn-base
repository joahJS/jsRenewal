package com.pineit.JSArchive.controller;

import com.google.gson.Gson;
import com.pineit.JSArchive.service.AdminService;
import com.pineit.JSArchive.service.UserService;
import com.pineit.JSArchive.vo.IlbookVO;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class UserController {

	@Autowired
	UserService userService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	//아카이브소개
	@RequestMapping(value = "/archive.do", method = RequestMethod.GET)
	public String archive() {
		logger.info("MAIN HOME");
		
		return "/user/page/archive";
	}
	
	
	@RequestMapping(value = "/btmSlider.do", method = RequestMethod.GET)
	public String btmSlider() {
		logger.info("MAIN HOME");
		
		return "/user/page/btmSlider";
	}
	
	// 기록물 검색
	@RequestMapping(value = "/searchArchive.do", method = RequestMethod.GET)
	public String searchArchive() {
		logger.info("MAIN HOME");
		
		return "/user/page/searchArchive";
	}
	
	// 기록물 검색 데이터 가져오기
	@ResponseBody
	@RequestMapping(value = "/getSearchArchive.do", method = RequestMethod.POST)
	public List<Map<String, Object>> getSearchArchive(HttpServletRequest request) throws ParseException {
		logger.info("MAIN HOME");
		
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(request.getParameter("data"));
		JSONObject jsonObj = (JSONObject) obj;
		
		List<Map<String, Object>> result = userService.getSearchArchive(jsonObj);
		
		return result;
	}
	
	@RequestMapping(value = "/categorical.do", method = RequestMethod.GET)
	public String categorical() {
		logger.info("MAIN HOME");
		
		return "/user/page/categorical";
	}

	// 도록 리스트 가져오기
	@ResponseBody
	@RequestMapping(value = "/getCatIlBookList.do", method = RequestMethod.POST)
	public List<Map<String, Object>> getCatIlBookList(Principal principal, IlbookVO vo) throws ParseException {
		logger.info("GET CATIlBOOK");

		List<Map<String, Object>> result = userService.getCatIlBookList(vo);

		return result;
	}
	
	// 분류별 기록물 > 분류별 검색
	@ResponseBody
	@RequestMapping(value = "/saveCateSearch.do", method = RequestMethod.POST)
	public void saveCateSearch(HttpSession session, @RequestParam(name="searchText") String searchText) {
		logger.info("SAVE CATE SEARCH TEXT");
			
		session.setAttribute("searchText", searchText);
	}
	
	
	
	//아카이브소개 - 자료이용안내
	@RequestMapping(value = "/DataUse.do", method = RequestMethod.GET)
	public String DataUse() {
		logger.info("MAIN HOME");
		
		return "/user/page/DataUse";
	}
	
	
	//디지털 소장자료
	@RequestMapping(value = "/digital.do", method = RequestMethod.GET)
	public String digital() {
		logger.info("MAIN HOME");
		
		return "/user/page/digital";
	}
	
	
	//기록물 토탈검색
	@RequestMapping(value = "/totalSearch.do", method = RequestMethod.GET)
	public String totalSearch() {
		logger.info("MAIN HOME");
		
		return "/user/page/totalSearch";
	}
	
	// 분류별 검색결과 페이지
	@RequestMapping(value = "/cateResult.do", method = RequestMethod.GET)
	public String cateResult(HttpSession session, Model model) {
		logger.info("CATE SEARCH RESULT");
			
		if(session.getAttribute("searchText") != null) {
			String searchText = session.getAttribute("searchText").toString();
			model.addAttribute("searchText", searchText);
		}
			
		return "/user/page/cateResult";
	}
		
		
}
