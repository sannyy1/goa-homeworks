// 1. შექმენით ციკლი, რომელიც გამოიტანს ციფრებს 1- დან, 10 - მდე.

for(let i = 0; i < 11; i++) {
    console.log(i)
}

// 2. შექმენით ციკლი, რომელიც 0 - დან, 20 - მდე გამოიტანს ლუწ და კენტ რიცხვებს.
// output: 
// 1 კენტია
// 2 ლუწია
// 3 კენტია 
// 4 ლუწია და ა.შ


for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} ლუწია`);
    } else {
        console.log(`${i} კენტია`)
    }
}