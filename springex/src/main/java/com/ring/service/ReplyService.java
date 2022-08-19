package com.ring.service;

import com.ring.model.ReplyVO;

//댓글 관련 서비스
public interface ReplyService {
	//댓글 쓰기를 위한 설계
	public int rewrite(ReplyVO reply);

}
