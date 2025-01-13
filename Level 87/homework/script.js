// 1. 1-დან 10-მდე რიცხვების ჯამი
// დავალება:
// შექმენით for loop, რომელიც გამოთვლის 1- დან 10 -მდე რიცხვების ჯამს, საბოლოო შედეგი გამოიტანეთ console - ში.

// შედეგი უნდა გამოიყურებოდეს შემდეგნაირად:

// 'საბოლოო რიცხვების ჯამი არის X'


let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log('საბოლოო რიცხვების ჯამი არის ' + sum);


// 2. რიცხვების კვადრატი
// დავალება:
// შექმენით  for loop, რომელიც ამობეჭდავს 1-დან 10-მდე თითოეული რიცხვის კვადრატს.


// შედეგი უნდა გამოიყურებოდეს შემდეგნაირად:

// 'X - ის კვადრატი არის X'


for (let i = 1; i <= 10; i++) {
    let square = i * i;
    console.log(i + ' - ის კვადრატი არის ' + square);
  }



// 3. სტრინგის თითოეული ასოს დაბეჭდვა
// დავალება:
// შექმენით string ტიპის ცვლადი, მაგალითად "გამარჯობა", და for loop-ის გამოყენებით ამობეჭდეთ მისი თითოეული ასო.

// გამოიყენეთ length.


let word = "გამარჯობა";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}