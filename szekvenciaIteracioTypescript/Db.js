
export function Megszamol(vizsgaltTomb) {
    vizsgaltTomb = vizsgaltTomb.map(function (item) { return Number(item); });
    var ossz = 0;
    vizsgaltTomb.forEach(function (item) { return item % 2 == 0 ? ossz++ : item; });
    return "A megadott t\u00F6mb p\u00E1ros sz\u00E1mainak darabsz\u00E1ma: ".concat(ossz);
}
