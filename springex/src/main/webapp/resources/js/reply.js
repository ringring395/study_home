/**
 * 댓글 기능
 */

$(document).ready(function(){	//jQuery 준비
	//함수 호출
	//detail.jsp가 시작되자마자 bno값을 가져오려면 $(document).ready아래에 선언
	var bnoValue = $("input[name='bno']").val();
	
	//detail.jsp가 시작되자마자 댓글목록리스트(list) 함수를  호출
	list(bnoValue);
	
	//댓글 등록 버튼을 클릭하면 
	$("#add").on("click",function(){
		//댓글등록 버튼을 클릭했을 때!! : 댓글내용 가져오려면 $("#add").on("click",function(){ 아래에 선언
		var replyValue = $("#reply").val();
		
		var idValue = $("#id").val();	//임의로 id입력해둠, 세션값으로 받아오면됨
		add({bno:bnoValue,reply:replyValue,id:idValue});	//댓글 쓰기를 하기 위한 함수 호출
	})
	
	//댓글 수정버튼을 클릭하면
	//이미 존재하는 태그에 이벤트를 처리하고
	//나중에 동적으로 생기는 태그들에 대해서 파라미터 형식으로 지정(이벤트 델리게이션)
	$("#chat").on("click",".update", function(){
		//댓글번호와 댓글내용을 수집해서
		var rno=$(this).data("rno");
		//var reply=$(this).data("reply");
		var reply=$("#replycontent"+rno).val();
		var idValue = $("#id").val();			//같은 id가 쓴 댓글만 수정하려면 id값이 필요함
		//댓글 수정 하기 위한 함수 호출(댓글번호, 댓글내용)
		modify({rno:rno,reply:reply,id:idValue});
	})
	
	//댓글 삭제버튼을 클릭하면
	$("#chat").on("click",".remove", function(){
		//댓글번호만 수집해서
		var rno = $(this).data("rno");
		var idValue = $("#id").val();			//같은 id가 쓴 댓글만 삭제하려면 id값이 필요함
		//console.log(rno);
		//댓글삭제를 하기 위한 함수 호출(댓글번호)
		//remove({rno:rno}) : JSON타입 
		remove({rno:rno,id:idValue});
	})
})

//함수 선언
function remove(rno){
	console.log(rno);
	$.ajax({			//ajax준비 (비동기식 처리)
		type:"delete",	//method방식(get,post,put,delete)
		url:"/replies/remove/"+rno,
		success:function(result){
			if(result=="success"){
				alert("댓글삭제 성공 'ㅅ' ");				
			}	
		}
	})	
}

function modify(reply){
	console.log(reply)
	$.ajax({			//ajax준비 (비동기식 처리)
		type:"put",	//method방식(get,post,put,delete)
		url:"/replies/modify",
		data:JSON.stringify(reply), 
		//js이 값을 ajax에서 필요한 형태로 바꾸는 함수
		//contentType 생략하면 웹브라우저에 위임하게됨
		contentType:"application/json; charset=utf-8",	//입력되는 데이터의 형식
		success:function(result){
			if(result=="success"){
				alert("댓글수정 성공 'ㅅ' ");				
			}	
		}
	})
}



function list(bno){	//list함수 선언 시작
	//alert(bno);
	$.getJSON("/replies/"+bno+".json",function(data){
		
		console.log(data)
		var str="";
		str+="<tr><th colspan='4'>⭐댓글리스트⭐</th></tr>"
		str+="<tr><th>id</th><th>댓글내용</th><th colspan='2'>댓글작성일자</th></tr>"
		for(var i=0; i<data.length; i++){
			str+="<tr><td>"+data[i].id+"</td>"
			str+="<td><textarea id='replycontent"+data[i].rno+"'>"+data[i].reply+"</textarea></td>"
			str+="<td>"+data[i].replydate+"</td>"
			str+="<td><input class='update' type='button' value='수정' data-rno="+data[i].rno+" data-reply='"+data[i].reply+"'>"
			str+="<input class='remove' type='button' value='삭제' data-rno="+data[i].rno+"></td></tr>"
		}
		$("#replyTable").html(str);
	});
}//list함수 선언 끝

//댓글 쓰기를 위한 함수
function add(reply){	//add함수 선언 시작
	$.ajax({			//ajax준비 (비동기식 처리)
		type:"post",	//method방식(get,post,put,delete)
		url:"/replies/new",
		data:JSON.stringify(reply), //js이 값을 ajax에서 필요한 형태로 바꾸는 함수
		//contentType 생략하면 웹브라우저에 위임하게됨
		contentType:"application/json; charset=utf-8",	//입력되는 데이터의 형식
		success:function(result){
			if(result=="success"){
				alert("댓글쓰기 성공 'ㅅ' ");				
			}			
		}
	})
}//add 함수 선언 끝
