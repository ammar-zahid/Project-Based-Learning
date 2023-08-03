const quote = document.querySelector('.show-quote');
const button = document.querySelector('.change-quote');
const person = document.querySelector('.person h2')

const allQuotes = [
    { quote: "Be the change that you wish to see in the world.", person: "Mahatma Gandhi" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", person: "Chinese Proverb" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", person: "Robert Frost" },
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "Happiness is not something ready-made. It comes from your own actions.", person: "Dalai Lama" },
    { quote: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein" }
]

button.addEventListener('click', function() {
    const random = Math.floor(Math.random() * allQuotes.length);

    quote.innerText = allQuotes[random].quote;
    person.innerText = allQuotes[random].person;
})