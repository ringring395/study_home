package com.ring.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ring.model.AttachFileVO;
import com.ring.model.BoardVO;
import com.ring.model.CriteriaVO;
import com.ring.model.PageVO;
import com.ring.service.BoardService;

//controller역할을 부여해주자 @활용
@Controller
public class BoardController {
	
	@Autowired
	BoardService bs;

	//게시판 글쓰기 페이지(화면)
	@RequestMapping(value = "/board/write", method = RequestMethod.GET)
	public String write() {
		return "board/write";
	}
	//게시판 글쓰기 페이지(insert이루어짐)
	@RequestMapping(value = "/board/write", method = RequestMethod.POST)
	public String writePost(BoardVO board, HttpSession session) {
		String id = (String)session.getAttribute("id");
		board.setId(id);
		System.out.println("로그인된아이디 : "+id);
		System.out.println(board);
		//비즈니스 영역 연결 한후, BoardService에 있는 write 메소드
		bs.write(board);
		return "redirect:/board/list";
	}
	//해당 게시물의 첨부파일의 데이터를 ajax로 전송
	@RequestMapping(value = "/attachlist", method = RequestMethod.GET)
	public ResponseEntity<ArrayList<AttachFileVO>> uploadAjaxPost(int bno) {
		//					통신상태 정상이면 select된 결과를 uploadAjaxPost보내라.
		return new ResponseEntity<>(bs.attachlist(bno),HttpStatus.OK);
	}
	
	
	//게시판 목록 리스트
	@RequestMapping(value = "/board/list", method = RequestMethod.GET)
	public String list(BoardVO board, HttpSession session, Model model, CriteriaVO cri) {
		String id = (String)session.getAttribute("id");
		board.setId(id);
		//boardlist.jsp를 실행할때 select된 결과를 가져와라.
		//list.jsp의 ${list}로 연결됨
		model.addAttribute("list", bs.list(cri));
		//list.jsp 실행 할때 PageVO에 저장되어 있는 데이터를 가져와라.
		//					(매개변수가 없는 기본)생성자 호출
		//list.jsp의 ${paging}으로 연결됨
		//model.addAttribute("paging", new PageVO(cri, 300));
		//board(게시판) 테이블의 전체 건수를 select해서 조회해옴.
		int total = bs.total(cri);
		model.addAttribute("paging", new PageVO(cri, total));
		//board폴더 안에 있는 boardlist.jsp 실행
		return "board/list";
	}
	
	//게시판 상세 페이지
	@RequestMapping(value = "/board/detail", method = RequestMethod.GET)
	//public String detail(int bno)
	public String detail(BoardVO board, HttpSession session, Model model) {
		String id = (String)session.getAttribute("id");
		board.setId(id);
		//bs.detail(bno);
		model.addAttribute("detail", bs.detail(board));
		String result = "";
		if(id != null) {	//로그인된 아이디가 있으면 상세페이지 가고,
			result = "board/detail";
		}else {				//로그인된 아이디 없으면 로그인페이지로 가시오.
			result = "member/login";
		}
		return result;
	}	
	
	//게시판 수정 페이지(update이루어짐)
	@RequestMapping(value = "/board/modify", method = RequestMethod.POST)
									//redirect값을 실어서 보내는 변수 선언
	public String modify(BoardVO board, RedirectAttributes rttr) {
		bs.modify(board);
		//값을 가져오도록 함
		rttr.addAttribute("bno", board.getBno());
		//boarddetail.jsp에서 수정된 결과를 확인하기 위한 화면이동
		return "redirect:/board/detail";

	}
	//게시판 삭제 페이지(delete이루어짐)
	@RequestMapping(value = "/board/delete", method = RequestMethod.POST)
	public String delete(BoardVO board) {
		bs.delete(board);
		return "redirect:/board/list";
	}
}
