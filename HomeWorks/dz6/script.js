




//на самом деле тут ничего особенного я не делал, просто доработал косметически и под задания
//смысла в тайлапсе нет сегодня нет
//использовал и доработал под условия заданий ваш код с первого и последнего (Work1 Work4)





const btnAll = document.querySelectorAll(".menu .btn"),
      menu = document.querySelector(".menu"),
      tabAll = document.querySelectorAll(".tab__item");

function hiddenTabs() {
    tabAll.forEach((item) => {
        item.classList.add("hidden");
        item.classList.remove("show");
    });
    btnAll.forEach((item) => item.classList.remove("active"));
}

function showTab(i = 0) {
    tabAll[i].classList.add("show", "anim");
    tabAll[i].classList.remove("hidden");
    btnAll[i].classList.add("active");
}

hiddenTabs();
showTab();

menu.addEventListener("click", (event) => {
    let t = event.target;
    if (t.classList.contains("btn")) {
        btnAll.forEach((item, index) => {
            if (item === t) {
                hiddenTabs();
                showTab(index);
            }
        });
    }
});


const slides = document.querySelectorAll(".slider .pic");
const prevBtn = document.querySelector(".slider .prev");
const nextBtn = document.querySelector(".slider .next");

function updateButtons() {
    const activeSlide = document.querySelector(".slider .active");
    if (!activeSlide) return;

    const slidesArray = [...slides];
    const currentIndex = slidesArray.indexOf(activeSlide);
    if (currentIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentIndex === slidesArray.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

function myClick(x) {
    const activeSlide = document.querySelector(".slider .active");
    if (!activeSlide) return;

    const slidesArray = [...slides];
    const currentIndex = slidesArray.indexOf(activeSlide);
    let newIndex = currentIndex + x;

    if (newIndex < 0 || newIndex >= slidesArray.length) return;

    slidesArray[newIndex].classList.add("active");
    activeSlide.classList.remove("active");

    updateButtons();
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => myClick(-1));
    nextBtn.addEventListener("click", () => myClick(1));
}

if (!document.querySelector(".slider .active")) {
    slides[0]?.classList.add("active");
}
updateButtons();