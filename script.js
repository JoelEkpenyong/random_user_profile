// https://randomuser.me/api/

var btn = document.querySelector('#btn')
var avatar = document.querySelector('#avatar')
var fullname = document.querySelector('#fullname')
var username = document.querySelector('#username')
var email = document.querySelector('#email')
var city = document.querySelector('#city')
var url = 'https://randomuser.me/api/'
var userDetails 


function handleError(res){
    if(!res.ok){
        throw Error(res.status)
    }
    return res.json()
}
function dataConstruct (data){
    var userDetails = {
        user_name: Object.values(data.results[0].name).join(' '),
        user_id: data.results[0].login.username,
        user_email: data.results[0].email,
        user_city: data.results[0].location.city,
        user_img: data.results[0].picture.medium
    }
    return userDetails
}
function appendToScreen (userDetails){
    avatar.src = userDetails.user_img
    fullname.innerText = userDetails.user_name
    username.innerText = userDetails.user_id
    email.innerText = userDetails.user_email
    city.innerText = userDetails.user_city
}
function errorMessage (err){
    alert(err)
}

btn.addEventListener('click', function(){
    fetch(url)
    .then(handleError)
    .then(dataConstruct)
    .then(appendToScreen)
    .catch(errorMessage)
})  