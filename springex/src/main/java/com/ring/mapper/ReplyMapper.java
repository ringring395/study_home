package com.ring.mapper;

import java.util.ArrayList;

import com.ring.model.ReplyVO;

//댓글 관련 mapper
public interface ReplyMapper {
	//댓글 쓰기를 위한  DB작업
	//return타입이 int일때, 1이면 insert성공
	//					 0이면 insert실패
	public int rewrite(ReplyVO reply);
	//댓글 목록 리스트를 위한 DB작업
	public ArrayList<ReplyVO> list(int bno);
	
	//댓글 수정을 위한 DB작업
	public int modify(ReplyVO reply);
	
	//댓글 삭제를 위한 DB작업
	public int remove(int rno);

}
