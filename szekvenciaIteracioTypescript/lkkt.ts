

        Legkisebb közös többszörös

function Lkkt(a:number, b:number):number {
    let max:number = Math.max(a, b);
    let min:number = Math.min(a, b);
    let lkkt:number = max;
    
    while (lkkt % min != 0) {
      lkkt += max;
    }    
    return lkkt;
  }

  