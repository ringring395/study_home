package com.ring.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ring.mapper.BoardAttachMapper;
import com.ring.mapper.BoardMapper;
import com.ring.model.AttachFileVO;
import com.ring.model.BoardVO;
import com.ring.model.CriteriaVO;

@Service					
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	BoardMapper bm;	//board테이블 mapper
	@Autowired
	BoardAttachMapper bam;//attach테이블 mapper
	
	//BoardService에서 설계되어진 write 추상메소드를 구현
	public void write(BoardVO board) {
		//BoardMapper에 있는 write메소드 호출
		//메소드의 매개변수를 통해 BoardVO값을 
		//BoardMapper의 write메소드로 전달
		System.out.println("service="+board);
		bm.write(board);
		
		//boardVO의 getAttach를 통해서 하나씩 넣음 : 배열이므로.
		board.getAttach().forEach(attach->{
			//BoardVO의 bno를 가져와서 AttachFileVO의 bno에 넣어라.
			attach.setBno(board.getBno());
			bam.insert(attach);
		});
		
	}
	//BoardService에서 설계되어진 list추상메소드
	public ArrayList<BoardVO> list(CriteriaVO cri) {
		return bm.list(cri);
	}
	
	@Transactional
	public BoardVO detail(BoardVO board) {
		//상세페이지 조회할 때
		// 조회수+1 update
		bm.cntup(board);
		return bm.detail(board);
	}
	
	public void modify(BoardVO board) {
		bm.modify(board);
	}
	//Boardservice에 설계된 delete 추상메소드를 구현
	public void delete(BoardVO board) {
		bm.delete(board);
	}
	//board테이블 전체 건수 조회
	public int total(CriteriaVO cri) {
		return bm.total(cri);
	}
	
	//첨부파일 구현
	public ArrayList<AttachFileVO> attachlist (int bno){
		return bam.attachlist(bno);
	}

}
