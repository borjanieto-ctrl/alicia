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
