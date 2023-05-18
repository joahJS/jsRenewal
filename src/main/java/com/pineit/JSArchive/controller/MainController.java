package com.pineit.JSArchive.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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

import com.pineit.JSArchive.service.MainService;

@Controller /* 메인 페이지 */
public class MainController {
	
	@Autowired
	MainService mService;
	
	private static final Logger logger = LoggerFactory.getLogger(MainController.class);
	
	// 메인 페이지
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		logger.info("DEFAULT HOME");
		
		return "/user/main/main";
	}
	
	// 메인 페이지
		@RequestMapping(value = "/default_main.do", method = RequestMethod.GET)
		public String default_main() {
			logger.info("MAIN HOME");
			
			return "/user/main/default_main";
		}
	
	
	// 메인 > 디지털 소장자료
	@ResponseBody
	@RequestMapping(value = "/mainCltData.do", method = RequestMethod.POST)
	public List<Map<String, Object>> mainCltData() {
		logger.info("MAIN CLT DATA");
		
		List<Map<String, Object>> result = mService.mainCltData();
		
		return result;
	}
	
	
	// 메인 > 통합검색
	@ResponseBody
	@RequestMapping(value = "/saveSearch.do", method = RequestMethod.POST)
	public void saveSearch(HttpSession session, @RequestParam(name="searchText") String searchText) {
		logger.info("SAVE SEARCH TEXT");
		
		session.setAttribute("searchText", searchText);
	}
	
	// 통합 검색결과 페이지
	@RequestMapping(value = "/searchResult.do", method = RequestMethod.GET)
	public String searchResult(HttpSession session, Model model) {
		logger.info("total search result");
		
		if(session.getAttribute("searchText") != null) {
			String searchText = session.getAttribute("searchText").toString();
			model.addAttribute("searchText", searchText);
		}
		
		return "/user/page/searchResult";
	}
	
	// 통합 검색결과
	@ResponseBody
	@RequestMapping(value = "/getSearchResult.do", method = RequestMethod.POST)
	public Map<String, Object> getSearchResult(HttpServletRequest request) throws ParseException {
		logger.info("GET TOTAL SEARCH RESULT");
		
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(request.getParameter("data"));
		JSONObject jsonObj = (JSONObject) obj;
		
		Map<String, Object> result = mService.getSearchResult(jsonObj);
		
		return result;
	}
	
	// 메인 > 디지털 소장자료
	@ResponseBody
	@RequestMapping(value = "/getDigital.do", method = RequestMethod.POST)
	public List<Map<String, Object>> getDigital(HttpServletRequest request) throws ParseException {
		logger.info("GET DIGITAL");
		
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(request.getParameter("data"));
		JSONObject jsonObj = (JSONObject) obj;
		
		List<Map<String, Object>> result = mService.getDigital(jsonObj);
		
		return result;
	}
	
}
