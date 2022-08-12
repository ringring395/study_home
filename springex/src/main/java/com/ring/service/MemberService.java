package com.ring.service;

import java.util.ArrayList;

import com.ring.model.MemberVO;

public interface MemberService {
	//로그인
	public void login(MemberVO member);
	//회원가입
	public void signup(MemberVO member);
	//회원정보리스트
	public ArrayList<MemberVO> memberlist();
	//회원상세내용보기/로그인(+session)
	public MemberVO memberdetail(MemberVO member);
	//회원정보수정(개명,비밀번호변경
	public void membermodify(MemberVO member);
	//회원탈퇴
	public void resign(MemberVO member);

}
