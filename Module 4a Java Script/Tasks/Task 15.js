const books = [{
    title:'Lord of the Rings',
description: 'An epic high-fantasy novel that follows the hobbit Frodo Baggins as he journeys to destroy the One Ring and defeat the Dark Lord Sauron.',
numberOfPages: 1178,
authour:'J.R.R. Tolkien',
reading: false
}, {
    title:'The Midnight Library',
description: 'An inventive fiction novel about a library that exists between life and death. When Nora Seed finds herself there, she gets the chance to undo her regrets and live alternate lives to find out what truly makes life worth living.',
numberOfPages: 304,
authour:'Matt Haig',
reading: true
}, {
    title:'Educated',
description: "An unforgettable memoir that chronicles the author's journey from a severely isolated, survivalist upbringing in rural Idaho to earning a PhD from Cambridge University. It is a striking look at the power of education and the search for self-identity.",
numberOfPages: 352,
authour:'Tara Westover',
reading: false
}, {
    title:'Atomic Habits',
description: 'A practical, proven framework for building good habits and breaking bad ones. The book explores how tiny, consistent, 1% improvements compound over time to create life-altering personal transformation and productivity.',
numberOfPages: 320,
authour:'James Clear',
reading: true
} ]

for (let book = 0; book < books.length; book= book +1 ) {
    if (books[book].reading === true) {
        console.log(books[book]);
    }
}