
var quote = document.getElementById("quote");
var author = document.getElementById("author");
var icon1= document.getElementById("right");
var icon2= document.getElementById("left");
var section= document.getElementsByTagName("section")[0];

var randomquotes=[
    {quote:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    author:"― Marilyn Monroe"},
    {quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author:"― Albert Einstein"},
    {quote:`“A room without books is like a body without a soul.”`,
    author:"― Marcus Tullius Cicero"},
    {quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    author:"― Bernard M. Baruch"},
    {quote:`“You only live once, but if you do it right, once is enough.”`,
    author:"― Mae West"},
    {quote:`“If you tell the truth, you don't have to remember anything.”`,
    author:"― Mark Twain"},
    {quote:`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself”`,
    author:"― C.S. Lewis, The Four Loves"},
    {quote:`“Always forgive your enemies; nothing annoys them so much.”`,
    author:"― Oscar Wilde"},]

function generateQuote()
    {
        var i=Math.floor(Math.random()*randomquotes.length);
        if(i == randomquotes.length){
            i = i - randomquotes.length
        }
        icon1.classList.replace("opacity-0","opacity-100");

        icon2.classList.replace("opacity-0","opacity-100");
        section.classList.add("bg-light")
        quote.innerHTML = randomquotes[i].quote;
        author.innerHTML = randomquotes[i].author
    }