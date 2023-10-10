export function Haromszog(a, b, c) {

    if ( (Number(a) + Number(b) > Number(c)) && (Number(b) + Number(c) > Number(a)) && (Number(a) + Number(c) > Number(b))) {
        return "A ".concat(a, "cm, ").concat(b, "cm, ").concat(c, "cm oldal\u00FA h\u00E1romsz\u00F6g megszerkeszthet\u0151");
    }
    else {
        return "A ".concat(a, "cm, ").concat(b, "cm, ").concat(c, "cm oldal\u00FA h\u00E1romsz\u00F6g NEM szerkeszthet\u0151 meg");
    }
}
