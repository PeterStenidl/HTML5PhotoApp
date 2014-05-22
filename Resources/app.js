// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
    backgroundImage:'images/sfp_collage.jpg',
    window_Id :100,
});

// var btn = Ti.UI.createButton({
	// title :"clck",
// });
// 
// btn.addEventListener("click",function(){
	// var http = Ti.Network.createHTTPClient();
	// http.onload = function(){
		// alert("onla "+ http.responseXML);
	// };
	// http.onerror=function(){
		// alert("oneror "+ http.responseXML);
	// };
	// http.open('POST',"http://savefamilyphotos.andrewniesen.com/api/wallpaper/color");
	// http.send(token= "bHjFmq0k9neNZKjNOp5tNkDa6Rnikz37"
	// );   
// 	
// });
Ti.App.Properties.addEventListener('app:fromWebView', function(e) {
    alert(e.message);
});

var webView = Ti.UI.createWebView({

	url : "app_html.html",
}); 


win1.add(webView);
// win1.add(btn);
win1.open();
