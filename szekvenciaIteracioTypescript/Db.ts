

Megszámlálás tétele 5 elemű tömbre párosz számokkal

function Megszamol(vizsgaltTomb:Array<number>):string{
    vizsgaltTomb=vizsgaltTomb.map(item => Number(item));
    var ossz:number=0;
    vizsgaltTomb.forEach( (item:number) => item%2==0 ? ossz++ : item);
    return `A megadott tömb páros számainak darabszáma: ${ossz}`;
}