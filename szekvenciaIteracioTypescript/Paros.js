export function Paros(also, felso) {
    var alsoH=Number(also);
    var felsoH= Number(felso);
    var genTomb = [];
    var temp = 0;
    alsoH > felsoH ? (temp = alsoH, alsoH = felsoH, felsoH = temp) : alsoH;
    for (var i = 0; i < 5; i++) {
        var genSzam = Math.round(Math.random()*(felsoH-alsoH))+alsoH;
        genSzam % 2 != 0 ? ((genSzam == felsoH ? genSzam-- : genSzam),(genSzam == alsoH ? genSzam++ : genSzam),genSzam++) : genSzam;
        genTomb.push(genSzam);
    }
    return genTomb.sort(Osszehasonlito);
}

function Osszehasonlito(a, b) {
    return a - b;
  }