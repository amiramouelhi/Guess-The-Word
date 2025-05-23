var words = [
  { word: "apple", hint: "A red or green fruit." },
  { word: "guitar", hint: "A musical instrument with strings." },
  { word: "planet", hint: "Earth is one." },
  { word: "bridge", hint: "Used to cross rivers." },
  { word: "castle", hint: "A medieval fortress." }
];

var wordIndex=Math.floor(Math.random()*words.length);
var secretWord=words[wordIndex].word;
var masked=secretWord[0];
var i=1;
while(i<secretWord.length-1){
    masked=masked+'_'
    i++
}
masked=masked+secretWord[secretWord.length-1];

//store masked word in an array so i can change individual letters
var maskedword=[];
for(var i=0;i<masked.length;i++){
    maskedword.push(masked[i])
}

//updating the secret word span
var spanElement=document.querySelector(".secret-letter");
spanElement.textContent=masked;


var submitbtn=document.querySelector('.submit');
submitbtn.addEventListener('click',function(){
    //getting the value from input field
var input=document.getElementById('guessed-letter').value.toLowerCase();
//checking if the guessed letter is correct
for(var i=0;i<secretWord.length;i++){
    var temp='';
    //check if the letter is in secretWord
    if(secretWord[i]===input){
        //update the array we created with masked word
        maskedword[i]=input;
        //join the array back into a string 
        temp= maskedword.join('');
        //updating the UI
        spanElement.textContent=temp
    }}
//clear the input field
document.getElementById('guessed-letter').value = '';
})

//select hint button
var hintbtn=document.querySelector('#hint-text');
//add event listener to hint button
hintbtn.addEventListener('click',function(){
    //get the hint from the list
    var hint=words[wordIndex].hint;
    //updating the UI
    document.querySelector('.given-hing').textContent=hint;
})