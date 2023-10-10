
export function Ossz(vizsgaltTomb) {
    vizsgaltTomb = vizsgaltTomb.map(function (item) { return Number(item); });
    var ossz = 0;
    vizsgaltTomb.forEach(function (item) { return (ossz += item); });
    return "Az adott t\u00F6mb elemeinek \u00F6ssege: ".concat(ossz);
}
