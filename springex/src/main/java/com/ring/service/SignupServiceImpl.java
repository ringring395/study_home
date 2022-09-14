package com.ring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ring.mapper.SignupMapper;
import com.ring.model.SignupVO;

@Service
public class SignupServiceImpl implements SignupService{
	
	@Autowired
	SignupMapper sm;
	
	//회원가입 평가
	public void Signup(SignupVO signup) {
		System.out.println("회원가입평가"+signup);
		sm.Signup(signup);
	}

}
