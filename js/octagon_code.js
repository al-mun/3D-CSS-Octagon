// JavaScript Document
$(document).ready(function () {
	

	var Yrotate = 0;	//The current degrees of myhex
	
	//Left arrow click
	$('#left_arrow').click(function(){
		Yrotate += 45;
		doMove();


	})

	//Right Arrow click
	
	$('#right_arrow').click(function(){
		Yrotate -=45;
		doMove();	//Call the function doMove

	})
	
	
	

	///detect swipe


	document.onkeydown = function(event) {
		switch (event.key){		//when a key is pressed
			//Compare the value ofthe key taht was pressed to:
			case 'ArrowLeft':		//If it matches arrow left
				Yrotate +=45;		//decrease the Y by 60
				event.preventDefault();	//prevent it from doing a default role
				break;

			case 'ArrowRight':
				Yrotate -=45;
				event.preventDefault();
				break;
		}
		doMove();
	}

	$('#parent_of_myhex').on("swipeleft", swipeLeftHandler);

	function swipeLeftHandler(event) {
		Yrotate -= 45;
		doMove();
	}

	$('#parent_of_myhex').on("swiperight", swipeRightHandler);

	function swipeRightHandler(event) {
		Yrotate += 45;
		doMove();
	}




	//This is the function to actually spin
	function doMove() {
		$('#myhex').css("transform", "rotateY(" + Yrotate + "deg) ");
	}

	

	
	

}); ///end document ready
