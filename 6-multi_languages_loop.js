const langs = ["C is fun", "Python is cool", "JavaScript is amazing"];
let out = "";
for (let i = 0; i < langs.length; i++) {
  out += langs[i] + "\n";
}
out = out.slice(0, -1); // remove the last newline
console.log(out);
