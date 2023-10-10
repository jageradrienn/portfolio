export function Sorozatok(sor) {
    var szamtaniE = true;
    var mertaniE = true;
    for (var i = 0; (i <= sor.length - 3) && ((szamtaniE) || (mertaniE)); i++) {
        if (sor[i + 1] - sor[i] != sor[i + 2] - sor[i + 1]) {
            szamtaniE = false;
        }
        ;
        if (sor[i + 1] / sor[i] != sor[i + 2] / sor[i + 1]) {
            mertaniE = false;
        }
        ;
    }
    if ((szamtaniE) && (mertaniE)) {
        return ("A sorozat számtani és mértani!");
    }
    else if ((szamtaniE)) {
        return ("A sorozat számtani!");
    }
    else if ((mertaniE)) {
        return ("A sorozat mértani!");
    }
    else {
        return ("A sorozat NEM számtani és NEM mértani!");
    }
}
