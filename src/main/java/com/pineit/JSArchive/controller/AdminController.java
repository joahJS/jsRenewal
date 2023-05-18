package com.pineit.JSArchive.controller;

import java.security.Principal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pineit.JSArchive.dao.LoginDao;
import com.pineit.JSArchive.service.AdminService;
import com.pineit.JSArchive.service.LoginService;
import com.pineit.JSArchive.vo.CollectDataVO;
import com.pineit.JSArchive.vo.IlbookVO;
import com.pineit.JSArchive.vo.UserVO;

@Controller
@RequestMapping("/admin")
public class AdminController {
   
   @Autowired
   AdminService admService;
   
   @Autowired
   LoginDao lDao;
   
   private static final Logger logger = LoggerFactory.getLogger(MainController.class);
   
   // 도록 리스트 페이지
   @RequestMapping(value = "/adminBookList.do", method = RequestMethod.GET)
   public String adminBookList() {
      logger.info("ADMIN BOOK LIST");
      
      return "/admin/page/adminBookList";
   }
   
   // 도록 리스트 가져오기
   @ResponseBody
   @RequestMapping(value = "/getIlBookList.do", method = RequestMethod.POST)
   public List<Map<String, Object>> getIlBookList(Principal principal, IlbookVO vo) throws ParseException {
      logger.info("GET IlBOOK");
      
      List<Map<String, Object>> result = admService.getIlBookList(vo);
      
      return result;
   }
   
   // 도록 등록,수정 페이지
   @RequestMapping(value = "/adminBook.do", method = RequestMethod.GET)
   public String adminBook() {
      logger.info("ADMIN BOOK");
      
      return "/admin/page/adminBook";
   }
   
   // 도록 등록
   @ResponseBody
   @RequestMapping(value = "/addIlBook.do", method = RequestMethod.POST)
   public Map<String, Object> addIlBook(Principal principal, HttpServletRequest request, MultipartHttpServletRequest mRequest) throws ParseException {
      logger.info("ADD IlBOOK");
      
      JSONParser parser = new JSONParser();
      Object obj = parser.parse(request.getParameter("data"));
      JSONObject jsonObj = (JSONObject) obj;
      
      UserVO uVo = lDao.getUserInfo(principal.getName());
      jsonObj.put("USRCD", uVo.getUSRCD());
      
      Map<String, Object> result = admService.addIlBook(jsonObj, mRequest);
      
      return result;
   }
   
   // 도록 디테일 가져오기
   @ResponseBody
   @RequestMapping(value = "/getIlBookDtl.do", method = RequestMethod.POST)
   public Map<String, Object> getIlBookDtl(Principal principal, IlbookVO vo) throws ParseException {
      logger.info("GET IlBOOK DETAIL");
      
      Map<String, Object> result = admService.getIlBookDtl(vo);
      
      return result;
   }
   
   // 도록 수정
   @ResponseBody
   @RequestMapping(value = "/udtIlBook.do", method = RequestMethod.POST)
   public Map<String, Object> udtIlBook(Principal principal, HttpServletRequest request, MultipartHttpServletRequest mRequest) throws ParseException {
      logger.info("UDT IlBOOK");
      
      JSONParser parser = new JSONParser();
      Object obj = parser.parse(request.getParameter("data"));
      JSONObject jsonObj = (JSONObject) obj;
      
      UserVO uVo = lDao.getUserInfo(principal.getName());
      jsonObj.put("USRCD", uVo.getUSRCD());
      
      Map<String, Object> result = admService.udtIlBook(jsonObj, mRequest);
      
      return result;
   }
   
   // 소장 자료 리스트 페이지
   @RequestMapping(value = "/adminDataList.do", method = RequestMethod.GET)
   public String adminDataList() {
      logger.info("ADMIN DATA LIST");
      
      return "/admin/page/adminDataList";
   }
   
   // 소장 자료 리스트 가져오기
   @ResponseBody
   @RequestMapping(value = "/getCltDataList.do", method = RequestMethod.POST)
   public List<Map<String, Object>> getCltDataList(Principal principal, CollectDataVO vo) throws ParseException {
      logger.info("GET COLLECT DATA");
      
      List<Map<String, Object>> result = admService.getCltDataList(vo);
      
      return result;
   }
   
   // 소장 자료 등록,수정 페이지
   @RequestMapping(value = "/adminData.do", method = RequestMethod.GET)
   public String adminData() {
      logger.info("ADMIN DATA");
      
      return "/admin/page/adminData";
   }
   
   // 소장 자료 등록
   @ResponseBody
   @RequestMapping(value = "/addCltData.do", method = RequestMethod.POST)
   public Map<String, Object> addCltData(Principal principal, HttpServletRequest request, MultipartHttpServletRequest mRequest) throws ParseException {
      logger.info("ADD CLT DATA");
      
      JSONParser parser = new JSONParser();
      Object obj = parser.parse(request.getParameter("data"));
      JSONObject jsonObj = (JSONObject) obj;
      
      UserVO uVo = lDao.getUserInfo(principal.getName());
      jsonObj.put("USRCD", uVo.getUSRCD());
      
      Map<String, Object> result = admService.addCltData(jsonObj, mRequest);
      
      return result;
   }
   
   // 도록 디테일 가져오기
   @ResponseBody
   @RequestMapping(value = "/getCltDataDtl.do", method = RequestMethod.POST)
   public Map<String, Object> getCltDataDtl(Principal principal, CollectDataVO vo) throws ParseException {
      logger.info("GET CLT DATA DETAIL");
      
      Map<String, Object> result = admService.getCltDataDtl(vo);
      
      return result;
   }
   
   // 도록 수정
   @ResponseBody
   @RequestMapping(value = "/udtCltData.do", method = RequestMethod.POST)
   public Map<String, Object> udtCltData(Principal principal, HttpServletRequest request, MultipartHttpServletRequest mRequest) throws ParseException {
      logger.info("UDT IlBOOK");
      
      JSONParser parser = new JSONParser();
      Object obj = parser.parse(request.getParameter("data"));
      JSONObject jsonObj = (JSONObject) obj;
      
      UserVO uVo = lDao.getUserInfo(principal.getName());
      jsonObj.put("USRCD", uVo.getUSRCD());
      
      Map<String, Object> result = admService.udtCltData(jsonObj, mRequest);
      
      return result;
   }
   
   @ResponseBody
   @RequestMapping(value = "/delIlbook.do", method = RequestMethod.POST)
   public Map<String, Object> delIllbook(HttpServletRequest request) throws ParseException {
      logger.info("DEL IlBOOK");
      String id = request.getParameter("ID");
      
      Map<String, Object> result = admService.delIlbook(id);
      
      return result;
   }

}