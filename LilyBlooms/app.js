// let menu = document.querySelector("#toggler");
// let nav = document.querySelector(".navbar");

// menu.addEventListener("click" , ()=>{
//     menu.classList.toggle('fa-times');
//     nav.classList.toggle('nav-toggle');
// });

// window.onscroll=()=>{
//     menu.classList.remove('fa-times');
//     nav.classList.remove('nav-toggle');
// }

// const header = document.querySelector("header");

// window.onscroll = function(){
//     if(document.documentElement.scrollTop>5){
//         header.classList.add('active');
//     }else{
//         header.classList.remove('active');
//     }
// }

let menu = document.querySelector("#toggler");
let nav = document.querySelector(".navbar");

menu.addEventListener("change", () => {
    if (menu.checked) {
        nav.classList.add('nav-toggle');
        menu.classList.add('fa-times');
    } else {
        nav.classList.remove('nav-toggle');
        menu.classList.remove('fa-times');
    }
});

window.onscroll = function() {
    const header = document.querySelector("header");
    if (document.documentElement.scrollTop > 5) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};
