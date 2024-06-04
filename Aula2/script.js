//! Função para o botão de ocultar

let btn = document.getElementById("btn");
let ocultar = document.getElementById("ocultar");

btn.addEventListener("click", function () {
    if (ocultar.style.display === "block") {
        ocultar.style.display = "none";
    } else {
        ocultar.style.display = "block";
    }
})
//! Função para os slides

const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove("current-item"));

        items[currentItem].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });

        items[currentItem].classList.add("current-item");
    });
});

//? Função para abrir o modal

let btnM = document.getElementById("btnModal");
let ocultoDiv = document.getElementById("atoresDiv");

console.log(btnM);
console.log(ocultoDiv);

btnM.addEventListener("click", function () {
    if (ocultoDiv.style.display === "block") {
        ocultoDiv.style.display = "none";
    } else {
        ocultoDiv.style.display = "block";
    }
});

//? Função para o alert

let btnAlert = document.getElementById("btnAlert");

btnAlert.addEventListener("click", function () {
    alert("A série segue os irmãos Sam Winchester e Dean Winchester que viajam por toda a América \
em um Chevrolet Impala 1967 preto investigando e combatendo eventos paranormais \
e outras ocorrências inexplicáveis, muitas delas baseadas em lendas urbanas americanas e folclore, \
assim como diferentes criaturas sobrenaturais.");
});