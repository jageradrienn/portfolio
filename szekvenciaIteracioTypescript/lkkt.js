export function Lkkt(a, b) {
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    var lkkt = max;
    while (lkkt % min != 0) {
        lkkt += max;
    }
    return lkkt;
}
