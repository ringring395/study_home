/**
 * 첨부파일 관련
 */

$(document).ready(function(){
	//detail.jsp가 시작되자마자(ready이벤트) bno값 가져와야함
	var bno = $("input[name='bno']").val();
	//alert(bno);
	
	//									콜백함수
	$.getJSON("/attachlist",{bno:bno},function(attachlist){
		console.log(attachlist)
		
		
		var str="";
		$(attachlist).each(function(i,attach){
			
			
			//만약 image면
			if(attach.image){
				var filePath = encodeURIComponent(attach.uploadPath+"/s_"+attach.uuid+"_"+attach.fileName)
				console.log(filePath)
				//src="/display?fileName='filePath'"
				str+="<tr><td><img src='/display?fileName="+filePath+"'>"+attach.fileName+"</td><tr>"
			}else{	//image가 아니면
				var filePath = encodeURIComponent(attach.uploadPath+"/"+attach.uuid+"_"+attach.fileName)
				str+="<tr><td><a href='/download?fileName="+filePath+"'>"+attach.fileName+"</td></tr>"				
			}
						
		})
		$("#uploadResult table").html(str);
		
		
		
	})//getJSON닫음
})