package com.ring.mapper;

import com.ring.model.ReplyVO;

//댓글 관련 mapper
public interface ReplyMapper {
	//댓글 쓰기를 위한 구현
	//return타입이 int일때, 1이면 insert성공
	//					 0이면 insert실패
	public int rewrite(ReplyVO reply);

}
