let menuItem = document.querySelectorAll(".menu-item"),
    menu = document.body.querySelector(".menu"),
    btn5 = document.createElement("div"),
    tit = document.querySelector("#title"),
    adv = document.querySelector(".adv"),
    ans = document.querySelector("#prompt");

btn5.classList.add("menu-item");
btn5.textContent = "Пятый пункт";

menu.insertBefore(menuItem[1], menuItem[3]);
menu.appendChild(btn5);

document.body.style.backgroundImage = "url(../hw5/img/apple_true.jpg)";
tit.textContent = "Мы продаем только подлинную технику Apple";
adv.parentNode.removeChild(adv);
ans.textContent = prompt("Как вы относитесь к технике Apple?", "");


