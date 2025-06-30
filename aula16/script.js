const titulo = document.getElementById("titulo");

titulo.style.color = "blue";
titulo.style.textAlign = "center";
titulo.style.fontSize = "60px";
titulo.innerHTML = "Manipulando o DOM <br> com JavaScript";

const verdes = document.getElementsByClassName("fundo-verde");

for (let i = 0; i < verdes.length; i++) {
    verdes[i].style.backgroundColor = "red";
};

const paragrafos = document.getElementsByTagName("p");
paragrafos[1].style.fontWeight = "bold";

const title = document.querySelector("title");
title.textContent = "Manipulando o DOM";

const img = document.querySelector('img')

function mudarFoto(){
    if(img.src.includes('js1.png')){
        img.src = 'js2.png'
    }else{
        img.src = 'js1.png'
    }
}

const h4 = document.createElement("h4");
h4.textContent = "Criando Elemento";

const body = document.querySelector("body");
body.appendChild(h4);

//titulo.remove();
//img.remove();