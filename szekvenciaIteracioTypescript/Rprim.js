export function RelativPrim(szamEgy, szamKetto) {
    var lnko = 1;
    for (var i = 2; i <= szamEgy; i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0) {
            lnko = i;
        }
    }
    if (lnko == 1) {
        return `A(z) ${szamEgy} és ${szamKetto} relatív prímszám!`;
    }
    else {
        return `A(z) ${szamEgy} és ${szamKetto} NEM relatív prímszám, legnagyobb közös osztójuk: ${lnko}!`;
    }
}
