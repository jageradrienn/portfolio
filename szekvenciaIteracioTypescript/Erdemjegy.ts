                
                
                Érdemjegy vizsgálat

function Erdemjegyek(erdemJegy: number): string {
    var resultText: string = '';
    if (erdemJegy == 5) {
        resultText = `Az ${erdemJegy}: Jeles`;
    }
    else if (erdemJegy == 4) {
        resultText = `A ${erdemJegy}: Jó`;
    }
    else if (erdemJegy == 3) {
        resultText = `A ${erdemJegy}: Közepes`;
    }

    else if (erdemJegy == 2) {
        resultText = `A ${erdemJegy}: Elégséges`;
    }

    else if (erdemJegy == 1) {
        resultText = `Az ${erdemJegy}: Elégtelen`;
    }

    else {
        resultText = `Érvénytelen adat`;
    }
    return resultText;
}
