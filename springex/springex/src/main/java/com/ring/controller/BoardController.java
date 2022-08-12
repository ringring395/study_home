package com.ring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ring.model.BoardVO;
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
	public String writePost(BoardVO board) {
		//비즈니스 영역 연결 한후, BoardService에 있는 write 메소드
		bs.write(board);
		return "redirect:/board/list";
	}
	//게시판 목록 리스트
	@RequestMapping(value = "/board/list", method = RequestMethod.GET)
	public String list(Model model) {
		//boardlist.jsp를 실행할때 select된 결과를 가져가라.
		model.addAttribute("list", bs.list());
		//board폴더 안에 있는 boardlist.jsp 실행
		return "board/list";
	}
	
	//게시판 상세 페이지
	@RequestMapping(value = "/board/detail", method = RequestMethod.GET)
	//public String detail(int bno)
	public String detail(BoardVO board, Model model) {
		//bs.detail(bno);
		bs.detail(board);	//select된 결과 도착
		model.addAttribute("detail", bs.detail(board));
		return "board/detail";
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
