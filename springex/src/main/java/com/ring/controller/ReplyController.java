package com.ring.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ring.model.ReplyVO;
import com.ring.service.ReplyService;

@Controller
public class ReplyController {
	
	@Autowired
	ReplyService rs;
	//댓글쓰기
	@RequestMapping(value="/replies/new", method=RequestMethod.POST)
	public ResponseEntity<String>	replywrite(@RequestBody ReplyVO reply){
								//return값 넣어줘야 빨간줄 사라짐
		//insert가 성공했으면 result변수에 1 저장
		//insert가 실패했으면 result변수에 0저장
		int result = rs.rewrite(reply); //다음 MVC패턴 호출
		
		System.out.println(reply);	// 확인용으로 console창 출력
		//result가 1이면 HttpStatus.OK
		//result가 0이면 HttpStatus.INTERNAL_SERVER_ERROR
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	//댓글 목록 리스트
	@RequestMapping(value="/replies/{bno}", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<ReplyVO>> getList(@PathVariable int bno){
		System.out.println(bno);
		
		//rs.list(bno); (중복방지)
		
		return new ResponseEntity<>(rs.list(bno),HttpStatus.OK);
		
	}

	//댓글 수정
	@ResponseBody
	@RequestMapping(value="/replies/modify", method=RequestMethod.PUT)
	public ResponseEntity<String> replymodify(@RequestBody ReplyVO reply){
		System.out.println(reply);
		//update가 성공했으면 result변수에 1 저장
		//update가 실패했으면 result변수에 0저장
		int result = rs.modify(reply);
		
		//result가 1이면 HttpStatus.OK
		//result가 0이면 HttpStatus.INTERNAL_SERVER_ERROR
//		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
//						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}	
	
	//댓글삭제
	@RequestMapping(value="/replies/remove/{rno}", method=RequestMethod.DELETE)
	public ResponseEntity<String> replyremove(@PathVariable int rno){
		System.out.println("삭제="+rno);	
		int result = rs.remove(rno);
		
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

	}
	
	
	
}
