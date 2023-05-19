// const navMenus = document.querySelectorAll('nav a');
// const subNavs = document.getElementById('subNav');

// for (let i = 0; i < navMenus.length; i ++) {
//     navMenus[i].addEventListener("mouseover", function() {
//         subNavs.classList.remove("hd-subNav-hidden");
//         subNavs.classList.add("hd-subNav-show");
//     });
// }

// subNavs.addEventListener("mouseout",function(){
//     subNavs.classList.remove("hd-subNav-show");
//     subNavs.classList.add("hd-subNav-hidden");
// })


// for (let i = 0; i < navMenus.length; i ++) {
//     subNavs.addEventListener("mouseout", function() {
//         subNavs.classList.remove("hd-subNav-show");
//         subNavs.classList.add("hd-subNav-hidden");
//     });
// }

// const lang = document.getElementById('langSelector'); // id 페이지에 맞게 변경

const lang = document.querySelectorAll('.lang-select-button');



const langMobile = document.getElementById('langSelector2')

langSelector(lang);

// langSelector2(langMobile);