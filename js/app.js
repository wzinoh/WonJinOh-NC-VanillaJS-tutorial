const age = parseInt(prompt('How old are you?'));

// console.log(isNaN(age));
if (isNaN(age) || age < 0) {
  console.log('Please write a "real" positive number.');
} else if (age < 18){
  console.log ('You are too young.');
} else if (age >= 18 && age <= 50) {
 console.log('You can Drink.');
} else if (age > 50 && age < 90) {
  console.log('You should exercise.');
} else if (age > 90) {
  console.log('Feel Free to do whatever you want.');
}