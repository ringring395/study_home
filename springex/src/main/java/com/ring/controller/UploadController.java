package com.ring.controller;

import java.io.File;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class UploadController {
	@RequestMapping(value = "/uploadForm", method = RequestMethod.GET)
	public void uploadForm() {
		
	}
	
	@RequestMapping(value = "/uploadFormAction", method = RequestMethod.POST)
	public void uploadFormPost(MultipartFile[] uploadFile) {
		//폴더 경로
		String uploadFolder="D:\\01-STUDY\\upload";
		
		//for(변수명:배열명)
		for(MultipartFile multiparFile : uploadFile) {
			System.out.println(multiparFile.getOriginalFilename());
			System.out.println(multiparFile.getSize());
			
			//파일 저장					어느 폴더에,	어떤 파일이름으로
			File saveFile = new File(uploadFolder,multiparFile.getOriginalFilename());
			
			//						내가 지정한 폴더에 선택한 파일을 전송(transferTo)
			try {//transferTo() 메소드에 예외가 있으면
				multiparFile.transferTo(saveFile);
			}catch(Exception e) {//예외를 처리하라
				System.out.println(e.getMessage());
			}			
		}	
	}
	
	@RequestMapping(value = "/uploadAjax", method = RequestMethod.GET)
	public void uploadAjax() {
		
	}
	
	@RequestMapping(value = "/uploadAjaxAction", method = RequestMethod.POST)
	public void uploadAjaxPost(MultipartFile[] uploadFile) {
		//폴더 경로
		String uploadFolder="D:\\01-STUDY\\upload";
		
		//for(변수명:배열명)
		for(MultipartFile multiparFile : uploadFile) {
			System.out.println(multiparFile.getOriginalFilename());
			System.out.println(multiparFile.getSize());
			
			//파일 저장					어느 폴더에,	어떤 파일이름으로
			File saveFile = new File(uploadFolder,multiparFile.getOriginalFilename());
			
			//						내가 지정한 폴더에 선택한 파일을 전송(transferTo)
			try {//transferTo() 메소드에 예외가 있으면
				multiparFile.transferTo(saveFile);
			}catch(Exception e) {//예외를 처리하라
				System.out.println(e.getMessage());
			}			
		}//for문 닫음	
	}//uploadAjaxPost닫음
}
