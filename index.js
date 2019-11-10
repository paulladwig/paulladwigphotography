console.log("Hello")
let mq =  () => {
  let mqm1100 =  window.matchMedia('(min-width: 1100px)');
  let mql1100 =  window.matchMedia('(max-width: 1100px)');
  let mql960 =  window.matchMedia('(max-width: 960px)');
  let mql700 =  window.matchMedia('(max-width: 700px)');
  let mql540 =  window.matchMedia('(max-width: 540px)');
  let mql400 =  window.matchMedia('(max-width: 400px)');
}

const imagesSet = document.querySelectorAll(".contain")

const imageSizing = (images) => {
  images.forEach((image)  => {
    let realWidth = image.naturalWidth;
    let realHeight = image.naturalHeight;
    if (realWidth > realHeight) {
      image.classList.add("horizontal");
    } else {
      image.classList.add("vertical");
    }
  })
}

imageSizing(imagesSet);

const reportWindowSize = (event) => {
  mq();
}

window.addEventListener('resize', reportWindowSize)

let fs = require('fs');
let files = fs.readdirSync('../images/uzbekistan');
console.log(files);
