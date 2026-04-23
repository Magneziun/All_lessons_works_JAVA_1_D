const btnInBlock = document.querySelectorAll(".block .btn"),
    btnAllBlock = document.getElementsByClassName("myBtn"),
    block = document.querySelector(".block"),
    newBtn = document.querySelector(".block + .btn");

console.log(btnInBlock);
console.log(newBtn);
console.log(btnAllBlock);

newBtn.addEventListener("click", () => {
    block.innerHTML += '<button class="btn myBtn">Click me NEW</button>';
    console.log(btnInBlock);
    console.log(btnAllBlock);
});
