/*
//
*/
/*
Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

1. Put an article DOM element in your index.html with the id attribute value of messages.
2. In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
3. Create five (5) section components, each with a class of message, and with the content of your choosing.
4. Using appendChild(), attach each message as a child to the messages element.
*/

//const articleElement  = document.querySelector( '#messages' );

//
let sectionContent = [ 
    "Are we doing fireworks this year?",
    "After last year's \"tree incident\", should we?",
    "The fire fighters put it out in like a minute. Wasn't even a real fire.",
    "We can set them off in the street.",
    "Our neighbors' houses are flammable, too."
];

//
const fragment = document.createDocumentFragment()

//
sectionContent.forEach( message => {
    const messageElement = document.createElement( 'section' );
    messageElement.className = "message";
    messageElement.textContent = message;
    fragment.appendChild(messageElement);
})

//
document.querySelector("#messages").appendChild(fragment);
