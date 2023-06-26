// Code your solutions in this file
function writeCards(names, eventName) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }

  return messages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
const names = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";
const messages = writeCards(names, eventName);
console.log(messages);

countDown(10);
