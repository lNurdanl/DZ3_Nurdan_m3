const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

console.log(tabsParent);

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    console.log(target);
    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

//Домашняя работа, первая задача
let slide_Id = 0
const slidescroll = () => {
    slide_Id++
    if(slide_Id > 3) {
        slide_Id=0
    }
    hideTabContent()
    showTabContent(slide_Id)
}
setInterval(slidescroll, 1000)

//Вторая задача

modul_opening =()=> {
    window.addEventListener('scroll', () => {
            const scroll_Height = document.documentElement.scrollHeight;
            const client_Height =document.documentElement.clientHeight + window.pageYOffset;
            const Scroll_End = Math.abs(scroll_Height - client_Height) < 10;
            if(Scroll_End){
                openModal()
            }})}
window.addEventListener("scroll", modul_opening)