
function funa(){
//	p1向左边移动100px,600ms后p2向右边移动100px,1100mx后p1的z高度降低100.
	$("#p1").css("left","0px");
	setTimeout("$('#p2').css('left','100%')",600);
	setTimeout("$('#p1').css('z-index','0')",1100);
}
function funb(){
//	p2向左边移动100px,600ms后p1向右边移动100px,1100mx后p1的z高度提高100.
	$("#p2").css("left","0px");
	setTimeout("$('#p1').css('left','100%')",600);
	setTimeout("$('#p1').css('z-index','100')",1100);
}

function x(){
	alert("此链接页尚未完成，请勿夏季八点，谢谢。")
}

$(function(){
	
//	初始化
	var dev_high = $(window).height();
	$("header").css("height",dev_high/14);
		$("#hed_search").css("line-height",$("#hed_search").height()+"px");
		$("#mess_header_line").css("top",dev_high/14);
	$("section").css("margin-bottom",dev_high/12);
		$("#sec_pic").css("height",dev_high/3.5+"px");
		$("#sec_work").css("height",dev_high/6+"px");
		$("#sec_adv").css("height",dev_high/4+"px");
		$(".content").css("height",dev_high/4+"px");
		
	$("footer").css("height",dev_high/12);
	
//  背景滚动淡入
	var top=0;
    $(document).scroll(function () { 
        op = $(window).scrollTop()/300;
        $("header").css("background","rgba(0, 179, 138,"+op+")");
        $("#hed_search").css("background","rgba(8, 162, 124,"+op+")");
        if(op != 0){
       		$("#hed_search").css("color","#d7f9f1");	
        }
        else{
        	$("#hed_search").css("color","#777");
        	$("#hed_search").css("background","white");
        }
    });
//	点击按钮转换
//  function remclass(){
//  	$(".list a i").removeClass("iplus");
//  	$(".list a b").css("color","#777");
//  }
//  $("#home").click(function(){
//  	remclass();
//  	$("#home i").addClass("iplus");
//  	$("#home b").css("color","#00b487");
//  })
//  $("#mess").click(function(){
//  	remclass();
//  	$("#mess i").addClass("iplus");
//  	$("#mess b").css("color","#00b487");
//  })
//  $("#more").click(function(){
//  	remclass();
//  	$("#more i").addClass("iplus");
//  	$("#more b").css("color","#00b487");
//  })
//  $("#me").click(function(){
//  	remclass();
//  	$("#me i").addClass("iplus");
//  	$("#me b").css("color","#00b487");
//  })
//  $("#home").click();
     
//  轮播图 
//	transition: all 0.5s;



//	每隔5000ms,触发一次funa。
	setInterval("funa()",5000);
	
//	延后2500ms,触发一次funb，以免第一次等待时间过长。
	setTimeout("funb()",2500);
	
//	延后2500ms,触发一次(每隔5000ms,触发一次funb。)
	setTimeout("setInterval('funb()',5000)",2500);
	
	$("#hed_search").click(x);
	$("#hed_sao").click(x);
	$("#sec_adv").click(x);
	$(".content").click(x);
	$("#sec_work ul").click(x);
	
	$("#more_button span").click(x);
	$("#more_header i").click(x);
	
	$("#me_top span").click(x);
	$("#me_top img").click(x);
	$("#me_menu ul").click(x);
	$("#me_set").click(x);
	$("#me_security").click(x);
	
	

})

