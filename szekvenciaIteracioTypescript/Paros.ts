 

5 db véletlen páros szám generálása alsó és felső határok között
 
 function Paros(also:number,felso:number):Array<number> {
    var alsoH:number=Number(also);
    var felsoH:number= Number(felso);
    var genTomb:Array<number> = [];
    var temp:number = 0;
    alsoH > felsoH ? (temp = alsoH, alsoH = felsoH, felsoH = temp) : alsoH;
    for (var i = 0; i < 5; i++) {
        var genSzam = Math.round(Math.random()*(felsoH-alsoH))+alsoH;
        genSzam % 2 != 0 ? ((genSzam == felsoH ? genSzam-- : genSzam),(genSzam == alsoH ? genSzam++ : genSzam),genSzam++) : genSzam;
        genTomb.push(genSzam);
    }
    return genTomb.sort(Osszehasonlito);
}

function Osszehasonlito(a:number, b:number) {
    return a - b;
  }