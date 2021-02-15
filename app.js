function makeColor(r, g, b) {
    const color = {};
color.r = r;
color.g = g;
color.b = b;
color.rgb = function() {
    
    return `rgb(${this.r},${this.g},${this.b})`;
}
    return color;
}

const firstColor = makeColor(35,255,150);