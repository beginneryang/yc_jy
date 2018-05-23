
var index=0;
var li_leng=$(".banner ul li").length;
$(".banner ul li").eq(index).addClass('li_act');
function mov(){
		   index++;
		   if(index>(li_leng-1)){
		   	index=0;
		   }
		   $(".banner ul li").eq(index).addClass('li_act').siblings().removeClass('li_act');
}

var t='';
$('.banner').hover(function() {
	clearInterval(t);
}, function() {
	 t=setInterval(mov,3000);
});

$('.banner').mouseout();