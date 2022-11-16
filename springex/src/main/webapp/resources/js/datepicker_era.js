/**
 * datepicker 적용한 era구하기
 */
$(document).ready(function (){
//datepicker 형식 정리	
	$("#dp").datepicker({
		//년,월 선택창
		changeYear: true,	//년 : 선택창열기
		changeMonth: true,	//월 : 선택창열기
		nextText: "다음달",
		prevText: "이전달",
		//선택창: 년월 순서
		showMonthAfterYear: true,
		//기간
		yearRange: "c-155:c+30",	//현재기준: -155년 ~ +30년
		//하단메뉴
		showButtonPanel: true,	//하단메뉴열기
		currentText: "TODAY",
		closeText: "닫기",
		//표시형식
		dateFormat: "yymmdd",
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		dayNamesMin: ['일','월','화','수','목','금','토']
	});
	
	
/*
 * 날짜메소드*/	
	var now = new Date();
	var now_year = now.getFullYear();	//현재 년도
	var now_month = now.getMonth()+1;	//현재 월	
	var now_day = now.getDate();		//현재 일
	
//버튼 클릭하면
	$("#dp_d2e_btn").on("click", function(){
		//누를때마다 빈값으로 만들어줌.
		$("#dp_e2d_era").html("");
		$("#dp_e2d_eraNum").html("");
		$("#dp_e2d_age").html("");
		$("#dp_e2d_age2").html("");
		
		//datepicker로 선택한 값을 가져옴
		var dp_date = $("#dp").val();
		
		//날짜 선택이 안되었으면,
		if(dp_date ==""){
			$("#dp_e2d_era").html("날짜를 선택해주세요.");
		}//날짜 선택되었으면,
		else{
			var dp_year = dp_date.substr(0, 4);		//년		
			var dp_mmdd = dp_date.substr(4, 4);		//월일
			
			//연호 함수
			dp_era(dp_date);
			//연호 햇수 함수(년도,월,일 필요)
			dp_eraNum(dp_year, dp_mmdd);
			//한국나이(년도만 필요)
			dp_age(dp_year);
			//만나이(년도,월,일 필요)
			dp_age2(dp_year, dp_mmdd);
		}
	})

//연호 함수
	function dp_era(dp_date){
		//레이와
		if(dp_date>=20190501){
			$("#dp_e2d_era").html("레이와");
		}
		//헤이세이
		else if(dp_date>=19890108 && dp_date<=20190430){
			$("#dp_e2d_era").html("헤이세이");
		}
		//쇼와
		else if(dp_date>19261225 && dp_date<=19890107){
			$("#dp_e2d_era").html("쇼와");
		}		
		//쇼와, 다이쇼
		else if(dp_date == 19261225){
			$("#dp_e2d_era").html("다이쇼 15년 / 쇼와 1년");
		}		
		//다이쇼
		else if(dp_date>19120730 && dp_date<19261225){
			$("#dp_e2d_era").html("다이쇼");
		}		
		//다이쇼, 메이지
		else if(dp_date == 19120730){
			$("#dp_e2d_era").html("메이지 45년 / 다이쇼 1년");
		}		
		//메이지
		else if(dp_date>=18681023 && dp_date<19120730){
			$("#dp_e2d_era").html("메이지");
		}				
	}//dp_era 닫음
	
	
//연호 햇수 함수(년도, 월, 일 필요)
	function dp_eraNum(dp_year, dp_mmdd){
		console.log(now_year);
	}
	
//한국나이(년도만 필요)
	function dp_age(dp_year){
		//한국나이 : 올해년도-출생년도 +1
		var now_age = now_year-dp_year+1;
		$("#dp_e2d_age").html(now_age+"세(올해)");
	}
	
//만나이(년도, 월, 일 필요)
	function dp_age2(dp_year, dp_mmdd){
		console.log(now_year);
		var now_age2 = now-year-dp_year;
		
		
	}
})//전체 닫음