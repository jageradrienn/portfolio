export function Prim(vizsgaltSzam) {
    var oszto = 1;
    for (var i = 2; i <= vizsgaltSzam; i++) {
        (vizsgaltSzam % i == 0) ? oszto++ : null;
    }
    if (oszto == 2) {
        return "A ".concat(vizsgaltSzam, " pr\u00EDm");
    }
    else {
        return "A ".concat(vizsgaltSzam, " NEM pr\u00EDm");
    }
}
