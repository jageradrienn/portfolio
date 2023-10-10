
export function Atlag(vizsgaltTomb) {
    vizsgaltTomb = vizsgaltTomb.map(function (item) { return Number(item); });
    var ossz = 0;
    vizsgaltTomb.forEach(function (item) { return (ossz += item); });
    return "A megadott t\u00F6mb \u00E1tlaga: ".concat((ossz/5).toFixed(2));
}
