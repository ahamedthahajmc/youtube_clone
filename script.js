
function getVdo(key){
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=id&q="+key+"&key=AIzaSyDOWdhycvKuuV-gvvNpBlh8RM7bXOnRq7c",{method:"GET"})
.then((data)=> data.json())
.then((ele)=>{
    var tube_video=document.querySelector('.tube-video');
        for(var i=0;i<ele.items.length;i++){
        var iframe = document.createElement('iframe');
        iframe.width="420";
        iframe.height="350";
        iframe.src="https://www.youtube.com/embed/"+ele.items[i].id.videoId;

        var titleBox = document.createElement('div');  
        var title = document.createElement('h2');
        title.className = "title";
        title.innerText = ele.items[i].snippet.channelTitle;
        var description = document.createElement('h6');
        description.className = "title-description";
        description.innerText = ele.items[i].snippet.description;

        titleBox.append(title,description)
        
        tube_video.append(iframe,titleBox);
        }
})
}

getVdo('nature')