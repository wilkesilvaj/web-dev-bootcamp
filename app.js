function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {

        return `rgb(${this.r},${this.g},${this.b})`;
    }
    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color;
}

const firstColor = makeColor(35, 255, 150);


// Constructor function
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// Adds protoype functions to all 'Color' objects
Color.prototype.rgb = function () {
    return `rgb(${this.r},${this.g},${this.b})`;
}

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function (a = 1.0) {
    return `rgba(${this.r},${this.g},${this.b}, ${a})`;
}


const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);


// Creates a new actual Class
class Colors {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    rgb() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgba()  {
        return `rgba(${this.r},${this.g},${this.b}, ${a})`;
    }
}

const white = new Colors(0,0,0,'white');
