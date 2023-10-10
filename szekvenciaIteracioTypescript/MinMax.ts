

  Minimum maximum keresés tétele 5 elemű tömbben

function MinMax(vizsgaltTomb:Array<number>):string{
    vizsgaltTomb=vizsgaltTomb.map(item => Number(item));
    var minErtek:number=vizsgaltTomb[0];
    var minIndex:number=0;
    var maxErtek:number=vizsgaltTomb[0];
    var maxIndex:number=0;
    
    vizsgaltTomb.forEach( (item:number, index:number) => {
        item<minErtek ? (minErtek=item, minIndex=index):item;
        item>maxErtek ? (maxErtek=item, maxIndex=index):item;
    });
    return `A tömb minimuma: ${minErtek}, indexe: ${minIndex}, maximuma: ${maxErtek}, indexe: ${maxIndex}.`;
}
