package com.pineit.JSArchive.service.impl;

import java.io.File;
import java.io.IOException;
import java.net.SocketException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pineit.JSArchive.dao.FileDao;
import com.pineit.JSArchive.dao.AdminDao;
import com.pineit.JSArchive.service.AdminService;
import com.pineit.JSArchive.vo.CollectDataVO;
import com.pineit.JSArchive.vo.FileVO;
import com.pineit.JSArchive.vo.IlbookVO;

@Service("admService")
public class AdminServiceImpl implements AdminService{

   @Autowired
   AdminDao admDao;
   
   @Autowired
   FileDao fileDao;

   @Override
   public Map<String, Object> addIlBook(JSONObject obj, MultipartHttpServletRequest mRequest) {
      Map<String, Object> result = new HashMap<String,Object>();
      
      int id = admDao.getIlBookId();
      
      try {
         int add = admDao.addIlBook(obj);
         
         if (add > 0) {
            result.put("RESULT", "1");
            result.put("MSG", "등록이 완료되었습니다.");
         } else {
            result.put("RESULT", "0");
            result.put("MSG", "도록을 등록하던 도중 오류가 발생하였습니다.");
            
            return result;
         }
         
         String filePath = "/var/webapps/upload/ilbook/" + id + "/kr/";
         
         if(mRequest.getFiles("imgKr") != null && mRequest.getFiles("imgKr").size() > 0){
            List<MultipartFile> mf = mRequest.getFiles("imgKr");
            
            File file = new File(filePath);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               String random = UUID.randomUUID().toString();
               Date today = new Date();
               SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                
               String originalfilename = mf.get(0).getOriginalFilename();
               int pos = originalfilename.lastIndexOf(".");
               String ext = originalfilename.substring(pos+1);
                
               String saveFileName = random + date.format(today) + "."+ ext;
               
               int fileSize = (int) mf.get(0).getSize();
                  
               file = new File(filePath + saveFileName);
               mf.get(0).transferTo(file);
                 
               FileVO fVo = new FileVO();
                
               fVo.setID(Integer.toString(id));
               fVo.setFILE_NAME(originalfilename);
               fVo.setFILE_SAVE_NAME(saveFileName);
               fVo.setSVPATH(filePath+saveFileName);
               fVo.setFILURL("/ilbook/" + id + "/kr/" + saveFileName);
               fVo.setCUSER(obj.get("USRCD").toString());
               fVo.setLANG("kr");
               
               int addFile = fileDao.addIlBookFile(fVo);
                
               if(addFile == 0) {
                  result.put("RESULT", -1);
                  result.put("MSG", "파일 저장 실패");
                  return result;
               } 
            }
         }
         
         String filePath2 = "/var/webapps/upload/ilbook/" + id + "/jp/";
         
         if(mRequest.getFiles("imgJp") != null && mRequest.getFiles("imgJp").size() > 0){
            List<MultipartFile> mf = mRequest.getFiles("imgJp");
            
            File file = new File(filePath2);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               String random = UUID.randomUUID().toString();
               Date today = new Date();
               SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                
               String originalfilename = mf.get(0).getOriginalFilename();
               int pos = originalfilename.lastIndexOf(".");
               String ext = originalfilename.substring(pos+1);
                
               String saveFileName = random + date.format(today) + "."+ ext;
               
               int fileSize = (int) mf.get(0).getSize();
                  
               file = new File(filePath2 + saveFileName);
               mf.get(0).transferTo(file);
                
               FileVO fVo = new FileVO();
                
               fVo.setID(Integer.toString(id));
               fVo.setFILE_NAME(originalfilename);
               fVo.setFILE_SAVE_NAME(saveFileName);
               fVo.setSVPATH(filePath2+saveFileName);
               fVo.setFILURL("/ilbook/" + id + "/jp/" + saveFileName);
               fVo.setCUSER(obj.get("USRCD").toString());
               fVo.setLANG("jp");
               
               int addFile = fileDao.addIlBookFile(fVo);
                
               if(addFile == 0) {
                  result.put("RESULT", -1);
                  result.put("MSG", "파일 저장 실패");
                  return result;
               } 
            }
         }
         
         String filePath3 = "/var/webapps/upload/ilbook/" + id + "/en/";
         
         if(mRequest.getFiles("imgEn") != null && mRequest.getFiles("imgEn").size() > 0){
            List<MultipartFile> mf = mRequest.getFiles("imgEn");
            
            File file = new File(filePath3);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               
               for (int i=0;i<mf.size(); i++) {
                  String random = UUID.randomUUID().toString();
                  Date today = new Date();
                  SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                   
                  String originalfilename = mf.get(i).getOriginalFilename();
                  int pos = originalfilename.lastIndexOf(".");
                  String ext = originalfilename.substring(pos+1);
                   
                  String saveFileName = random + date.format(today) + "."+ ext;
                  
                  int fileSize = (int) mf.get(i).getSize();
                     
                  file = new File(filePath3 + saveFileName);
                  mf.get(0).transferTo(file);
                   
                  FileVO fVo = new FileVO();
                   
                  fVo.setID(Integer.toString(id));
                  fVo.setFILE_NAME(originalfilename);
                  fVo.setFILE_SAVE_NAME(saveFileName);
                  fVo.setSVPATH(filePath3+saveFileName);
                  fVo.setFILURL("/ilbook/" + id + "/en/" + saveFileName);
                  fVo.setCUSER(obj.get("USRCD").toString());
                  fVo.setLANG("en"); 
                  
                  int addFile = fileDao.addIlBookFile(fVo);
                   
                  if(addFile == 0) {
                     result.put("RESULT", -1);
                     result.put("MSG", "파일 저장 실패");
                     return result;
                  } 
               }
            }
         }
         
      } catch (SocketException e) {
         e.printStackTrace();
      } catch (IOException e) {
         e.printStackTrace();
      } catch (Exception e) {
         e.printStackTrace();
      }
      
      return result;
   }

   @Override
   public List<Map<String, Object>> getIlBookList(IlbookVO vo) {
      return admDao.getIlBookList(vo);
   }

   @Override
   public Map<String, Object> getIlBookDtl(IlbookVO vo) {
      return admDao.getIlBookDtl(vo);
   }

   @Override
   public Map<String, Object> udtIlBook(JSONObject obj, MultipartHttpServletRequest mRequest) {
      Map<String, Object> result = new HashMap<String,Object>();
      
      int id = Integer.parseInt(obj.get("ID").toString());
      
      try {
         int add = admDao.udtIlBook(obj);
         
         if (add > 0) {
            result.put("RESULT", "1");
            result.put("MSG", "수정이 완료되었습니다.");
         } else {
            result.put("RESULT", "0");
            result.put("MSG", "도록을 수정하던 도중 오류가 발생하였습니다.");
            
            return result;
         }
         
         String filePath = "/var/webapps/upload/ilbook/" + id + "/kr/";
         
         if(!mRequest.getFiles("imgKr").isEmpty() && mRequest.getFiles("imgKr").size() > 0){
            obj.put("LANG", "kr");
            Map<String, Object> info = fileDao.getFileInfo(obj);
            
            if(info != null) {
               File files = new File(info.get("SVPATH").toString());
               
               if(files.exists()) {
                  if(files.delete()) {
                     System.out.println("파일삭제 성공");
                     fileDao.delIlBookFile(obj);
                  }else {
                     System.out.println("파일삭제 실패");
                  }
               }else {
                  System.out.println("파일이 존재하지 않습니다.");
               }
            }
            
            List<MultipartFile> mf = mRequest.getFiles("imgKr");
            
            File file = new File(filePath);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               String random = UUID.randomUUID().toString();
               Date today = new Date();
               SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                
               String originalfilename = mf.get(0).getOriginalFilename();
               int pos = originalfilename.lastIndexOf(".");
               String ext = originalfilename.substring(pos+1);
                
               String saveFileName = random + date.format(today) + "."+ ext;
               
               int fileSize = (int) mf.get(0).getSize();
                  
               file = new File(filePath + saveFileName);
               mf.get(0).transferTo(file);
                 
               FileVO fVo = new FileVO();
                
               fVo.setID(Integer.toString(id));
               fVo.setFILE_NAME(originalfilename);
               fVo.setFILE_SAVE_NAME(saveFileName);
               fVo.setSVPATH(filePath+saveFileName);
               fVo.setFILURL("/ilbook/" + id + "/kr/" + saveFileName);
               fVo.setCUSER(obj.get("USRCD").toString());
               fVo.setLANG("kr");
               
               int addFile = fileDao.addIlBookFile(fVo);
                
               if(addFile == 0) {
                  result.put("RESULT", -1);
                  result.put("MSG", "파일 저장 실패");
                  return result;
               } 
            }
         }
         
         String filePath2 = "/var/webapps/upload/ilbook/" + id + "/jp/";
         
         if(!mRequest.getFiles("imgJp").isEmpty() && mRequest.getFiles("imgJp").size() > 0){
            obj.put("LANG", "jp");
            Map<String, Object> info = fileDao.getFileInfo(obj);
            
            if(info != null) {
               File files = new File(info.get("SVPATH").toString());
               
               if(files.exists()) {
                  if(files.delete()) {
                     System.out.println("파일삭제 성공");
                     fileDao.delIlBookFile(obj);
                  }else {
                     System.out.println("파일삭제 실패");
                  }
               }else {
                  System.out.println("파일이 존재하지 않습니다.");
               }
            }
            
            List<MultipartFile> mf = mRequest.getFiles("imgJp");
            
            File file = new File(filePath2);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               String random = UUID.randomUUID().toString();
               Date today = new Date();
               SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                
               String originalfilename = mf.get(0).getOriginalFilename();
               int pos = originalfilename.lastIndexOf(".");
               String ext = originalfilename.substring(pos+1);
                
               String saveFileName = random + date.format(today) + "."+ ext;
               
               int fileSize = (int) mf.get(0).getSize();
                  
               file = new File(filePath2 + saveFileName);
               mf.get(0).transferTo(file);
                
               FileVO fVo = new FileVO();
                
               fVo.setID(Integer.toString(id));
               fVo.setFILE_NAME(originalfilename);
               fVo.setFILE_SAVE_NAME(saveFileName);
               fVo.setSVPATH(filePath2+saveFileName);
               fVo.setFILURL("/ilbook/" + id + "/jp/" + saveFileName);
               fVo.setCUSER(obj.get("USRCD").toString());
               fVo.setLANG("jp");
               
               int addFile = fileDao.addIlBookFile(fVo);
                
               if(addFile == 0) {
                  result.put("RESULT", -1);
                  result.put("MSG", "파일 저장 실패");
                  return result;
               } 
            }
         }
         
         String filePath3 = "/var/webapps/upload/ilbook/" + id + "/en/";
         
         if(!mRequest.getFiles("imgEn").isEmpty() && mRequest.getFiles("imgEn").size() > 0){
            obj.put("LANG", "en");
            Map<String, Object> info = fileDao.getFileInfo(obj);
            
            if(info != null) {
               File files = new File(info.get("SVPATH").toString());
               
               if(files.exists()) {
                  if(files.delete()) {
                     System.out.println("파일삭제 성공");
                     fileDao.delIlBookFile(obj);
                  }else {
                     System.out.println("파일삭제 실패");
                  }
               }else {
                  System.out.println("파일이 존재하지 않습니다.");
               }
            }
            
            List<MultipartFile> mf = mRequest.getFiles("imgEn");
            
            File file = new File(filePath3);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               
               for (int i=0;i<mf.size(); i++) {
                  String random = UUID.randomUUID().toString();
                  Date today = new Date();
                  SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                   
                  String originalfilename = mf.get(i).getOriginalFilename();
                  int pos = originalfilename.lastIndexOf(".");
                  String ext = originalfilename.substring(pos+1);
                   
                  String saveFileName = random + date.format(today) + "."+ ext;
                  
                  int fileSize = (int) mf.get(i).getSize();
                     
                  file = new File(filePath3 + saveFileName);
                  mf.get(0).transferTo(file);
                   
                  FileVO fVo = new FileVO();
                   
                  fVo.setID(Integer.toString(id));
                  fVo.setFILE_NAME(originalfilename);
                  fVo.setFILE_SAVE_NAME(saveFileName);
                  fVo.setSVPATH(filePath3+saveFileName);
                  fVo.setFILURL("/ilbook/" + id + "/en/" + saveFileName);
                  fVo.setCUSER(obj.get("USRCD").toString());
                  fVo.setLANG("en"); 
                  
                  int addFile = fileDao.addIlBookFile(fVo);
                   
                  if(addFile == 0) {
                     result.put("RESULT", -1);
                     result.put("MSG", "파일 저장 실패");
                     return result;
                  } 
               }
            }
         }
         
      } catch (SocketException e) {
         e.printStackTrace();
      } catch (IOException e) {
         e.printStackTrace();
      } catch (Exception e) {
         e.printStackTrace();
      }
      
      return result;
   }

   @Override
   public Map<String, Object> addCltData(JSONObject obj, MultipartHttpServletRequest mRequest) {
      Map<String, Object> result = new HashMap<String,Object>();
      
      int id = admDao.getCltDataId();
      
      try {
         int add = admDao.addCltData(obj);
         
         if (add > 0) {
            result.put("RESULT", "1");
            result.put("MSG", "등록이 완료되었습니다.");
         } else {
            result.put("RESULT", "0");
            result.put("MSG", "소장자료를 등록하던 도중 오류가 발생하였습니다.");
            
            return result;
         }
         
         String filePath = "/var/webapps/upload/cltData/" + id + "/kr/";
         
         if(mRequest.getFiles("imgKr") != null && mRequest.getFiles("imgKr").size() > 0){
            List<MultipartFile> mf = mRequest.getFiles("imgKr");
            
            File file = new File(filePath);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               String random = UUID.randomUUID().toString();
               Date today = new Date();
               SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                
               String originalfilename = mf.get(0).getOriginalFilename();
               int pos = originalfilename.lastIndexOf(".");
               String ext = originalfilename.substring(pos+1);
                
               String saveFileName = random + date.format(today) + "."+ ext;
               
               int fileSize = (int) mf.get(0).getSize();
                  
               file = new File(filePath + saveFileName);
               mf.get(0).transferTo(file);
                 
               FileVO fVo = new FileVO();
                
               fVo.setID(Integer.toString(id));
               fVo.setFILE_NAME(originalfilename);
               fVo.setFILE_SAVE_NAME(saveFileName);
               fVo.setSVPATH(filePath+saveFileName);
               fVo.setFILURL("/cltData/" + id + "/kr/" + saveFileName);
               fVo.setCUSER(obj.get("USRCD").toString());
               fVo.setLANG("kr");
               
               int addFile = fileDao.addCltDataFile(fVo);
                
               if(addFile == 0) {
                  result.put("RESULT", -1);
                  result.put("MSG", "파일 저장 실패");
                  return result;
               } 
            }
         }
         
         /*String filePath2 = "/var/webapps/upload/cltData/" + id + "/jp/";
         
         if(mRequest.getFiles("imgJp") != null && mRequest.getFiles("imgJp").size() > 0){
            List<MultipartFile> mf = mRequest.getFiles("imgJp");
            
            File file = new File(filePath2);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               String random = UUID.randomUUID().toString();
               Date today = new Date();
               SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                
               String originalfilename = mf.get(0).getOriginalFilename();
               int pos = originalfilename.lastIndexOf(".");
               String ext = originalfilename.substring(pos+1);
                
               String saveFileName = random + date.format(today) + "."+ ext;
               
               int fileSize = (int) mf.get(0).getSize();
                  
               file = new File(filePath2 + saveFileName);
               mf.get(0).transferTo(file);
                
               FileVO fVo = new FileVO();
                
               fVo.setID(Integer.toString(id));
               fVo.setFILE_NAME(originalfilename);
               fVo.setFILE_SAVE_NAME(saveFileName);
               fVo.setSVPATH(filePath2+saveFileName);
               fVo.setFILURL("/cltData/" + id + "/jp/" + saveFileName);
               fVo.setCUSER(obj.get("USRCD").toString());
               fVo.setLANG("jp");
               
               int addFile = fileDao.addCltDataFile(fVo);
                
               if(addFile == 0) {
                  result.put("RESULT", -1);
                  result.put("MSG", "파일 저장 실패");
                  return result;
               } 
            }
         }
         
         String filePath3 = "/var/webapps/upload/cltData/" + id + "/en/";
         
         if(mRequest.getFiles("imgEn") != null && mRequest.getFiles("imgEn").size() > 0){
            List<MultipartFile> mf = mRequest.getFiles("imgEn");
            
            File file = new File(filePath3);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               
               for (int i=0;i<mf.size(); i++) {
                  String random = UUID.randomUUID().toString();
                  Date today = new Date();
                  SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                   
                  String originalfilename = mf.get(i).getOriginalFilename();
                  int pos = originalfilename.lastIndexOf(".");
                  String ext = originalfilename.substring(pos+1);
                   
                  String saveFileName = random + date.format(today) + "."+ ext;
                  
                  int fileSize = (int) mf.get(i).getSize();
                     
                  file = new File(filePath3 + saveFileName);
                  mf.get(0).transferTo(file);
                   
                  FileVO fVo = new FileVO();
                   
                  fVo.setID(Integer.toString(id));
                  fVo.setFILE_NAME(originalfilename);
                  fVo.setFILE_SAVE_NAME(saveFileName);
                  fVo.setSVPATH(filePath3+saveFileName);
                  fVo.setFILURL("/cltData/" + id + "/en/" + saveFileName);
                  fVo.setCUSER(obj.get("USRCD").toString());
                  fVo.setLANG("en"); 
                  
                  int addFile = fileDao.addCltDataFile(fVo);
                   
                  if(addFile == 0) {
                     result.put("RESULT", -1);
                     result.put("MSG", "파일 저장 실패");
                     return result;
                  } 
               }
            }
         } */
         
      } catch (SocketException e) {
         e.printStackTrace();
      } catch (IOException e) {
         e.printStackTrace();
      } catch (Exception e) {
         e.printStackTrace();
      }
      
      return result;
   }

   @Override
   public List<Map<String, Object>> getCltDataList(CollectDataVO vo) {
      return admDao.getCltDataList(vo);
   }

   @Override
   public Map<String, Object> getCltDataDtl(CollectDataVO vo) {
      return admDao.getCltDataDtl(vo);
   }

   @Override
   public Map<String, Object> udtCltData(JSONObject obj, MultipartHttpServletRequest mRequest) {
      Map<String, Object> result = new HashMap<String,Object>();
      
      int id = Integer.parseInt(obj.get("ID").toString());
      
      try {
         int add = admDao.udtCltData(obj);
         
         if (add > 0) {
            result.put("RESULT", "1");
            result.put("MSG", "수정이 완료되었습니다.");
         } else {
            result.put("RESULT", "0");
            result.put("MSG", "소장 데이터를 수정하던 도중 오류가 발생하였습니다.");
            
            return result;
         }
         
         String filePath = "/var/webapps/upload/cltData/" + id + "/kr/";
         
         if(!mRequest.getFiles("imgKr").isEmpty() && mRequest.getFiles("imgKr").size() > 0){
            obj.put("LANG", "kr");
            Map<String, Object> info = fileDao.getFileInfoData(obj);
            
            if(info != null) {
               File files = new File(info.get("SVPATH").toString());
               
               if(files.exists()) {
                  if(files.delete()) {
                     System.out.println("파일삭제 성공");
                     fileDao.delCltDataFile(obj);
                  }else {
                     System.out.println("파일삭제 실패");
                  }
               }else {
                  System.out.println("파일이 존재하지 않습니다.");
               }
            }
            
            List<MultipartFile> mf = mRequest.getFiles("imgKr");
            
            File file = new File(filePath);
            if(file.exists() == false) {
               file.mkdirs();
            }
            
            if(!mf.get(0).getOriginalFilename().equals("") && mf.get(0).getSize() > 0) {
               String random = UUID.randomUUID().toString();
               Date today = new Date();
               SimpleDateFormat date = new SimpleDateFormat("yyMMddhhss");
                
               String originalfilename = mf.get(0).getOriginalFilename();
               int pos = originalfilename.lastIndexOf(".");
               String ext = originalfilename.substring(pos+1);
                
               String saveFileName = random + date.format(today) + "."+ ext;
               
               int fileSize = (int) mf.get(0).getSize();
                  
               file = new File(filePath + saveFileName);
               mf.get(0).transferTo(file);
                 
               FileVO fVo = new FileVO();
                
               fVo.setID(Integer.toString(id));
               fVo.setFILE_NAME(originalfilename);
               fVo.setFILE_SAVE_NAME(saveFileName);
               fVo.setSVPATH(filePath+saveFileName);
               fVo.setFILURL("/cltData/" + id + "/kr/" + saveFileName);
               fVo.setCUSER(obj.get("USRCD").toString());
               fVo.setLANG("kr");
               
               int addFile = fileDao.addCltDataFile(fVo);
                
               if(addFile == 0) {
                  result.put("RESULT", -1);
                  result.put("MSG", "파일 저장 실패");
                  return result;
               } 
            }
         }
         
      } catch (SocketException e) {
         e.printStackTrace();
      } catch (IOException e) {
         e.printStackTrace();
      } catch (Exception e) {
         e.printStackTrace();
      }
      
      return result;
   }

   @Override
   public Map<String, Object> delIlbook(String id) {
      Map<String, Object> result = new HashMap<>();
      int del = admDao.delIlbook(id);
      if(del > 0) {
         result.put("RST", 1);
         result.put("MSG", "성공적으로 삭제하였습니다.");
      } else {
         result.put("RST", 0);
         result.put("MSG", "오류가 발생하여 삭제를 실패하였습니다.");
      }
      return result;
   }
}