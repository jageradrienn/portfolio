

            Másodfokú egyenlet megoldása

function Masodfoku(a:number,b:number,c:number):string{
    var mResult:string='';
    if(a==0){
        mResult="Az egyenlet nem másodfokú";
    }
    else{
        var d:number=(b*b)-(4*a*c);
        if(d<0){
            mResult="Nincs megoldás";
        }
        else if(d==0){           
            var x1:number=-b/(2*a);
            mResult=`x1 = ${x1}`;
        }
        else{
            var x1:number=Number(((-b+Math.sqrt(d))/(2*a)).toFixed(1));
            var x2:number=Number(((-b-Math.sqrt(d))/(2*a)).toFixed(1));
            mResult=`<span>${a}x<sup>2</sup>+${b}+${c} eredménye:  x1 = ${x1}, x2 = ${x2}</span>`;
        }
    }
    return mResult;
}

