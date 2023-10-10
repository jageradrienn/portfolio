interface Dolgozok {
    nev: string,
    lakcim: string,
    szuletesiDatum: string
}

interface Norma {
    liter: number,
    norma: string
}

const DolgozoAdatok: Dolgozok[] = [
    {
        nev: "Kiss Péter",
        lakcim: "Budapest, Vigadó tér 5.",
        szuletesiDatum: "1980.05.14"
    },
    {
        nev: "Horváth Mariann",
        lakcim: "Budapest, Szellő u. 21.",
        szuletesiDatum: "1978.01.25"
    },
    {
        nev: "Sebők Viola",
        lakcim: "Budapest, Napocska u. 12.",
        szuletesiDatum: "1982.03.13"
    },
    {
        nev: "Jóó Csaba",
        lakcim: "Budapest, Kerepesi u. 3.",
        szuletesiDatum: "1981.02.24"
    },
    {
        nev: "Nagy Lenke",
        lakcim: "Budapest, Fogarasi u 10.",
        szuletesiDatum: "1980.06.14"
    }]



const BenzinNorma: Norma[] = [
    {
        liter: 7.6,
        norma: "1000 cm3-ig 7,6 l/100km"
    },
    {
        liter: 8.6,
        norma: "1001-1500 cm3 között 8,6 l/100km"
    },
    {
        liter: 9.5,
        norma: "1501-2000 cm3 között 9,5 l/100km"
    },
    {
        liter: 11.4,
        norma: "2001-3000 cm3 között 11,4 l/100km"
    },
    {
        liter: 13.3,
        norma: "3001 cm3 fölött 13,3 l/100km"
    }
]

const DizelNorma: Norma[] = [
    {
        liter: 5.7,
        norma: "1500 cm3-ig 5,7 l/100km"
    },
    {
        liter: 6.7,
        norma: "1501-2000 cm3 között 6,7 l/100km"
    },
    {
        liter: 7.6,
        norma: "2001-3000 cm3 között 7,6 l/100km"
    },
    {
        liter: 9.5,
        norma: "3001 cm3 fölött 9,5 l/100km"
    }
]

let Animalhatok: boolean = false;

function SelectKitolto(celElemId: string, adatok: any[], optionValue: keyof any, optionText: keyof any): void {
    let elem: any = document.querySelector(`#${celElemId}`);

    if (elem !== null) {
        elem.innerHTML = `<option value=""></option>`
        adatok.forEach(item => {
            const optionElem = document.createElement('option');
            optionElem.value = item[optionValue];
            optionElem.text = item[optionText];
            elem.appendChild(optionElem);
        })

    }
}

window.onload = function (): void {
    SelectKitolto('nev', DolgozoAdatok, "nev", "nev");
    /*const arInput:HTMLInputElement | null = document.querySelector("#ar");
    let voltKatt:boolean=false;
    let Db:number=0;
    arInput.addEventListener("click", ()=> {voltKatt=true; Db++} );
    arInput.addEventListener("mouseleave", ()=>{if ((voltKatt) && (Db==1)) {CarEllenorzes("ar"); voltKatt = false} });*/
};

function szemelyesKitolo(value: string): void {
    let lakcim: HTMLInputElement | null = document.querySelector("#lakcim");
    let szulDatum: HTMLInputElement | null = document.querySelector("#szulDatum");
    let AdottDolgozo: Dolgozok[] = DolgozoAdatok.filter(item => item.nev == value);

    if (AdottDolgozo.length > 0) {
        lakcim.value = AdottDolgozo[0].lakcim;
        szulDatum.value = AdottDolgozo[0].szuletesiDatum;
    }

    setTimeout(function () {
        CardAnimate('personal', Personalkeyframes, AnimateOption)
    }, 100);

    setTimeout(function () {
        CardAnimate('car', carKeyframes1, AnimateOption);
        let mainCard: HTMLElement | null = document.querySelector("#carCard");
        mainCard.style.zIndex = "1000";

    }, 800);


}

function NormaKitolto(value: string): void {
    (value == "benzin") ? SelectKitolto('norma', BenzinNorma, "liter", "norma") : SelectKitolto('norma', DizelNorma, "liter", "norma")
}





function CarEllenorzes(elem: string): void {
    let form = document.querySelector(`#${elem}`);
    let inputok: NodeListOf<HTMLInputElement> | null = form?.querySelectorAll("input");
    let selectMezok: NodeListOf<HTMLSelectElement> | null = form?.querySelectorAll("select");

    let inputErtekek: HTMLInputElement[] = Array.from(inputok).filter(item => item.value === "");
    let selectErtekek: HTMLSelectElement[] = Array.from(selectMezok).filter(item => item.value === "");

    if (inputErtekek.length > 0 || selectErtekek.length > 0) {
        alert("Kérem töltsön ki, vagy fel minden mezőt!");
    } else {
        setTimeout(function () {
            CardAnimate('car', carKeyframes2, AnimateOption)
        }, 500);
        Animalhatok = true;
    }
    if (Animalhatok) {
        setTimeout(function () {
            CardAnimate('line', carKeyframes1, AnimateOption)
            let CarCard: HTMLElement | null = document.querySelector("#carCard");
            delete CarCard.style.zIndex;
            let mainCard: HTMLElement | null = document.querySelector("#lineCard");
            mainCard.style.zIndex = "1000";
        }, 800);

    }
}


function Ellenorzes(): void {
    let inputok: NodeListOf<HTMLInputElement> | null = document.querySelectorAll("input");
    let selectMezok: NodeListOf<HTMLSelectElement> | null = document.querySelectorAll("select");

    let inputErtekek: HTMLInputElement[] = Array.from(inputok).filter(item => item.value === "");
    let selectErtekek: HTMLSelectElement[] = Array.from(selectMezok).filter(item => item.value === "");

    if (inputErtekek.length > 0 || selectErtekek.length > 0) {
        alert("Kérem töltsön ki, vagy fel minden mezőt!");
    } else {
        Szamitas();
    }
}

function Szamitas(): void {
    let utikoltseg: HTMLElement = document.querySelector("#utikoltseg");
    let amortizacio: HTMLElement = document.querySelector("#amortizacio");
    let osszesKoltseg: HTMLElement = document.querySelector("#osszesKoltseg");
    let norma: HTMLSelectElement = document.querySelector("#norma");
    let ar: HTMLInputElement = document.querySelector("#ar");
    let tav: HTMLInputElement = document.querySelector("#tav");
    utikoltseg.innerText = `${Math.round((parseFloat(norma.value) * Number(ar.value) * Number(tav.value)) / 100)}`;
    amortizacio.innerText = `${Number((tav.value)) * 15}`;
    osszesKoltseg.innerText = `${Number(utikoltseg.innerText) + Number(amortizacio.innerText)}`;
    setTimeout(function () {
        CardAnimate('line', lineKeyframes2, AnimateOption)
    }, 200);

    setTimeout(function () {
        CardAnimate('koltseg', carKeyframes1, AnimateOption)
    }, 200);

}

interface Keyframe {
    transform: string;
}

const Personalkeyframes: Keyframe[] = [
    { transform: 'none' },
    { transform: 'translateX(-120%) scale(0.8)' }
]

const carKeyframes1: Keyframe[] = [
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
]

const carKeyframes2: Keyframe[] = [
    { transform: 'none' },
    { transform: 'translateX(120%) scale(0.8)' }
]

const lineKeyframes2: Keyframe[] = [
    { transform: 'none' },
    { transform: 'translateY(-40%) scale(0.8)' }
]





interface AnimateOptions {
    duration: number,
    easing: string,
    direction: any,
    fill: any
}


const AnimateOption: AnimateOptions = {
    duration: 400,
    easing: 'ease-in',
    direction: "normal",
    fill: "forwards"
}

function CardAnimate(elem: string, keyframes: Keyframe[], AnimateOption: AnimateOptions): void {
    let card: HTMLElement | null = document.querySelector(`#${elem}`);
    card.style.display = "block";
    card.animate(keyframes, AnimateOption);


}

/*
function CardAnimate(elem:string, nev:string):void{
  let card: HTMLElement | null = document.querySelector(`#${elem}`);
  card.style.animationName = nev;
}
*/
