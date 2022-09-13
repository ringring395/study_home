package com.ring.service;

import java.util.ArrayList;

import com.ring.model.AttachFileVO;
import com.ring.model.BoardVO;
import com.ring.model.CriteriaVO;
import com.ring.model.LikeVO;

public interface BoardService {
	//글쓰기 설계		(﻿BoardVO : 게시판정보 + 파일업로드 정보)
	public void write(BoardVO board);
	
	//글 목록 리스트 설계
	public ArrayList<BoardVO> list(CriteriaVO cri);
	
	//글 상세 내용 보기 설계
	public BoardVO detail(BoardVO board);
	
	//글 수정 설계
	public void modify(BoardVO board);
	
	//글 삭제 설계
	public void delete(BoardVO board);
	
	//board테이블 전체 건수 설계
	public int total(CriteriaVO cri);
	
	//첨부파일 조회 설계
	public ArrayList<AttachFileVO> attachlist(int bno);
	
	//좋아요 전체 테이블 조회 설계
	public ArrayList<LikeVO> mylike(LikeVO like);
}
