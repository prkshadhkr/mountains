//Variables:
let home = document.querySelector(".home");
let homeName = document.querySelector(".home-name");
let topnav = document.querySelector(".topnav");
let topRight = document.querySelector(".top-right");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let m1 = document.querySelector(".m1");
let m2 = document.querySelector(".m2");
let m1Content = document.querySelector(".m1-content");
let m2Content = document.querySelector(".m2-content");

// Home:
home.addEventListener("click", () => {
  c2.style.display = "none";
  c3.style.display = "none";
  c1.style.display = "block";
  homeName.style.display = "none";

  //Following will change the background color of the navbar:
  topnav.style.backgroundColor = "transparent";
  topnav.style.position = "absolute";
  topnav.style.bottom = "";

  //When logo is pressed:
  Array.from(topRight.children).forEach(e => {
    if(!e.classList.contains('copy-right')){
      e.style.color = "white";
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
});

//First Link:
link1.addEventListener("click", () => {
  c1.style.display = "none";
  c3.style.display = "none";
  c2.style.display = "block";
  homeName.style.display = "block";

  //Follwoing will change the color of the navbar:
  topnav.style.backgroundColor = "white";

  // Following will change the color of the links and copy right if link1 is pressed:
  Array.from(topRight.children).forEach(e => {
    e.style.color = "rgba(47, 46, 39, 0.893)";
  });
});

//Second Link
link2.addEventListener("click", () => {
  c1.style.display = "none";
  c2.style.display = "none";
  topnav.style.display = "block";
  c3.style.display = "block";
  homeName.style.display = "block";

  //following will change topnavbar to footer:
  topnav.style.backgroundColor = "rgb(190, 193, 198)";
  topnav.style.position = "fixed";
  topnav.style.bottom = "0px";

  //folowing would change the display of top-right div
  Array.from(topRight.children).forEach(e => {
    if(e.classList.contains("copy-right")){
      e.style.textDecoration = "none";
      e.style.cursor = "none";
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
});


//First tab of third page:
m1.addEventListener("click", () => {
  m2Content.style.display = "none";
  m1Content.style.display = "block";

  m2.style.backgroundColor = "transparent";
  m1.style.backgroundColor = "gray";

  m2.style.color = "black";
  m1.style.color = "white";

  m2.style.textDecoration = "none";
  m1.style.textDecoration = "underline";
});

//Second tab of third page:
m2.addEventListener("click", () => {
  m1Content.style.display = "none";
  m2Content.style.display = "block";

  m1.style.backgroundColor = "transparent";
  m2.style.backgroundColor = "gray";

  m1.style.color = "black";
  m2.style.color = "white";

  m1.style.textDecoration = "none";
  m2.style.textDecoration = "underline";
});
