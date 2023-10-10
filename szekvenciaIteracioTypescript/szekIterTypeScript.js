// lnko feladat függvénye
import { Lnko } from './lnko.js';
import { Erdemjegyek } from './Erdemjegy.js';
import { Masodfoku } from './Masodfoku.js';
import { Lkkt } from './lkkt.js';
import { Koordinata } from './Koordinata.js';
import { Haromszog } from './Haromszog.js';
import { Sorozatok } from './Sorozatok.js';
import { Paros } from './Paros.js';
import { Prim} from './Prim.js';
import { RelativPrim} from './Rprim.js';
import { MinMax} from './MinMax.js';
import { Ossz} from './Ossz.js';
import { Atlag } from './Atlag.js';
import { Megszamol } from './Db.js';
import { Kivalaszto } from './Kivalaszto.js';

//TASKOBJ[selectedOBJIndex]
const TASKOBJ = [
  {
    inputID: "erdemjegy",
    fgvName: "Erdemjegyek",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="1" max="5" required style="width:2rem;">', }
    ],
    paramTomb: 0,
    testExam: "Erdemjegyek(5)",
    tsFilePath: "./Erdemjegy.ts",
    result: "Az 5: Jeles",
    resultText: "Az érdemjegy",
  },
  {
    inputID: "haromszog",
    fgvName: "Haromszog",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="1" max="99999" required>', },
      { IP: '<input type="number" id="inTest2" class="form-input" min="1" max="99999" required>', },
      { IP: '<input type="number" id="inTest3" class="form-input" min="1" max="99999" required>', }
    ],
    paramTomb: 0,
    testExam: "Haromszog(4,6,8)",
    tsFilePath: "./Haromszog.ts",
    result: "A 4cm, 6cm, 8cm oldalú háromszög megszerkeszthető",
    resultText: "",
  },
  {
    inputID: "ossz",
    fgvName: "Ossz",
    BTP: '<span id="fgv"></span> ( [ <span id="parameters"><input type="text" id="inTest1" class="form-input" min="1" max="99999" pattern="\d{1,3}(,\d{1,3}){4}" required></span> ] )',
    paramTomb: 1,
    testExam: "Ossz(12,25,42,1,2)",
    tsFilePath: "./Ossz.ts",
    result: "Az adott tömb elemeinek összege: 82",
    resultText: "",
  },
  {
    inputID: "masodfoku",
    fgvName: "Masodfoku",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="-99999" max="99999" required>', },
      { IP: '<input type="number" id="inTest2" class="form-input" min="-99999" max="99999" required>', },
      { IP: '<input type="number" id="inTest3" class="form-input" min="-99999" max="99999" required>', }
    ],
    paramTomb: 0,
    testExam: "Masodfoku(2,5,3)",
    tsFilePath: "./Masodfoku.ts",
    result: "x1 = -1, x2 = -1,5",
    resultText: "A vizsgált másodfokú egyenlet ",
  },
  {
    inputID: "sorozatok",
    fgvName: "Sorozatok",
    BTP: '<span id="fgv"></span> ( [ <span id="parameters"><input type="text" id="inTest1" class="form-input" min="-99999" max="99999" pattern="\d{1,3}(,\d{1,3}){4}" required></span> ] )',
    paramTomb: 1,
    testExam: "Sorozatok(3,6,9,12,15) vagy Sorozatok(2,4,8,32,256)",
    tsFilePath: "./Sorozatok.ts",
    result: " számtani, mértani sorozat.",
    resultText: "",
  },
  {
    inputID: "atlag",
    fgvName: "Atlag",
    BTP: '<span id="fgv"></span> ( [ <span id="parameters"><input type="text" id="inTest1" class="form-input" min="-99999" max="99999" pattern="\d{1,3}(,\d{1,3}){4}" required></span> ] )',
    paramTomb: 1,
    testExam: "Atlag(12,25,42,1,5)",
    tsFilePath: "./Atlag.ts",
    result: "A megadott tömb átlaga: 17",
    resultText: "",
  },
  {
    inputID: "lnko",
    fgvName: "Lnko",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="-99999" max="99999" required>', },
      { IP: '<input type="number" id="inTest2" class="form-input" min="-99999" max="99999" required>', }
    ],
    paramTomb: 0,
    testExam: "Lnko(10,60);",
    tsFilePath: "./lnko.ts",
    result: "10",
    resultText: "A legnagyobb közös osztó",
  },
  {
    inputID: "paros",
    fgvName: "Paros",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="-99999" max="99999" required>', },
      { IP: '<input type="number" id="inTest2" class="form-input" min="-99999" max="99999" required>', }
    ],
    paramTomb: 0,
    testExam: "Paros(1,20)",
    tsFilePath: "./Paros.ts",
    result: "Az 5 darab 1 (alsó határ) és 20 (felső határ) között generált szám: 2,6,10,12,18",
    resultText: "A generált páros számok: ",
  },
  {
    inputID: "db",
    fgvName: "Megszamol",
    BTP: '<span id="fgv"></span> ( [ <span id="parameters"><input type="text" id="inTest1" class="form-input" min="1" max="99999" pattern="\d{1,3}(,\d{1,3}){4}" required></span> ] )',
    paramTomb: 1,
    testExam: "Megszamol(2,9,4,15,36)",
    tsFilePath: "./Db.ts",
    result: "A megadott tömb páros számainak darabszáma: 3",
    resultText: "",
  },
  {
    inputID: "lkkt",
    fgvName: "Lkkt",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="-99999" max="99999" required>', },
      { IP: '<input type="number" id="inTest2" class="form-input" min="-99999" max="99999" required>', }
    ],
    paramTomb: 0,
    testExam: "Lkkt(4, 6)",
    tsFilePath: "./lkkt.ts",
    result: "12",
    resultText: "A legkisebb közös többszörös",
  },
  {
    inputID: "prim",
    fgvName: "Prim",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="-99999" max="99999" required>', },
    ],
    paramTomb: 0,
    testExam: "Prim(5)",
    tsFilePath: "./Prim.ts",
    result: "A vizsgált szám prím.",
    resultText: "",
  },
  {
    inputID: "kivalaszt",
    fgvName: "Kivalaszto",
    BTP: '<span id="fgv"></span> ( [ <span id="parameters"><input type="text" id="inTest1" class="form-input" min="-99999" max="99999" pattern="\d{1,3}(,\d{1,3}){4}" required></span> ] )',
    paramTomb: 1,
    testExam: "Kivalaszto(21,32,14,10,24)",
    tsFilePath: ".//Kivalaszto.ts",
    result: "A tömb páros számai: 32,14,10,24",
    resultText: "",
  },
  {
    inputID: "koordinata",
    fgvName: "Koordinata",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="-99999" max="99999" required>', },
      { IP: '<input type="number" id="inTest2" class="form-input" min="-99999" max="99999" required>', },
    ],
    paramTomb: 0,
    testExam: "Koordinata(3, 4)",
    tsFilePath: "./Koordinata.ts",
    result: "A(z) (3,4) koordináta az első síknegyedben van",
    resultText: "",
  },
  {
    inputID: "rprim",
    fgvName: "RelativPrim",
    paraminputElements: [
      { IP: '<input type="number" id="inTest1" class="form-input" min="-99999" max="99999" required>', },
      { IP: '<input type="number" id="inTest2" class="form-input" min="-99999" max="99999" required>', }
    ],
    paramTomb: 0,
    testExam: "RelativPrim(5,7)",
    tsFilePath: "./Rprim.ts",
    result: "A(z) 5 és 7 relatív prímszámok",
    resultText: "",
  },
  {
    inputID: "minMax",
    fgvName: "MinMax",
    BTP: '<span id="fgv"></span> ( [ <span id="parameters"><input type="text" id="inTest1" class="form-input" min="-99999" max="99999" pattern="\d{1,3}(,\d{1,3}){4}" required></span> ] )',
    paramTomb: 1,
    testExam: "MinMax(4,14,20,12,9)",
    tsFilePath: "./MinMax.ts",
    result: "A tömb minimuma: 4, indexe: 0, maximuma: 20, indexe: 2.",
    resultText: "",
  },


];

let selectedInput = '';
let selectedOBJIndex = 0;
let inputsParameterArray = [];


radios.addEventListener("click", function (event) {
  if (event.target.type == "radio") {
    selectedInput = event.target.id;
  }
  (selectedInput) 
  ? (OBJKereso(), Kitolto(selectedOBJIndex),TypescriptKodBetolto(TASKOBJ[selectedOBJIndex].tsFilePath))
  : null;
});

run.addEventListener("click", () => {
  if (document.querySelector("#fgv").innerHTML!='') { 
   if (TASKOBJ[selectedOBJIndex].paramTomb == 0) {
      let inputs = document.querySelectorAll(".form-input");
     inputs.forEach((item, index) => { inputsParameterArray[index] = item.value }
     );
   }
   else{
    let Validalando= document.querySelector("#inTest1").value;
    Validates(Validalando) ? inputsParameterArray[0]= (Validalando).split(",") :alert("5 db számot adjon meg vesszővel elválasztva!");
    
   }

   if(!(inputsParameterArray.includes(''))){

   FuttatandoFuggvenyKereso(TASKOBJ[selectedOBJIndex]);
   }
   else{
    alert("Minden mező kitöltése kötelező!");
   }
  }
})


function OBJKereso() {  
  TASKOBJ.forEach((item, index) => {
    (selectedInput == item.inputID) ? selectedOBJIndex = index: null;
  })
}

function Kitolto(index) {

  document.querySelector("#pelda").innerText = TASKOBJ[index].testExam;
  document.querySelector("#pRes").innerText = TASKOBJ[index].result;
  //document.querySelector("#fgv").innerText = TASKOBJ[index].fgvName;


  if (TASKOBJ[index].paramTomb == 1) {
    document.querySelector("#beirtTest").style.display = "block";
    document.querySelector("#egyeni").innerHTML = 'Egyéni tesztesethez hívja meg a példa szerint egy 5 elemű tömbbel a <span id="peldaFgv"></span> függvényt!';
    document.querySelector("#beirtTest").innerHTML = TASKOBJ[index].BTP;
    document.querySelector("#peldaFgv").innerText = TASKOBJ[index].fgvName;
    document.querySelector("#fgv").innerText = TASKOBJ[index].fgvName;
  }
  else {
    
    document.querySelector("#beirtTest").style.display = "block";
    document.querySelector("#peldaFgv").innerText = TASKOBJ[index].fgvName;
    document.querySelector("#fgv").innerText = TASKOBJ[index].fgvName;
    let szoveg = ''
    TASKOBJ[index].paraminputElements.forEach((item) => {
      szoveg += item.IP + ' ';      
    })
    document.querySelector("#parameters").innerHTML = szoveg;
  }

}

function TypescriptKodBetolto(tsFilePath) {


  // XMLHttpRequest objektum létrehozása
  let xhr = new XMLHttpRequest();

  // GET kérés küldése a fájl letöltéséhez
  xhr.open('GET', tsFilePath);

  // Visszahívás beállítása a fájl betöltésekor
  xhr.onload = function () {
    if (xhr.status === 200) {
      // A fájl tartalma elérhető a responseText tulajdonságban
      // Betöltjük a kódot a textmezőbe
      document.querySelector("#kodsorok").innerText = xhr.responseText;
    }
  };

  // Küldjük a kérést
  xhr.send();
}


function FuttatandoFuggvenyKereso(valasztottOBJ) {
  switch (valasztottOBJ.inputID) {
    case "erdemjegy":
      EredmenyKiiro(Erdemjegyek(inputsParameterArray[0]));
      break;
    case "lnko":
      EredmenyKiiro(Lnko(inputsParameterArray[0], inputsParameterArray[1]));
      break;
    case "masodfoku":
      EredmenyKiiro(Masodfoku(inputsParameterArray[0], inputsParameterArray[1], inputsParameterArray[2]));
      break;
    case "lkkt":
      EredmenyKiiro(Lkkt(inputsParameterArray[0], inputsParameterArray[1]));
      break;
    case "koordinata":
      EredmenyKiiro(Koordinata(inputsParameterArray[0], inputsParameterArray[1]));
      break;
    case "haromszog":
      EredmenyKiiro(Haromszog(inputsParameterArray[0], inputsParameterArray[1], inputsParameterArray[2]));
      break;
    case "sorozatok":
      EredmenyKiiro(Sorozatok(inputsParameterArray[0]));
      break;
    case "paros":
      EredmenyKiiro(Paros(inputsParameterArray[0], inputsParameterArray[1]));
      break;
    case "prim":
      EredmenyKiiro(Prim(inputsParameterArray[0]));
      break;
    case "rprim":
      EredmenyKiiro(RelativPrim(inputsParameterArray[0], inputsParameterArray[1]));
      break; 
    case "minMax":
      EredmenyKiiro(MinMax(inputsParameterArray[0]));
      break;
    case "ossz":
      EredmenyKiiro(Ossz(inputsParameterArray[0]));
      break;
    case "atlag":
      EredmenyKiiro(Atlag(inputsParameterArray[0]));
      break; 
    case "db":
      EredmenyKiiro(Megszamol(inputsParameterArray[0]));
      break;
    case "kivalaszt":
      EredmenyKiiro(Kivalaszto(inputsParameterArray[0]));
      break;    
  }
}


function Validates(vizsgaltInput){

  //let reg=/^(-?\d{1,5}(\.\d{1,2})?){5}$/;
    //if (reg.test(vizsgaltInput)) {
      let reg = /^-?\d{1,5}(\.\d{1,2})?$/;
      let inputArray = vizsgaltInput.split(',');
  if (inputArray.length === 5 && inputArray.every(num => reg.test(num))) {
      return true;
    } else {
      return false;
    }

}

function EredmenyKiiro(res) {
  if (TASKOBJ[selectedOBJIndex].resultText == "") {
    document.querySelector("#results").innerHTML = `${res}`
  }
  else {
    document.querySelector("#results").innerHTML = `${TASKOBJ[selectedOBJIndex].resultText}: ${res} `
  }

}


