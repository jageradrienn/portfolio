

   Kiválasztás tétele 5 elemű tömbre páros számokkal

function Kivalaszt(vizsgaltTomb:Array<number>):string{
    vizsgaltTomb=vizsgaltTomb.map(item=> Number(item));
    var parosak:Array<number>=[];
    vizsgaltTomb.forEach( (item:number) => item%2==0 ? parosak.push(item) : item);
    return `A megadott tömb páros számai: ${parosak}`;
}