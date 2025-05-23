var fileInput=document.querySelector("#input")
var submitbtn=document.getElementById('login-btn')
var img=document.querySelector('#avatar')
// Click play game after entering username
submitbtn.addEventListener('click',function(e){
    e.preventDefault()
var input=document.getElementById("username").value
if(input==='fezwa'){
window.location.href='http://127.0.0.1:5500/UI/game.html?letter='}
})

fileInput.addEventListener('change',function(){
    var url=URL.createObjectURL(fileInput.files[0]);
    img.src=url;
})
