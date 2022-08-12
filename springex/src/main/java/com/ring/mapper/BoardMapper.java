package com.ring.mapper;

import java.util.ArrayList;

import com.ring.model.BoardVO;

public interface BoardMapper {
	//글쓰기에 해당되는 DB작업 설계
	public void write(BoardVO board);
	//게시글 목록 리스트에 해당되는 DB작업 설계
			//xml의 id랑 메소드명을 일치시킨다.
	public ArrayList<BoardVO> list();
	//목록리스트에서 제목을 클릭한 후, 상세내용을 조회하는 DB작업
	public BoardVO detail(BoardVO board);
	//상세내용에 해당되는 내용을 수정하는 DB작업
	public void modify(BoardVO board);
	//상세내용에 해당되는 내용을 삭제하는 DB작업
	public void delete(BoardVO board);
}
