

                Szerkeszthető háromszög vizsgálat

function Haromszog(a:number,b:number,c:number):string{
    if ( (Number(a) + Number(b) > Number(c)) && (Number(b) + Number(c) > Number(a)) && (Number(a) + Number(c) > Number(b))) {
            return `A ${a}cm, ${b}cm, ${c}cm oldalú háromszög megszerkeszthető`;
    }
    else{
        return`A ${a}cm, ${b}cm, ${c}cm oldalú háromszög NEM szerkeszthető meg`;
    }
}