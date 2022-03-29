let CID = "UCAg2py6olXgod71Ix06HnUQ"; // insert channel ID here
let getURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(getURL)+CID, function(data) {
   let link = data.items[0].link;
   let id = link.substr(link.indexOf("=")+1);
$("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
});