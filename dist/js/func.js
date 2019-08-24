$(document).ready(function() {
    
	let window = document.getElementById("Modal");
	
	window.addEventListener("click", function(){
		$("#openModal").fadeIn();
		$("body").css('overflow', 'hidden'); 
	});
	
	$("#closeModal").on("click", function(){
		$("#openModal").fadeOut();
		$("body").css('overflow', 'auto'); 
	});
	
	$("#menuFunc").on("click", function(){
		$(".menu__nav").toggleClass('show');
		console.log(1);
	});

    $(function(){
        $("#phone").mask("8(999) 999-9999");
    });
});