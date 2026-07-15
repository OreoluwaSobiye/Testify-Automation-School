const books = {
    title:'Lord of the Rings',
description: 'An epic high-fantasy novel that follows the hobbit Frodo Baggins as he journeys to destroy the One Ring and defeat the Dark Lord Sauron.',
numberOfPages: 1178,
authour:'J.R.R. Tolkien',
reading: false,
toggleReadingStatus: function(){
    if (this.reading === false) {
        books.reading = true
     } else{
        books.reading = false
    }
}
}

books.toggleReadingStatus()
console.log(books.reading)