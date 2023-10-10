

          Legnagyobb közös osztó

function Lnko(szamEgy:number, szamKetto:number):number{
    var lnko:number=1;
    var min:number=Math.min(szamEgy, szamKetto);
    for (var i:number = 2; i <= min; i++) {
		if (szamEgy%i==0 && szamKetto%i==0) {
        	lnko=i;
        }    
    }
    return lnko;
}



