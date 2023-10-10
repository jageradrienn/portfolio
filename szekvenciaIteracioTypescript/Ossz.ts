

       Összegzés tétele 5 elemű tömbre

function Ossz(vizsgaltTomb:Array<number>):string{
    vizsgaltTomb=vizsgaltTomb.map(item => Number(item));
    var ossz:number=0;
    vizsgaltTomb.forEach( (item:number) => (ossz+=item));
    return `A tömb elemeinek össege: ${ossz}`;
}
