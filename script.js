console.log("welcome");


let songIndex = 0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:'Salam e Ishq', filePath: "1.mp3", coverPath:"cover1.jpg" },
    {songName:'let me love you', filePath: "2.mp3", coverPath:"cover2.jpg"},
    {songName:'Salam e Ishq', filePath: "3.mp3", coverPath:"cover3.jpg"},
    {songName:'Salam e Ishq', filePath: "4.mp3", coverPath:"cover4.jpg"},
    {songName:'Salam e Ishq', filePath: "5.mp3", coverPath:"cover5.jpg"},
    {songName:'Salam e Ishq', filePath: "6.mp3", coverPath:"cover6.jpg"},
    {songName:'Salam e Ishq', filePath: "7.mp3", coverPath:"cover7.jpg"},
    {songName:'Salam e Ishq', filePath: "8.mp3", coverPath:"cover8.jpg"},
    {songName:'Salam e Ishq', filePath: "9.mp3", coverPath:"cover9.jpg"},
    {songName:'Salam e Ishq', filePath: "10.mp3", coverPath:"cover10.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})




masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
} )
//audioElement.play();
audioElement.addEventListener('timeupdate',()=>{
  
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
     audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeAllPlays();
songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src=`${songIndex+1}.mp3`;
masterSongName.innerHTML= songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerHTML= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerHTML= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})