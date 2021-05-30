const parseApi = (data) => {
  let books = data.items;
  let arrayOfBooks = [];
  books.map((item) => {
    let booksData = {};
    booksData.title = item.volumeInfo.title || "";
    booksData.subtitle = item.volumeInfo.subtitle || "";
    booksData.authors = item.volumeInfo.authors || "";
    booksData.publishedDate = item.volumeInfo.publishedDate || "";
    booksData.description = item.volumeInfo.description || "";
    booksData.imageLinks = item.volumeInfo.imageLinks || "";
    booksData.categories = item.volumeInfo.categories || "";
    booksData.pageCount=item.volumeInfo.pageCount || "no page"

    arrayOfBooks.push(booksData);
  });
  return arrayOfBooks;
};
module.exports = parseApi;
