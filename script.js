console.log("lets get started");

// ? initialize the variables

let index = 0;
let audioelement = new Audio("songs/2.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songsItem = document.querySelectorAll(".songsitem");
let songItemPlay = document.querySelectorAll(".songitemplay")
let previous = document.getElementById('previous')
let mastersongname = document.getElementById('mastersongname')

let songs = [
  { songname: "The Humma Song", filepath: "songs/1.mp3", coverpath: "cover1.jpg" },
  { songname: "De Taali", filepath: "songs/2.mp3", coverpath: "cover2.jpg" },
  { songname: "Pasoori", filepath: "songs/3.mp3", coverpath: "cover3.jpg" },
  { songname: "Rang Sari", filepath: "songs/4.mp3", coverpath: "cover4.jpg" },
  { songname: "Excuses", filepath: "songs/5.mp3", coverpath: "cover5.jpg" },
];

// ! handle play/pause button
masterPlay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currenttime <= 0) {
    audioelement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// ! for progressbar
audioelement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioelement.currentTime / audioelement.duration) * 100
  );
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioelement.currentTime =
    (myProgressBar.value * audioelement.duration) / 100;
});

songsItem.forEach((element, i) => {
  console.log(element, i);

  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.querySelectorAll(".songname")[0].innertext = songs[i].songname;
});


let makeAllplay = () =>{
    songItemPlay.forEach((element) =>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}
songItemPlay.forEach((element) =>{
  element.addEventListener('click',(e) =>{
    makeAllplay()
    
    index = parseInt(e.target.id)
    e.target.classList.remove("fa-play")
    e.target.classList.add("fa-pause");
    audioelement.src = `songs/${index+1}.mp3`
    mastersongname.innerText = songs[index].songname
    // audioelement.src = 'songs/4.mp3'
    audioelement.currentTime=0;
    audioelement.play()
    gif.style.opacity = 1;

    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  })
})

next.addEventListener('click',()=>{

  if(index>=5){
    index=0
  }
  else{
    index+= 1
  }

  audioelement.src = `songs/${index+1}.mp3`
  mastersongname.innerText = songs[index].songname

  // audioelement.src = 'songs/4.mp3'
  audioelement.currentTime=0;
  audioelement.play()
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
})

previous.addEventListener('click',()=>{

  if(index<=0){
    index=0
  }
  else{
    index-= 1
  }

  audioelement.src = `songs/${index+1}.mp3`
  mastersongname.innerText = songs[index].songname
  audioelement.currentTime=0;
  audioelement.play()
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
})