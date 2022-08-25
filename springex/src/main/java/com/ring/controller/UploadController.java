package com.ring.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import com.ring.model.AttachFileVO;

import net.coobird.thumbnailator.Thumbnailator;

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
		for(MultipartFile multipartFile : uploadFile) {
			System.out.println(multipartFile.getOriginalFilename());
			System.out.println(multipartFile.getSize());
			
			//파일 저장					어느 폴더에,	어떤 파일이름으로
			File saveFile = new File(uploadFolder,multipartFile.getOriginalFilename());
			
			//						내가 지정한 폴더에 선택한 파일을 전송(transferTo)
			try {//transferTo() 메소드에 예외가 있으면
				multipartFile.transferTo(saveFile);
			}catch(Exception e) {//예외를 처리하라
				System.out.println(e.getMessage());
			}			
		}	
	}
	
	@RequestMapping(value = "/uploadAjax", method = RequestMethod.GET)
	public void uploadAjax() {
		
	}
	
//년,월,일 폴더 생성하는 메소드 선언
	private String getFolder() {
		
		//현재 날짜 : Wed Aug 24 09:23:12 KST 2022
		Date date = new Date();
		System.out.println("No format현재날짜 : "+date);
		//간단날짜형식 : Wed Aug 24 09:23:12 KST 2022 -> 2022-08-24
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		//현재날짜 date와 간단날짜형식 sdf 연결 : 2022-08-24
		String str = sdf.format(date);
		System.out.println("format 적용 현재날짜 : "+str);
		//문자찾아바꾸기 : 2022-08-24 -> 2022\08\24
		return str.replace("-", "\\");
	}
	
	
// 업로드 파일이 이미지 파일인지 아닌지 구분하는 메소드 선언
	//		반환타입	메소드명		타입	변수명
	private boolean checkImageType(File file) {
		// probeContentType(파일 경로) : 파일 경로에 있는 파일 타입을 알아내는 메소드
		try {
			String contentType = Files.probeContentType(file.toPath());
			System.out.println("contentType="+contentType);	
			//파일타입이 image이면 true, 그 외에는 false
			return contentType.startsWith("image");
			
		}catch(IOException e){
			e.printStackTrace();
		}
		return false;
	}
	
	@RequestMapping(value = "/uploadAjaxAction", method = RequestMethod.POST)
	public ResponseEntity<ArrayList<AttachFileVO>> uploadAjaxPost(MultipartFile[] uploadFile) {
		
		//AttachFileVO 클래스 포함 관계로 만들어줌, 다중선택 :배열
		ArrayList<AttachFileVO> list = new ArrayList<>(); 
		
		//폴더 경로
		String uploadFolder="D:\\01-STUDY\\upload";
		//서버 업로드 경로와 getFolder메소드의 날짜 문자열을 결합해 하나의 폴더 생성
		File uploadPath = new File(uploadFolder, getFolder());
		
		//폴더 생성 (D:\\01-STUDY\\upload\\현재날짜)
		if(uploadPath.exists()==false) {	//uploadPath가 존재하지 않으면
			uploadPath.mkdirs();
		}
		
		//for(변수명:배열명)
		for(MultipartFile multipartFile : uploadFile) {
			
			//AttachFileVO클래스의 새로운 주소를 반복적으로 생성하여
			//ArrayList에 저장
			AttachFileVO attachvo = new AttachFileVO();
			
			System.out.println("파일명="+multipartFile.getOriginalFilename());
			System.out.println("파일사이즈="+multipartFile.getSize());
			
			//파일 저장
			//실제 파일명(multipartFile.getOriginalFilename())
			// UUID 적용(UUID_multipartFile.getOriginalFilename())
			UUID uuid = UUID.randomUUID();
			System.out.println("UUID="+uuid.toString());
			
			//AttachFileVO의 uploadPath 변수에 저장() : getFolder 호출
			attachvo.setUploadPath(getFolder());
			//AttachFileVO의 fileName 변수에 저장() : 실제 파일 이름
			attachvo.setFileName(multipartFile.getOriginalFilename());
			//AttachFileVO의 uuid 변수에 저장()
			attachvo.setUuid(uuid.toString());
			
			
			//					어느 폴더에(D:\\01-STUDY\\upload\\현재날짜),	어떤 파일이름으로(UUID_파일명)
			File saveFile = new File(uploadPath,uuid.toString()+"_"+multipartFile.getOriginalFilename());
			
			//						내가 지정한 폴더에 선택한 파일을 전송(transferTo)
			try {//transferTo() 메소드에 예외가 있으면
				multipartFile.transferTo(saveFile);	//서버로 원본 파일 전송
				// 서버에 올리고자 하는 파일이 이미지이면,
				if(checkImageType(saveFile)) {
					
					//AttachFileVO의 image 변수에 저장()
					attachvo.setImage(true);
					
					//파일 생성
					FileOutputStream thumbnail = new FileOutputStream(new File(uploadPath,"s_"+uuid.toString()+"_"+multipartFile.getOriginalFilename()));
					//썸네일 생성	(너비,높이)
					Thumbnailator.createThumbnail(multipartFile.getInputStream(),thumbnail,150,150);
					
					thumbnail.close();				
				}//checkImageType 메소드 닫음
				//AttachFileVO에 저장된 데이터를 배열에 추가 (add메소드)
				list.add(attachvo);
				
			}catch(Exception e) {//예외를 처리하라
				System.out.println(e.getMessage());
			}			
		}//for문 닫음	
		
		return new ResponseEntity<>(list,HttpStatus.OK);
	}//uploadAjaxPost닫음
	
	//이미지 주소 생성
	@RequestMapping(value = "/display", method = RequestMethod.GET)
	public ResponseEntity<byte[]> getFile(String fileName){
		System.out.println(fileName);
		
		File file = new File("D:\\01-STUDY\\upload\\"+fileName);
		
		ResponseEntity<byte[]> result = null;
		//herder가 content-type 파악할수 있다.
		HttpHeaders headers = new HttpHeaders(); 
		try {
			headers.add("Content-Type", Files.probeContentType(file.toPath()));
			result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file),
					headers,HttpStatus.OK);			
		}catch(Exception e){
			e.printStackTrace();
		}		
		return result;
	}//getFile 닫음
	
	//다운로드 주소 생성
	@RequestMapping(value = "/download", method = RequestMethod.GET)
	public ResponseEntity<Resource> downloadFile(String fileName){
		
		Resource resource = new FileSystemResource("D:\\01-STUDY\\upload\\"+fileName);
		
		//다운로드 시 파일의 이름을 처리
		String resourceName = resource.getFilename();
		
		HttpHeaders headers = new HttpHeaders(); 
		try {
			//다운로드 파일이름이 한글일 때, 깨지지 않게 하기 위한 설정			
			headers.add("Content-Disposition", "attachment;filename="
						+new String(resourceName.getBytes("utf-8"),"ISO-8859-1"));
		}catch(Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(resource, headers, HttpStatus.OK);
	}
	
	
	
	
	
	
}
