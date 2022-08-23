/**
 * uploadAjax 파일입니다.
 */

$(document).ready(function(){
	
	/** 4. 첨부파일 공격에 대비하기 위한 업로드 파일 확장자 제한
	 * ﻿& 특정 크기 이상의 파일 업로드 제한
	 */
	//함수 선언
	//정규식을 이용하여 확장자 제한
	var reg = new RegExp("(.*?)\.(exe|zip|alz|js)$")
	//최대 업로드 크기를 설정하여 그 이상이면 제한
	var maxSize=5242880;	//5MB
	//					파일이름, 파일크기
	function checkExtension(fileName, fileSize){
		//파일크기 제한
		//실제 파일의 크기 > 최대 업로드 가능 크기
		if(fileSize > maxSize){
			alert("파일 사이즈 초과");
			return false;
		}
		//확장자 제한
		//실제 파일명의 확장자와 정규식 비교
		if(reg.test(fileName)){
			alert("해당 종류의 파일은 업로드 할 수 없습니다.");
			return false;
		}
		return true;
	}//checkExtension 함수 선언 닫음
	
	
	
	// 파일 전송 버튼(id="uploadBtn")을 클릭하면
	$("#uploadBtn").on("click",function(){
		alert("버튼누르면 연결되는지 확인용");
		//파일 업로드 관련 로직 처리
		// .jsp의 form태그를 대체(FormData함수)
		var formData = new FormData();
		
		var inputFile = $("input[name='uploadFile']");
		//console.log(inputFile);
		var files = inputFile[0].files;
		console.log(files);
		
		for(var i=0; i<files.length; i++){
			
			//checkExtension 함수 호출
			if(!checkExtension(files[i].name, files[i].size)){
				return false;
			}
			
			// .jsp의 파일 선택을 통해 선택한 파일들을 formData에 추가
			formData.append("uploadFile", files[i]);
		}
		
		//ajax를 통해 UploadController에 파일 관련 데이터 전송
		$.ajax({
			type:"post",
			url:"/uploadAjaxAction",
			data:formData,
			contentType:false,
			processData:false
		})
		
		
		
		
	})//#uploadBtn닫음
})