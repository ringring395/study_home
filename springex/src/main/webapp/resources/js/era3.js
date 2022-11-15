/**
 * era -> year & era
 */
$(document).ready(function (){
	
	//버튼을 눌렀을때,
	$("#e2a_btn").on("click", function(){
		//입력한 연호
		var era = $("#e2a_era option:selected").val();
		//입력한 연호 년도	
		var eraNum = $("#e2a_eraNum").val();
		//연호의 시작년도
		var era_start;
		
		//레이와
		if(era=="rei"){
			//연호 년도가 비었으면,
			if(eraNum == ""){
				$("#e2a_year").html("레이와 : 2019.05.01 ~ 현재");
			}else{
				era_start = 2019;
				era3(era_start, eraNum);
			}
		}
		//헤이세이
		else if(era=="hei"){
			//연호 년도가 비었으면,
			if(eraNum == ""){
				$("#e2a_year").html("헤이세이 : 1989.01.08 ~ 2019.04.30");
			}else{
				era_start = 1989;
				era3(era_start, eraNum);
			}
		}		
		//쇼와
		else if(era=="sho"){
			//연호 년도가 비었으면,
			if(eraNum == ""){
				$("#e2a_year").html("쇼와 : 1926.12.25 ~ 1989.01.07");
			}else{
				era_start = 1926;
				era3(era_start, eraNum);
			}
		}		
		//다이쇼
		else if(era=="dai"){
			//연호 년도가 비었으면,
			if(eraNum == ""){
				$("#e2a_year").html("다이쇼 : 1912.07.30 ~ 1926.12.25");
			}else{
				era_start = 1912;
				era3(era_start, eraNum);
			}
		}	
		//메이지
		else if(era=="mei"){
			//연호 년도가 비었으면,
			if(eraNum == ""){
				$("#e2a_year").html("메이지 : 1868.10.23 ~ 1912.07.30");
			}else{
				era_start = 1868;
				era3(era_start, eraNum);
			}
		}				
	})//클릭이벤트 닫음

//날짜 메소드	
var now = new Date();
	//현재 년도
var now_year = now.getFullYear();	
	
	
//era -> year함수
	function era3(era_start, eraNum){
		console.log(era_start);
		console.log(eraNum);
		var num = 0;
		var year = era_start+num-1;
		//입력한 연호 년수까지 for문 반복
		for(num; num<eraNum+1; num++){
			//연호 년수가 되면 출력함
			if(num == eraNum){
				//년도
				$("#e2a_year").html(year+"년");	
				era2age(year);
			}
		}		
	}//era3 닫음
	
	
//era -> age함수
	function era2age(year){
		console.log(year);
		console.log(now_year);
		$("#e2a_age").html(now_year-year+1+"세 (올해)");
	}

})//전체 닫음