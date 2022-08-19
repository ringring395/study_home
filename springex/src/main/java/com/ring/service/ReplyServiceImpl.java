package com.ring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ring.mapper.ReplyMapper;
import com.ring.model.ReplyVO;

@Service
public class ReplyServiceImpl implements ReplyService{
	
	@Autowired
	ReplyMapper rm;
	
	//댓글 쓰기를 위한 구현
	public int rewrite(ReplyVO reply) {
		return rm.rewrite(reply);
	}

}
