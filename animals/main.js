const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");
cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);
let catImg = document.createElement("img");
let dogImg = document.createElement("img");

function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data.file} alt="cat" />`;
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dogImg.src = data.url;
        dog_result.children[0].remove();
        dog_result.appendChild(dogImg);
      }
    });
}
