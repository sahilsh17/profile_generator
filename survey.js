const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', (answer) => {
  let name = answer;
  rl.question("Whats an activity you like doing? ", (answer) => {
    let activity = answer;
    rl.question('What is your Favourite meal? ', (answer) => {
      let meal = answer;
      rl.question('Which is your favourite sports? ', (answer) => {
        let sports = answer;
        rl.question('How old are you? ', (answer) => {
          let age = answer;
          console.log(`Hello! My name is ${name}. My favourite activity is ${activity} and I love ${meal}. My favourite sports is ${sports} and I am ${age} years old.`);
          rl.close();
        });
      });
    });
  });
});