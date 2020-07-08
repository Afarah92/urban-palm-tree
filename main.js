const content = document.querySelector("section");
let currrentPos = window.pageYOffset;

const callDistort = function (){
  const newPos = window.pageYOffset;
  const diff = newPos - currrentPos;
  const speed = diff * 0.35;
  
  
  content.style.transform = "skewY("+ speed + "deg)";
  
  currrentPos = newPos;
    requestAnimationFrame(callDistort);

};

callDistort();

