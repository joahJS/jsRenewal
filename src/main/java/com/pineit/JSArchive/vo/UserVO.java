package com.pineit.JSArchive.vo;

public class UserVO {
	private int USRCD;      // 사용자CD
	private String USRID;   // 사용자ID
	private String USRNM;   // 사용자명
	private String PASSWD;  // 패스워드
	private String AUTH;	// 회원구분
	
	public int getUSRCD() {
		return USRCD;
	}
	public void setUSRCD(int uSRCD) {
		USRCD = uSRCD;
	}
	public String getUSRID() {
		return USRID;
	}
	public void setUSRID(String uSRID) {
		USRID = uSRID;
	}
	public String getUSRNM() {
		return USRNM;
	}
	public void setUSRNM(String uSRNM) {
		USRNM = uSRNM;
	}
	public String getPASSWD() {
		return PASSWD;
	}
	public void setPASSWD(String pASSWD) {
		PASSWD = pASSWD;
	}
	public String getAUTH() {
		return AUTH;
	}
	public void setAUTH(String aUTH) {
		AUTH = aUTH;
	}
}
