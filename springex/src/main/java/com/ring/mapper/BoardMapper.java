package com.ring.mapper;

import java.util.ArrayList;

import com.ring.model.BoardVO;
import com.ring.model.CriteriaVO;
import com.ring.model.LikeVO;

public interface BoardMapper {
	//글쓰기에 해당되는 DB작업 설계
	public void write(BoardVO board);
	
	//게시글 목록 리스트에 해당되는 DB작업 설계
			//xml의 id랑 메소드명을 일치시킨다.
	public ArrayList<BoardVO> list(CriteriaVO cri);
	
	//목록리스트에서 제목을 클릭한 후, 상세내용을 조회하는 DB작업
	public BoardVO detail(BoardVO board);
	
	//목록리스트에서 제목 클릭해서 상세내용 조회할때 조회수 +1 update하는 DB작업
	public void cntup(BoardVO board);
	
	//상세내용에 해당되는 내용을 수정하는 DB작업
	public void modify(BoardVO board);
	
	//상세내용에 해당되는 내용을 삭제하는 DB작업
	public void delete(BoardVO board);
	
	//board테이블의 전체 건수를 조회하는 DB작업
	public int total(CriteriaVO cri);
	
	//좋아요 테이블에 해당되는 내용을 조회하는 DB작업 설계
	public ArrayList<LikeVO> mylike(LikeVO like);
	
	//좋아요 카운트를 조절하는 DB작업
	public ArrayList<LikeVO> likeChk(int bno);
	
	//좋아요 등록(꽉찬하트)를 위한 DB작업
	public int likeUp(LikeVO like);
	
	//좋아요 취소(빈하트)를 위한 DB작업
	public int likeDown(LikeVO like);
}
