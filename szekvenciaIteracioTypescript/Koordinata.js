export function Koordinata(x,y) {
	if (x > 0 && y > 0) {
		return `A(z) (${x}), (${y}) koordináta az első síknegyedben van.`;
	}
	else if (x < 0 && y > 0) {
		return `A(z) (${x}), (${y}) koordináta az második síknegyedben van.`;
	}
	else if (x < 0 && y < 0) {
		return `A(z) (${x}), (${y}) koordináta az harmadik síknegyedben van.`;
	}
	else if (x > 0 && y < 0) {
		return `A(z) (${x}), (${y}) koordináta az negyedik síknegyedben van.`;
	}
	else if (x == 0 && y == 0) {
		return `A(z) (${x}), (${y}) koordináta az origóban van.`;
	}
	else if (y == 0) {
		return `A(z) (${x}), (${y}) koordináta az x tengelyen van.`;
	}
	else {
		return `A(z) (${x}), (${y}) koordináta az y tengelyen van.`;
	}
}