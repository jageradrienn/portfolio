
export function MinMax(vizsgaltTomb) {
    vizsgaltTomb=vizsgaltTomb.map(item => Number(item));
    var minErtek = vizsgaltTomb[0];
    var minIndex = 0;
    var maxErtek = vizsgaltTomb[0];
    var maxIndex = 0;
    vizsgaltTomb.forEach(function (item, index) {
        item < minErtek ? (minErtek = item, minIndex = index) : item;
        item > maxErtek ? (maxErtek = item, maxIndex = index) : item;
    });
    return "A t\u00F6mb minimuma: ".concat(minErtek, ", indexe: ").concat(minIndex, ", maximuma: ").concat(maxErtek, ", indexe: ").concat(maxIndex, ".");
}
