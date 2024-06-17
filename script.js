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

const episodios = [
    {
        id: 1,
        episodio: 'T1:E01',
        tempo: '40min',
        imagem: './imagens/bloodlines.png'
    },
    {
        id: 2,
        episodio: 'T1:E02',
        tempo: '40min',
        img: './imagens/botao-play.png',
        imagem: './imagens/bugs.png'
    },
    {
        id: 3,
        episodio: 'T1:E03',
        tempo: '40min',
        imagem: './imagens/carry_on.png'
    },
    {
        id: 4,
        episodio: 'T1:E04',
        tempo: '40min',
        imagem: './imagens/scoobynatural.png'
    },
    {
        id: 5,
        episodio: 'T1:E05',
        tempo: '40min',
        imagem: './imagens/something.png'
    },
    {
        id: 6,
        episodio: 'T1:E06',
        tempo: '40min',
        imagem: './imagens/swan_song.png'
    },
    {
        id: 7,
        episodio: 'T1:E07',
        tempo: '40min',
        imagem: './imagens/trocando_de_canal.png'
    }
]
//
const listaEpisodio = document.getElementById('lista-episodios');
episodios.forEach(episodio => {
    const cardEpisodio = document.createElement('div');
    cardEpisodio.className = 'slide-imgs item current-item btn-episodio';
    cardEpisodio.innerHTML = `
    <img src="${episodio.imagem}" alt="Imagem do episódio">
    <div><button onclick="assistirEpisodio(${episodio.id})">Play</button></div>
    <span>${episodio.episodio}</span>
    <span>${episodio.tempo}</span>
    `
    listaEpisodio.appendChild(cardEpisodio);
})
function assistirEpisodio(id) {
    const episodio = episodios.find(episodio => episodio.id === id);
    alert(`Você está assistindo o episódio ${episodio.episodio}`);

}

const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;
console.log(maxItems);

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -= 0;
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