Books in the "Programming" genre
db.books.find({ genre: "Programming" });

 Books published after 2010
db.books.find({ published_year: { $gt: 2010 } });

Books by "Michelle Obama"
db.books.find({ author: "Michelle Obama" });

 Update the price of "1984"
db.books.updateOne({ title: "1984" }, { $set: { price: 1150 } });

 Delete book titled "The Lean Startup"
db.books.deleteOne({ title: "The Lean Startup" });


Books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

 Projection: title, author, price only
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

 Sort by price ascending
db.books.find().sort({ price: 1 });

 Sort by price descending
db.books.find().sort({ price: -1 });

 Pagination: page 1 (first 5 books)
db.books.find().skip(0).limit(5);


 Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

 Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

 Group books by publication decade
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } }
]);

 Indexing

 Create an index on title
db.books.createIndex({ title: 1 });

 Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

 Use explain() to check performance
db.books.find({ title: "Sapiens" }).explain("executionStats");
