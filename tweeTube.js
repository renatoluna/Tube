if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=call;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	call();
}
function call(){
	$("body").append('<div id="tweeTube" style="overflow: hidden; position: fixed; top: 280px; left: 35%; background-image: -webkit-gradient(linear,0% 0%,0% 100%,color-stop(0.16,rgba(255, 255, 255, 1)),color-stop(0.49,rgba(255, 255, 255, 1)),color-stop(0.90,rgba(181, 181, 181, 1))); box-shadow: 0.9px 0px 6px rgba(0, 0, 0, 1); -webkit-box-shadow: 0.9px 0px 6px rgba(0, 0, 0, 1);  width: 300px; height: 137px; z-index: 100; border-radius: 10px; text-align: center"><h3 style="margin-top: 10px; font-family: tahoma; font-weight: lighter; text-shadow: rgba(255, 255, 255, 1) 0px 1px 1px; color: rgba(0, 0, 0, 1);">TweeTube</h3><input type="text" style="border: solid 1px rgba(0, 0, 0, 0.2); margin: 10px; border-radius: 10px; width: 218px; padding: 5px; outline: none" /><button style="padding: 4px 0.9px; height: 30px; width: 75px; border-radius: 10px; background: #FFF; border: rgba(0, 0, 0, 0.3) solid 1px;" onClick="javascript: tube();">Tweet!</button></div>');
	console.log("@renatoluna");
}
function tube()
{
	query = $("#tweeTube input").val(), orderBy = "relevance", reqStart = "http://gdata.youtube.com/feeds/api/videos", reqQuery = "?q="+query+"&orderby="+orderBy, reqSettings = "&start-index=2&max-results=1&v=2&alt=json-in-script&callback=?", request = reqStart + reqQuery + reqSettings;
	$.getJSON(request, function(data)
	{
		title = data.feed.entry[0].media$group.media$title.$t, link = data.feed.entry[0].link[0].href;
		shareOnTwitter = 'https://twitter.com/intent/tweet?original_referer='+link+'&text='+title+'&url='+link;
		window.location = shareOnTwitter;
	});
}