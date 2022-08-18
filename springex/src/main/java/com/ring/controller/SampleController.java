package com.ring.controller;

import java.util.Locale;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ring.model.SampleVO;

@Controller
public class SampleController {
	//비동기식은 동기식과는 달리 jsp가 없으므로, 
	//순수한 데이터(주로 많이 사용되는 형태는 문자열, JSON, XML)를 반환
	//기존 controller에서는 문자열을 반환하는 경우 jsp 파일의 이름으로 처리하지만
	//비동기식 controller의 경우엔, 순수한 데이터를 처리함.
	//이때 메소드의 리턴타입이 ResponseEntity 객체이면 비동기식으로 처리함
	@RequestMapping(value = "/Sample/getText", produces="text/plain; charset=UTF-8", method = RequestMethod.GET)
	public ResponseEntity<String> home(Locale locale, Model model) {
		//jsp가 있는게 아니라 화면에 그냥 출력하게됨
		return new ResponseEntity<>("안녕하세요요요요",HttpStatus.OK);
	}
	// 객체
	@RequestMapping(value = "/Sample/getSample", method = RequestMethod.GET)
	public ResponseEntity<SampleVO> getSample(){
		SampleVO sample = new SampleVO();
		sample.setNo(1);
		sample.setName("강호동");
		sample.setGender("남");
		
		ResponseEntity<SampleVO> result=null;
		result=ResponseEntity.status(HttpStatus.OK).body(sample);
		
		return result;
	}
	
	@RequestMapping(value="Sample/getSample1", method=RequestMethod.POST)
	public ResponseEntity<SampleVO> getSample1(@RequestBody SampleVO sample){
		System.out.println("samplevo data...."+sample);
		
		ResponseEntity<SampleVO> result=null;
		result=ResponseEntity.status(HttpStatus.OK).body(sample);
		
		return result;
	}
		
}
