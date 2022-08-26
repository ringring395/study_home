package com.ring.mapper;

import java.util.ArrayList;

import com.ring.model.AttachFileVO;

public interface BoardAttachMapper {
	
	//글쓰기 파일 업로드에 해당되는 DB작업 설계
	public void insert(AttachFileVO attach);
	
	//상세페이지의 첨부파일 조회하는 DB작업 설계
	public ArrayList<AttachFileVO> attachlist(int bno);

}
