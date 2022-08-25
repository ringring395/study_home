package com.ring.model;

import java.util.ArrayList;

public class BoardVO {
	//MySQL의 board테이블
	//게시판번호 bno
	private int bno;
	//제목 title
	private String title;
	//내용 content
	private String content;
	//작성일자 regdate
	private String regdate;
	//조회수 count
	private int count;
	//id
	private String id;
	
	//AttachFileVO(파일 업로드 관련 Model), 배열
	private ArrayList<AttachFileVO> attach;
			
	//getter&setter 메소드
	public int getBno() {
		return bno;
	}
	public void setBno(int bno) {
		this.bno = bno;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	//AttachFileVO의 getter&setter
	public ArrayList<AttachFileVO> getAttach() {
		return attach;
	}
	public void setAttach(ArrayList<AttachFileVO> attach) {
		this.attach = attach;
	}
	//toString() : AttachFileVO 추가
	@Override
	public String toString() {
		return "BoardVO [bno=" + bno + ", title=" + title + ", content=" + content + ", regdate=" + regdate + ", count="
				+ count + ", id=" + id + ", attach=" + attach + "]";
	}
	
}
