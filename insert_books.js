

use('plp_bookstore'); 

db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 1200,
    in_stock: true,
    pages: 208,
    publisher: "HarperCollins"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 1800,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 2500,
    in_stock: false,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 1500,
    in_stock: true,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 1700,
    in_stock: true,
    pages: 443,
    publisher: "Harvill Secker"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    published_year: 2011,
    price: 1600,
    in_stock: false,
    pages: 336,
    publisher: "Crown Business"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 1400,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1979,
    price: 1300,
    in_stock: true,
    pages: 368,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1989,
    price: 3200,
    in_stock: true,
    pages: 359,
    publisher: "Addison-Wesley"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    published_year: 1997,
    price: 1300,
    in_stock: true,
    pages: 336,
    publisher: "Plata Publishing"
  }
]);
