 var mySwiper = new Swiper ('.swiper-container', {
		  direction: 'vertical', // 垂直切换选项
		  loop: false, // 循环模式选项
		  
		  // 如果需要分页器
		  pagination: {
		    el: '.swiper-pagination',
			bulletElement : 'li',
			bulletClass : 'my-bullet',
			bulletActiveClass: 'my-bullet-active',
		  },
		  
		  // 如果需要前进后退按钮
		  navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		  
		  // 如果需要滚动条
		  scrollbar: {
		    el: '.swiper-scrollbar',
		  },
		})
		
// $(".swiper-slide>img:nth-child(2)").click(function(){
// 	$(this).animate({
// 		transform:"rotate(180deg)"
// 	},1000)
// 	
// 
// })

let a = document.querySelector(".swiper-slide>img:nth-child(2)")
a.onclick = function(){
	a.style.transform = "rotate(-180deg)"
}