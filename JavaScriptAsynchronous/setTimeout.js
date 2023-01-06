// program to display a text using setTimeout method
// Display a Text Once After 3 Second
// https://www.programiz.com/javascript/setTimeout
function greet() {
    console.log('Hello world!!');
}

setTimeout(greet, 3000);
// The setTimeout() method returns the interval id
console.log('This message is shown first');