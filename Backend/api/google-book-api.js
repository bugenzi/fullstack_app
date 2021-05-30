const googleBooks = (name) => {
  let url = `https://www.googleapis.com/books/v1/volumes?q=${name}`;
  return url;
};

module.exports = googleBooks;
