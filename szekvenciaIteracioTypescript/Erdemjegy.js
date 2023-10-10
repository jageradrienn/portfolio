

export function Erdemjegyek(Jegy) {
    var resultText = '';
    if (Jegy == 5) {
        resultText = "Az ".concat(Jegy, ": Jeles");
    }
    else if (Jegy == 4) {
        resultText = "A ".concat(Jegy, ": J\u00F3");
    }
    else if (Jegy == 3) {
        resultText = "A ".concat(Jegy, ": K\u00F6zepes");
    }
    else if (Jegy == 2) {
        resultText = "A ".concat(Jegy, ": El\u00E9gs\u00E9ges");
    }
    else if (Jegy == 1) {
        resultText = "Az ".concat(Jegy, ": El\u00E9gtelen");
    }
    else {
        resultText = "\u00C9rv\u00E9nytelen adat";
    }
    return resultText;
}

