/**
 * date -> era 
 */
$(document).ready(function (){
//년월일 date -> 연호 era
	
	//결합한 날짜를 저장하는 변수
	var check="";
	
//버튼을 클릭하면.
	$("#d2e_btn").on("click", function(){
		//버튼 클릭하면 일단 리셋
		$("#e2d_era").val("");
		$("#e2d_eraNum").val("");
		$("#e2d_age").val("");
		$("#e2d_age2").val("");
		
		//입력한 년도
		var year = $("#d2e_year").val();
		//입력한 월
		var month = $("#d2e_month option:selected").val();
		//입력한 일
		var day = $("#d2e_day").val();	
		//연호의 첫해 저장변수
		var standard_year;
		
		//입력한 날짜를 결합
		check = year + month + day;
		console.log(check);
		
		//레이와
		if(check >= 20190501){
			$("#e2d_era").val('레이와');
			standard_year = 2019;
			era2(year, standard_year);
		}
		//헤이세이
		else if(check>=19890108 && check<=20190430){
			$("#e2d_era").val("헤이세이");
			standard_year = 1989;
			era2(year, standard_year);			
		}
		//쇼와
		else if(check>19261225 && check<=19890107){
			$("#e2d_era").val("쇼와");	
			standard_year = 1926;
			era2(year, standard_year);	
		}
		//쇼와,다이쇼
		else if(check == 19261225){
			$("#e2d_era").val("쇼와1년 / 다이쇼15년");
		}
		//다이쇼
		else if(check>19120730 && check<19261225){
			$("#e2d_era").val("다이쇼");
			standard_year = 1912;
			era2(year, standard_year);	
		}
		//다이쇼,메이지
		else if(check == 19120730){
			$("#e2d_era").val("다이쇼1년 / 메이지45년");
		}
		//메이지
		else if(check>=18681023 && check<19120730){
			$("#e2d_era").val("메이지");
			standard_year = 1868;
			era2(year, standard_year);	
		}
		
		//나이계산
		age2(year); 
		//만나이계산
		age2_man(year, month, day);
	})
	
//연호의 햇수를 구하는 함수
function era2(year, standard_year){
		var num = 0;
		//기준년도부터 입력한 년도까지 for문 돌림.
		for(standard_year; standard_year<year+1; standard_year++){
			num++;
			if(standard_year == year){	//입력한 년도가 되면 출력함.
				$("#e2d_eraNum").val(num);
			}
		}
	}

/*
 * 날짜 메소드
 * */	
var now = new Date();	
//현재 년도
var now_year = now.getFullYear();
//현재 월
var now_month = now.getMonth()+1;
//현재 일
var now_day = now.getDate();


//나이계산
function age2(year){

	//현재 나이 계산
	var now_age = now_year-year+1;
	$("#e2d_age").val(now_age);
}	


//만나이계산
function age2_man(year, month, day){
	console.log(year, month, day);
	console.log(now_year, now_month, now_day);
	//만나이 기본 = 한국나이 -1
	var now_age2_man = now_year-year;
	
	//입력한 달이 현재달보다 작으면
	if(now_month < month){
		//한국나이보다 -2
		$("#e2d_age2").val(now_age2_man-1);
	//입력한 달이 현재달과 같은데다가??
	}else if(now_month == month){
		//입력한 날이 현재날보다 같거나 크면
		if(now_day >= day){
			//한국나이보다 -1
			$("#e2d_age2").val(now_age2_man);
		}else{
			//아니고, 입력한 날이 현재날보다 작으면
			//한국나이보다 -2
			$("#e2d_age2").val(now_age2_man-1);
		}
	//입력한 달이 현재달보다 작지않고, 같지 않으면 = 입력한 달이 더 크면
	}else if(now_month > month){
		//한국나이 -1
		$("#e2d_age2").val(now_age2_man);
	}
}//age2_man 닫음
	

})//전체 닫음