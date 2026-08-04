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

