/**
 * era js파일
 */
$(document).ready(function (){

//버튼을 누르면	
	$("#y2e_btn").on("click", function(){
		//버튼 클릭하면 일단 리셋
		$("#e2y_era").val("");
		$("#e2y_eraNum").val("");
		$("#e2y_age").val("");
		
		//입력한 년도
		var y2e_year = $("#y2e_year").val();
		console.log(y2e_year);
		
		//년도 : 4자리 숫자로 입력
		var y2e_yearChk = /^\d{4}$/;
		if(y2e_yearChk.test(y2e_year)){
			$("#y2e_era").html("");
			//연호 명칭 함수 호출
			y2e(y2e_year);
		}else{
			$("#y2e_era").html("4자리 숫자만 입력 가능합니다.").css("color","red");
		}
	})

//연호 명칭 함수 선언
	function y2e(year){
		//기준년도
		var standard_year;
		
		//레이와
		if(year>2019){
			$("#e2y_era").val("레이와");
			standard_year = 2019;
			era(year, standard_year);			
		}
		//레이와&헤이세이
		else if(year==2019){
			$("#e2y_era").val("레이와1년 / 헤이세이31년");
		}
		//헤이세이
		else if(year>1989 && year<2019){
			$("#e2y_era").val("헤이세이");
			standard_year = 1989;
			era(year, standard_year);	
		}	
		//헤이세이&쇼와
		else if(year==1989){
			$("#e2y_era").val("헤이세이1년 / 쇼와64년");
		}	
		//쇼와
		else if(year>1926 && year<1989){
			$("#e2y_era").val("쇼와");
			standard_year = 1926;
			era(year, standard_year);	
		}	
		//쇼와&다이쇼	
		else if(year==1926){
			$("#e2y_era").val("쇼와1년 / 다이쇼15년");
		}	
		//다이쇼
		else if(year>1912 && year<1926){
			$("#e2y_era").val("다이쇼");
			standard_year = 1912;
			era(year, standard_year);	
		}	
		//다이쇼&메이지	
		else if(year==1912){
			$("#e2y_era").val("다이쇼1년 / 메이지45년");
		}	
		//메이지
		else if(year>=1868 && year<1912){
			$("#e2y_era").val("메이지");
			standard_year = 1868;
			era(year, standard_year);	
		}	
		
		//나이계산
		age(year);
		
	}//y2e 닫음

	
//연호별 숫자계산 함수 선언
function era(year, standard_year){
	var num = 0;
	//기준년도부터 입력한 년도까지 for문 돌림
	for(standard_year; standard_year<year+1; standard_year++){
		num++;
		if(standard_year == year){
			$("#e2y_eraNum").val(num);
		}
	}
}

//나이계산
function age(year){
	//날짜 메소드
	var now = new Date();
	//현재 년도
	var now_year = now.getFullYear();
	//현재 나이 계산
	var now_age = now_year-year+1;
	$("#e2y_age").val(now_age);
}
	

	
})//전체 닫음