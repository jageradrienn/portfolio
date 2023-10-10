

        Átlagszámítás tétele 5 elemű tömbre

function Atlag(vizsgaltTomb:Array<number>):string{
    vizsgaltTomb=vizsgaltTomb.map(item => Number(item));
    var ossz:number=0;
    vizsgaltTomb.forEach( (item:number) => (ossz+=item));
    return `A megadott tömb átlaga: ${(ossz/5).toFixed(2)}`;
}
