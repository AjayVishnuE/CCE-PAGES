let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("Slides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}
  slides[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 3000); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("Slides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  slides[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("Slides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}
  slides[slideIndex3-1].style.display = "block";
  setTimeout(showSlides3, 3000); // Change image every 2 seconds
}

let slideIndex4 = 0;
showSlides4();

function showSlides4() {
  let i;
  let slides = document.getElementsByClassName("Slides4");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  slideIndex4++;
  if (slideIndex4 > slides.length) {slideIndex4 = 1}
  slides[slideIndex4-1].style.display = "block";
  setTimeout(showSlides4, 3000); // Change image every 2 seconds
}


/*
  function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("Slides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("Slides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function showSlides4() {
  let i;
  let slides = document.getElementsByClassName("Slides4");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
 */
