package com.ring.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ring.mapper.MemberMapper;
import com.ring.model.MemberVO;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	MemberMapper mm;
	//로그인
	public void login(MemberVO member) {
		System.out.println("로그인"+member);
		mm.login(member);
	}
	
	//회원가입
	public void signup(MemberVO member) {
		System.out.println("회원가입 "+member);
		mm.signup(member);		
	}
	//회원정보리스트
	public ArrayList<MemberVO> memberlist(){
		return mm.memberlist();
	}
	//회원상세내용보기/로그인(+session)
	public MemberVO memberdetail(MemberVO member) {
		return mm.memberdetail(member);
	}
	//회원정보수정(개명,비밀번호변경
	public void membermodify(MemberVO member) {
		mm.membermodify(member);
	}
	//회원탈퇴
	public void resign(MemberVO member) {
		mm.resign(member);
	}

}
