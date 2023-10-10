/*
Animáció lényege:

const element = document.getElementById('my-element'); // Az elem, amelyen az animációt indítjuk

const keyframes = [		//Ez egy objektum típusú tömb!
  { transform: 'translateX(0px)' },
  { transform: 'translateX(100px)' },
  { transform: 'translateX(0px)' }
];

const options = {
  duration: 1000, // Az animáció időtartama 1 másodperc
  iterations: Infinity // Az animáció végtelen ismétlést végez
};

const animation = element.animate(keyframes, options); // Az animáció elindítása
 */

/*
AI mondta... bent van a chatben

transform-origin: bottom right;
transform: translate(-50%, -50%) translate(-500px, -500px);
#myElement {
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: red;
  transform-origin: bottom right;
  transform: translate(-50%, -50%) translate(-500px, -500px);
}


*/

//Ebben már adiveket mozgatom, így esélyem van azon belül a képet is elmozdítani.

const kepElemTarolo = document.querySelector("#imgContent");
let kepek = document.querySelectorAll("#imgContent div");                // kép div-ek tömbje
let egyKepWidth = document.querySelector("#kep1 img").width;
let egyKepHeight = document.querySelector("#kep1 img").height;
const kepTulajdonsagok = kepElemTarolo.getBoundingClientRect();
//Ez azért kell, mert ha nincs CSS-ben állítva left, akkor nem tudja kiolvasni
//a képek nagy divjének a responziv méretét kapod meg vele.


//poziciók meghatározása objektum típusú tömbökben!

//kép center pozíció opbjektum: a képek tárolójának kezdő pontja +szélessége/2 + egy kép szélesség fele
//ez olyan, mint a left: 50%, transform: translateX(-50%)
const kepCenterPoz = {
  x: (Number(kepTulajdonsagok.left) + (Number(kepTulajdonsagok.width)) / 2) - (egyKepWidth) / 2,
  y: (Number(kepTulajdonsagok.top) + (Number(kepTulajdonsagok.height)) / 2) - (egyKepHeight) / 2
};


//Ezzel határozom meg a képek divjének, azaz az ablak jobb alsó sarkának helyét
const kivezeto = {
  x: Number(kepTulajdonsagok.width),
  y: Number(kepTulajdonsagok.height)
}
//Ezzel határozom meg a képek divjének, azaz az ablak jobb alsó sarkának helyét
let viewportjobbAlsoX = window.innerWidth;
let viewportjobbAlsoY = window.innerHeight;



//Animáció keyframes


const Kezdes = [
  { transform: `translate( ${kepCenterPoz.x}px,${kepCenterPoz.y}px)` },

];

const kozeprolJobbraLe = [		//Ez egy objektum típusú tömb!
  // Jobb sarokból középre a optionReverse paraméterrel megoldható
  { transform: `translate( ${viewportjobbAlsoX + kivezeto.x}px,${viewportjobbAlsoY + kivezeto.y}px)` },

];

const balrolKozepreLe = [
  //{ transform: 'translate(-100%, -100%)' }, //Ez viszi vissza fel a sarokba kezdésre újra.
  { transform: `translate( ${kepCenterPoz.x}px,${kepCenterPoz.y}px)` },

];

const jobbrolKozepreFel = [		//Ez egy objektum típusú tömb!

  { transform: `translate( ${viewportjobbAlsoX}px,${viewportjobbAlsoY}px)` },
  { transform: `translate( ${kepCenterPoz.x}px,${kepCenterPoz.y}px)` },
];

const KozeprolBalraFel=[
  { transform: `translate( ${-viewportjobbAlsoX}px,${-viewportjobbAlsoY}px)` },
]


const optionsNormal = {
  duration: 1200,
  easing: "ease-in",
  direction: "normal",
  fill: "forwards",
};


const Kepcsusztatas = [
  { transform: 'translate(0px, 0px)' },
  { transform: 'translate(25px,25px)' }

]
const KepcsusztatasVissza = [
  { transform: 'translate(-25px,-25px)' }

]

const picOptions = {
  duration: 1000,
  easing: "ease-in",
  direction: "normal",
  fill: "forwards",
};


//események kezelése


window.addEventListener("load", () => {
  Mozgato(Kezdes, optionsNormal, kepek[0]);
  setTimeout(() => KepCsusztato(kepek[0]), 1000);
  kepek[0].classList.add("active");
}
);

kepElemTarolo.addEventListener("click", () => Kepkezelo(1, 1));

let voltScroll = 0;
document.addEventListener("wheel", function (event) {
  voltScroll++;
  event.preventDefault();
  if (event.deltaY > 0) { Kepkezelo(voltScroll, 1) }
  else { Kepkezelo(voltScroll, -1) }
});



//Mozgató fgvek:
function EloreMozgatasok(kep1, kep2) {

  if (kep2 != '') {
    Mozgato(kozeprolJobbraLe, optionsNormal, kep1);
    kep1.classList.remove("active");
    Mozgato(balrolKozepreLe, optionsNormal, kep2);
    kep2.classList.add("active");
    setTimeout(() => KepCsusztato(kep2), 1000);    
  }
  setTimeout(() => voltScroll = false, 1000);
}

function HatraMozgatasok(kep1, kep2) {

  if (kep2 != '') {
    Mozgato(KozeprolBalraFel, optionsNormal, kep1);
    kep1.classList.remove("active");
    Mozgato(jobbrolKozepreFel, optionsNormal, kep2);
    kep2.classList.add("active");
    setTimeout(() => KepCsusztatoVissza(kep2), 1000);    
  }
  setTimeout(() => voltScroll = false, 1000);
}

function Mozgato(toFrom, optionsVer, kepszam) {
  kepszam.animate(toFrom, optionsVer);
}

//Itt minden eseményre kiszámolódik a viewporton szereplő két kép indexe. Ez okozza a képek cseréjét.

function Kepkezelo(voltScroll, ScrollIrany) {
  if (voltScroll == 1) {
 
    let eloreKep = '';
    let hatraKep = '';
    kepek.forEach((item, index, kepek) => {
      if (item.classList.contains("active")) {
        activeKep = item;
        if (activeKep.id == "kep1") {
          eloreKep = kepek[index + 1];
          //hatraKep=kepek.length-1;
        }
        else if (activeKep.id == "kep4") {
          //eloreKep=kepek[0];
          hatraKep = kepek[index - 1]
        }
        else {
          eloreKep = kepek[index + 1];
          hatraKep = kepek[index - 1]
        }

      }

    });
    if (ScrollIrany == 1) { EloreMozgatasok(activeKep, eloreKep) }
    else { HatraMozgatasok(activeKep, hatraKep) }


  }
}

function KepCsusztato(kep2) {
  let csusztatandoKep = kep2.lastChild;
  csusztatandoKep.animate(Kepcsusztatas, picOptions);
}


function KepCsusztatoVissza(kep2){
  let csusztatandoKep = kep2.lastChild;
  csusztatandoKep.animate(KepcsusztatasVissza, picOptions);
}
//bevezetéskor a képet még tovább tolni egy újabb animációval a diven belül!


