/* ==================================================
   AETERNUM
   Script v2
================================================== */

/* ===========================
   ELEMENTOS DEL DOM
=========================== */

const landing = document.getElementById("landing");
const counterScene = document.getElementById("counterScene");
const galleryScene = document.getElementById("galleryScene");
const letterScene = document.getElementById("letterScene");
const finalScene = document.getElementById("finalScene");

const introText = document.getElementById("introText");

const enterButton = document.getElementById("enterButton");
const nextScene = document.getElementById("nextScene");
const nextPhoto = document.getElementById("nextPhoto");

const galleryImage = document.getElementById("galleryImage");
const photoText = document.getElementById("photoText");

const envelope = document.getElementById("envelope");
const letterText = document.getElementById("letterText");

/* ===========================
   INTRO
=========================== */

const introMessage =
"Para la mujer que consiguió cambiar mi vida...";

let introIndex = 0;

function typeWriter(){

    if(introIndex < introMessage.length){

        introText.innerHTML =
            introMessage.substring(0,introIndex+1) +
            '<span class="cursor"></span>';

        introIndex++;

        setTimeout(typeWriter,55);

    }else{

        introText.textContent = introMessage;

    }

}

window.addEventListener("load",()=>{

    typeWriter();

});

/* ===========================
   CAMBIO DE ESCENAS
=========================== */

function showScene(scene){

    document
        .querySelectorAll(".scene")
        .forEach(section=>{

            section.classList.add("hidden");

        });

    scene.classList.remove("hidden");

}

function fadeTo(current,next){

    current.classList.add("fadeOut");

    setTimeout(()=>{

        current.classList.remove("fadeOut");

        showScene(next);

    },700);

}

/* ===========================
   BOTÓN COMENZAR
=========================== */

enterButton.addEventListener("click",()=>{

    if(navigator.vibrate){

        navigator.vibrate(40);

    }

    fadeTo(landing,counterScene);

});

/* ===========================
   CONTADOR
=========================== */

const startDate = new Date("2026-01-04T17:30:00");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCounter(){

    const now = new Date();

    let diff = now - startDate;

    if(diff < 0){

        diff = 0;

    }

    const totalSeconds = Math.floor(diff/1000);

    const d = Math.floor(totalSeconds/86400);

    const h = Math.floor((totalSeconds%86400)/3600);

    const m = Math.floor((totalSeconds%3600)/60);

    const s = totalSeconds%60;

    days.textContent=d;

    hours.textContent=String(h).padStart(2,"0");

    minutes.textContent=String(m).padStart(2,"0");

    seconds.textContent=String(s).padStart(2,"0");

}

setInterval(updateCounter,1000);

updateCounter();

/* ===========================
   SIGUIENTE ESCENA
=========================== */

nextScene.addEventListener("click",()=>{

    fadeTo(counterScene,galleryScene);

});

/* ===========================
   GALERÍA
=========================== */

const photos = [

    {
        image:"images/foto1.jpg",
        text:"Sin darme cuenta, aquel día encontré el lugar donde siempre quiero volver."
    },

    {
        image:"images/foto2.jpg",
        text:"Hay besos que duran unos segundos... y recuerdos que duran para siempre."
    },

    {
        image:"images/foto3.jpg",
        text:"Aquí ya no veía una fotografía. Veía mi felicidad."
    },

    {
        image:"images/foto4.jpg",
        text:"Mi sitio favorito dejó de ser un lugar. Empezó a ser una persona."
    },

    {
        image:"images/foto5.jpg",
        text:"Contigo descubrí que el amor también puede sentirse como paz."
    },

    {
        image:"images/foto6.jpg",
        text:"Ojalá todos los caminos que me queden por recorrer sean contigo de la mano."
    }

];

let currentPhoto = 0;

function showPhoto(){

    galleryImage.style.opacity = 0;
    photoText.style.opacity = 0;

    setTimeout(()=>{

        galleryImage.src = photos[currentPhoto].image;

        photoText.textContent = photos[currentPhoto].text;

        galleryImage.style.opacity = 1;
        photoText.style.opacity = 1;

    },300);

}

showPhoto();

nextPhoto.addEventListener("click",()=>{

    currentPhoto++;

    if(currentPhoto < photos.length){

        showPhoto();

    }else{

        fadeTo(galleryScene,letterScene);

    }

});

/* ===========================
   CARTA
=========================== */

const letter = `

Alicia...

Hay personas que llegan a tu vida sin hacer ruido...

y terminan convirtiéndose en tu lugar favorito.

Gracias por aparecer cuando menos lo esperaba.

Gracias por las risas.

Por los abrazos.

Por tu paciencia.

Por quererme incluso cuando yo mismo no era capaz.

Desde que llegaste...

todo tiene más sentido.

Y aunque el futuro sea incierto...

hay una única certeza que tengo.

Quiero caminarlo contigo.

Siempre.

Te quiero muchísimo.

❤️

Borja
`;

let letterIndex = 0;
let writing = false;

function writeLetter(){

    if(writing) return;

    writing = true;

    envelope.classList.add("open");

    setTimeout(()=>{

        const timer = setInterval(()=>{

            letterText.textContent += letter.charAt(letterIndex);

           const paper = document.querySelector(".paper");

paper.style.height =
    (letterText.scrollHeight + 90) + "px";

            letterIndex++;

            letterText.scrollTop = letterText.scrollHeight;

            if(letterIndex >= letter.length){

                clearInterval(timer);

                setTimeout(()=>{

                    fadeTo(letterScene,finalScene);

                },5000);

            }

        },35);

    },900);

}

envelope.addEventListener("click",writeLetter);
