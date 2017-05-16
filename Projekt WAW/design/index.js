
(function(global) {

	var header  = document.querySelector('header');
	var welcome = document.querySelector('header div');
	var video   = document.querySelector('main iframe');


 
	if (header !== null && welcome !== null) {

		var _resize = function() {

			var offset = ((global.innerHeight - welcome.offsetHeight) / 2).toFixed(0);

			header.style.paddingTop    = offset + 'px';
			header.style.paddingBottom = offset + 'px';


			var width  = Math.floor(global.innerWidth * 7/8 / 128) * 128;
			var height = width * 9/16;


			video.setAttribute('width',  width);
			video.setAttribute('height', height);

		};


		global.addEventListener('resize', _resize, true);
		global.addEventListener('orientationchange', _resize, true);

		setTimeout(function() {
			_resize();
		}, 100);

	}
	
	show = function(){
		var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
    modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
	};
	
	 send = function()
    {
    var error = false;
	var notNumber = [];
	var onlyNumber;
	
 

 
 

	var names = ["input[name=vorname]", "input[name=name]","input[name=verein]", "input[name=hcoach]", "input[name=acoach]"];
	var number = "input[name=number]";
	var jahr = "input[name=jahr]";
	for(var i =0; i < names.length; i++){
		notNumber.push($(names[i]).val())
	}
	for(var i =0; i < notNumber.length; i++){
		if(/^[a-z]+$/i.test(notNumber[i]) == false){
			error = true;
			show();
			break;
		
		}
 
	}
	if(!error) {
		if(!($(number).val() <= 15 && (number).val() >=4)){
		 error = true;
		 show();
		 
		}
		 else if(!($(number).val() <= 2017 && (number).val() > 0)){
			 error = true;
		 show();
		 
		 }
		 
	
	}
		
		
	
        
    if(!error){
        $.ajax({
        url: 'http://188.166.165.74:13337/api/players',
        type: 'POST',
        data : $('#formID').serialize(),
        success: function(json) {
            alert('all done', json);
        }

});
    }
 };

})(this);

