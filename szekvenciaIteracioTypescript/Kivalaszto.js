
export function Kivalaszto(vizsgaltTomb) {
    vizsgaltTomb = vizsgaltTomb.map(function (item) { return Number(item); });
    var parosak = [];
    vizsgaltTomb.forEach(function (item) { return item % 2 == 0 ? parosak.push(item) : item; });
    return "A megadott t\u00F6mb p\u00E1ros sz\u00E1mai: ".concat(parosak);
}
