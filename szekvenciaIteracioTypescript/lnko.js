

export function Lnko(szamEgy, szamKetto) {
    var lnko = 1;
    var min=Math.min(szamEgy, szamKetto);
    for (var i = 2; i <= min; i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0) {
            lnko = i;
        }
    }
        return lnko;
}
