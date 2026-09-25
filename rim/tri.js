const prompt = require (`prompt-sync`)();


const books = [
  { id: 1, title: "L'Étranger", author: "Albert Camus", year: 1942, genre: "Fiction", pages: 159, isRead: true },
  { id: 2, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", pages: 328, isRead: false },
  { id: 3, title: "Les Misérables", author: "Victor Hugo", year: 1862, genre: "Historical Fiction", pages: 1462, isRead: true },
  { id: 4, title: "Dune", author: "Frank Herbert", year: 1965, genre: "Science Fiction", pages: 412, isRead: false },
  { id: 5, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943, genre: "Children's Literature", pages: 96, isRead: true }
];

function livresPlusNbrPages(nbrPages,author){
    for(let i = 0 ; i< books.length ; i++){
        if((books[i].pages>=nbrPages && books[i].author == author)){ 
            console.log(books[i])
        }      
    }
}

//livresPlusNbrPages(300);
//livresPlusNbrPages(500);
livresPlusNbrPages(100,"George Orwell");


