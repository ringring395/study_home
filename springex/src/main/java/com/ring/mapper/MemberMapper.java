package com.ring.mapper;

import java.util.ArrayList;
import com.ring.model.MemberVO;

public interface MemberMapper {
	//로그인
	public void login(MemberVO member);
	//회원가입
	public void signup(MemberVO member);
	//회원 리스트
	public ArrayList<MemberVO> memberlist();
	//회원 정보 상세페이지
	public MemberVO memberdetail(MemberVO member);
	//회원 정보 수정
	public void membermodify(MemberVO member);
	//회원 탈퇴
	public void resign(MemberVO member);
}
