import apiInstance from './index'

function login(email, password) {
    return apiInstance.post(`login`, {
        email, password
    });
}
function register(username, email, password) {
    return apiInstance.post(`register`, {
        username, email, password
    });
}


function getOtherUsers(userID) {
    return apiInstance.get(`user/${userID}`);
}
function getUserInfo() {
    return apiInstance.get(`auth/me`);
}
function updateUserInfo(userData) {
    return apiInstance.patch(`auth/me/update`,userData);
}

//books and trading 
function getBooksBySearch(name){
    return apiInstance.post(`getBooks`,{name:name})
}

// Feeds 
function getFeeds(){
    return apiInstance.get(`postFeed`)
}
function postFeed(postInput){
    return apiInstance.post(`postFeed`,{postInput})
}
function postComment(id,comment){

    return apiInstance.post(`postComment/${id}`,{comment})
}


export const api ={
    login,
    getUserInfo,
    register,
    updateUserInfo,
    getBooksBySearch,
    getOtherUsers,
    getFeeds,
    postFeed,
    postComment

}