const fs = require('fs');

const colors = {};
const z = fs.readFileSync('colors.txt', 'utf8');
const w = z.split('\r\n');
for (let s in w){
  const parts = w[s].split(',');
  if (parts.length > 1){
    colors[parts[1]] = parts[0];
  }
}

class Color {
  constructor(r, g, b, total){
    this.rd = r;
    this.gd = g;
    this.bd = b;

    this.r = this.fromDecimalToHex(r);
    this.g = this.fromDecimalToHex(g);
    this.b = this.fromDecimalToHex(b);
    this.total = total;
  }

  fromDecimalToHex(d){
    let a = d.toString(16).toUpperCase();
    if (a.length === 1){
      a = '0' + a;
    }
    return a;
  }

  getInverseColor(){
    const rx = 255 - this.rd;
    const gx = 255 - this.gd;
    const bx = 255 - this.bd;

    const decimal = `${rx},${gx},${bx}`;

    const hexadecimal = `${this.fromDecimalToHex(rx)}${this.fromDecimalToHex(gx)}${this.fromDecimalToHex(bx)}`;
    const name = colors['#' + hexadecimal];
    return {decimal:decimal, hexadecimal:hexadecimal, name:name};
  }

  getRandomColor(){
    const rx = parseInt(Math.random() * 1000, 10) % 255;
    const gx = parseInt(Math.random() * 1000, 10) % 255;
    const bx = parseInt(Math.random() * 1000, 10) % 255;

    const decimal = `${rx},${gx},${bx}`;

    const hexadecimal = `${this.fromDecimalToHex(rx)}${this.fromDecimalToHex(gx)}${this.fromDecimalToHex(bx)}`;
    const name = colors['#' + hexadecimal];
    return {decimal:decimal, hexadecimal:hexadecimal, name:name};
  }

  getColorCombination(){
    const result = [];
    const decimal = `${this.rd},${this.gd},${this.bd}`;
    const hexadecimal = `${this.r}${this.g}${this.b}`;
    const name = colors['#' + hexadecimal];
    result.push({decimal:decimal, hexadecimal:hexadecimal, name:name});
    result.push(this.getInverseColor());
    if (this.total > 2){
      for (let i = 2; i <this.total; i++){
        result.push(this.getRandomColor());
      }
    }
    return result;
  }
}

module.exports = Color;
