
let followbtns = document.getElementsByClassName('btn');
let removes = document.getElementsByClassName('remove');
var post=document.querySelector('.post');
let like= document.querySelector("#dbl")

for (let i = 0; i < followbtns.length; i++) {
  followbtns[i].addEventListener("click", function() {
    if(followbtns[i].innerHTML=="Follow"){
      followbtns[i].innerHTML="remove";
      followbtns[i].style.backgroundColor="grey";
      followbtns[i].style.color="white";
    }
    else{
    followbtns[i].innerHTML="Follow";
    followbtns[i].style.backgroundColor="rgb(23, 128, 249)";
    followbtns[i].style.color="white";

    }
  });
}
for(let x=0;x<removes.length;x++){
  removes[x].addEventListener("click",function(){
    removes[x].parentElement.style.display="none";
    console.log('removed');
  })
}
post.addEventListener("dblclick",function(){
  like.style. transform="translate(-50%,-50%) scale(1)"
  setTimeout(function(){
    like.style. transform="translate(-50%,-50%) scale(0)"
  },2000)
})
