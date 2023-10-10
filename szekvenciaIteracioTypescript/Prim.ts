

            Prím szám vizsgálat

function Prim(vizsgaltSzam: number): string {
    var oszto: number = 1;
    for (let i: number = 2; i <= vizsgaltSzam; i++) {
        (vizsgaltSzam % i == 0) ? oszto++ : null
    }

    if (oszto == 2) {
        return `A ${vizsgaltSzam} prím`;
    }
    else {
        return `A ${vizsgaltSzam} NEM prím`;
    }
}