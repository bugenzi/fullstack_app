const parseUserData=(user)=>{
let userData={}
userData.username = user.username;
userData.name = user.name;
userData.surname = user.surname;
userData.date = user.date;
userData.favoriteBooks = user.favoriteBooks;
userData.description = user.description;
userData.posts = user.posts;

return userData

}
module.exports=parseUserData;