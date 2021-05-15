var img = document.getElementById('img')
var audio = document.getElementById('audio')
var acount = 0;

function play(){
if(acount == 0){
acount=1;
audio.play();
}else{
acount=1;
acount=0;
audio.pause();
}
}
