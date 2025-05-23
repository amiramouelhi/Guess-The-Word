
var submitbtn=document.getElementById('login-btn') //getting the login button
var img=document.querySelector('#avatar') //getting the avatar image
var fileInput=document.getElementById("input") //getting the input of file type image

//getting the picture after choosing the file
fileInput.addEventListener('change',function(){
    var url=URL.createObjectURL(fileInput.files[0]);
    img.src=url;
})

// Click play game after entering username
submitbtn.addEventListener('click',function(e){
e.preventDefault()
var input=document.getElementById("username").value
var user={
    username:input,
    profilePicture:img.src,
    score:0,
};
localStorage.setItem("user",JSON.stringify(user))
window.location.href='http://127.0.0.1:5500/UI/game.html?letter='
})


