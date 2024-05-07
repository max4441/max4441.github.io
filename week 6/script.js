const myHeading = document.querySelectorAll("p");
console.log(myHeading);
// console.log(myHeading.textContent);
// myHeading.textContent = "new paragraph";
// myHeading.style.backgroundColor = "blue";

// for (let i=0; i<3; i++) {
//     myHeading[i].textContent = "new" + i;
//     myHeading[i].style.backgroundColor = "blue";
// }

// myHeading.forEach(changeMe)

// function changeMe(item) {
//     // item.style.backgroundColor = "coral";
//     // item.classList.add("purple-box");
// }

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", chooseTopic);

function toggleMe() {
  //   const myImage = document.querySelector("#my-image");
  // //   console.log(myImage);
  // console.log(myImage.dataset.catname);
  //   myImage.classList.toggle("round");
  //   myButton.textContent = myImage.dataset.catname;
}

function chooseTopic() {
  const myPara = document.querySelectorAll("p");
  myPara.forEach(displayTopic);
  function displayTopic(item) {
    if (item.dataset.topic === "sound") {
      item.classList.add("purple-box");
    }
    else if (item.dataset.topic === "web") {
        item.classList.add("coral-box");
      }
      else if (item.dataset.topic === "music") {
        item.classList.add("lime-box");
}
