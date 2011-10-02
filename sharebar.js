$(document).ready(function(){
	// Add all button code here
	var sharebar = '<div id="fb_like_share_button" class="share_button"><fb:like action="like" colorscheme="light" expr:href="data:post.url" font="arial" layout="box_count" send="false" show_faces="false"></fb:like></div><div class="share_button" name="fb_share" type="box_count">Share</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script></div><div class="share_button"><a href="http://twitter.com/share" class="twitter-share-button" data-count="vertical" data-via="mybloggertricks">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="share_button"><g:plusone size="tall"></g:plusone></div><div class="share_button"><script src="http://platform.linkedin.com/in.js" type="text/javascript"></script><script type="IN/Share" data-counter="top"></script></div><div class="share_button"><script type="text/javascript">(function() {var s = document.createElement("SCRIPT"), s1 = document.getElementsByTagName("SCRIPT")[0];s.type = "text/javascript";s.async = true;s.src = "http://widgets.digg.com/buttons.js";s1.parentNode.insertBefore(s, s1);})();</script><!-- Medium Button --><a class="DiggThisButton DiggMedium"></a></div>';
	
	// Generate additional javascript file
	var ext_js = '<script type="text/javascript" src="http:///connect.facebook.net//en_US//all.js#xfbml=1"></script>';
	    ext_js += '<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>';
	    ext_js += '<script type="text/javascript" src="http://static.ak.fbcdn.net/connect.php/js/FB.Share"></script>';
	
	// Generate additional css files
	var ext_css = '<style type="text/css">#sharebar{-moz-border-radius-topleft: 7px;-moz-border-radius-topright:7px;-moz-border-radius-bottomleft:7px;-moz-border-radius-bottomright:7px;-webkit-border-top-left-radius:7px;-webkit-border-top-right-radius:7px;-webkit-border-bottom-left-radius:7px;-webkit-border-bottom-right-radius:7px;border-top-left-radius:7px;border-top-right-radius:7px;border-bottom-left-radius:7px;border-bottom-right-radius:7px;border:1px solid black; position: fixed; margin-top: 100px;margin-left:10%;text-align:center;} .share_button fb:like{margin-left:4px;}</style>';
		 ext_css += '<style type="text/css">.share_button{padding:3px 0px 2px 0px;} #fb_like_share_button{margin-left:7px;}';

	$("head").append(ext_js); // Add to head
	$("head").append(ext_css);  // Add to head
	$("#sharebar").append(sharebar);  // Add to body
});

