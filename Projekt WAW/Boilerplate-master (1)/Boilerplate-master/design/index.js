
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
	
	 send = function()
    {
    $.ajax({
        url: 'http://kittey.rockz:1111/api/V1/addPlayer',
    
        type: 'GET',
        data : $('#formID').serialize(),
        success: function(json) {
            alert('all done');
        }
    
});
 }

})(this);

