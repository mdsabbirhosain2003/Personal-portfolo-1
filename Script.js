// 
let prev = document.getElementById("prev-btn")
let next = document.getElementById("next-btn")
let container = document.querySelector(".container")
let imgnum = document.querySelectorAll(".pr-img").length
let timeout;
let currImg = 1;

function str(){
   clearInterval(timeout)
   timeout=setInterval(()=>{
   currImg++
   upd ()

},2000)}
str ()
next.addEventListener("click", () => {
    currImg++;
    clearInterval(timeout)
    upd ()
    str ()
})
prev.addEventListener("click",()=>{
    currImg--;
    clearInterval(timeout)
    upd ()
    str ()

    
} )


function upd (){
    if (currImg>imgnum){
        currImg=1
    }else if(currImg<1){
        currImg=imgnum
    }
 container.style.transform = `translateX(${-(currImg - 1) * 100}%)`
}

// typing 
const textEl = document.querySelector(".text");

    const strings = ["Frontend Developer", "YouTuber", "Web Developer"];

    let stringIndex = 0;
    let charIndex   = 0; 
    let isDeleting  = false;

    function type() {
      const currentString = strings[stringIndex];

      if (!isDeleting) {
        charIndex++;
        textEl.textContent = currentString.substring(0, charIndex);

        if (charIndex === currentString.length) {
          
          isDeleting = true;
          setTimeout(type, 1000);
          return;
        }

      } else {
        
        charIndex--;
        textEl.textContent = currentString.substring(0, charIndex);

        if (charIndex === 0) {
          
          isDeleting = false;
          stringIndex = (stringIndex + 1) % strings.length;
        }
      }

      setTimeout(type, 100);
    }

    type();

    //humburger menu
    const hum=document.querySelector("#hum")
    const shm=document.querySelector(".menu")
    hum.addEventListener("click",()=>{
        shm.classList.toggle("show-menu")
    })