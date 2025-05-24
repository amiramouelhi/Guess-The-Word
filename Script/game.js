var words = [
  { word: "apple", hint: "A red or green fruit." },
  { word: "guitar", hint: "A musical instrument with strings." },
  { word: "planet", hint: "Earth is one." },
  { word: "bridge", hint: "Used to cross rivers." },
  { word: "castle", hint: "A medieval fortress." }
];
var spanElement=document.querySelector(".secret-letter");
var wordIndex;
var secretWord;
var masked;
var maskedword=[];
//initializing the game
function initializegame(){
 wordIndex=Math.floor(Math.random()*words.length);
 secretWord=words[wordIndex].word;
 masked=secretWord[0];

//initializing the masked word to show
for(var i=1;i<secretWord.length-1;i++){
    masked=masked+'_';
}

masked=masked+secretWord[secretWord.length-1];

//store masked word in an array so i can change individual letters
maskedword=masked.split('');

//updating the secret word span

spanElement.textContent=masked;

//clear hint display and the input field
document.querySelector('.given-hint').textContent = '';
document.getElementById('guessed-letter').value = '';
}



var submitbtn=document.querySelector('.submit');
submitbtn.addEventListener('click',function(e){
e.preventDefault()

    //getting the value from input field
var input=document.getElementById('guessed-letter').value.toLowerCase();
var isCorrect=false;

//checking if the guessed letter is correct
for(var i=0;i<secretWord.length;i++){
    
    //check if the letter is in secretWord
    if(secretWord[i]===input){

        //update the array we created with masked word
        maskedword[i]=input;
        isCorrect=true;     
    }}

        if(isCorrect){
        //updating the UI
        spanElement.textContent=maskedword.join('');
        if(maskedword.join('')===secretWord){
            score=score+10;
            alert('🎉 Good job! You guessed the word!');
            initializegame();
        }
        }else{
            alert('Wrong guess, try again')
        }
        
   
//clear the input field
document.getElementById('guessed-letter').value = '';
})

//select hint button
var hintbtn=document.querySelector('#hint-text');
//add event listener to hint button
hintbtn.addEventListener('click',function(e){
    e.preventDefault();
    //get the hint from the list
    var hint=words[wordIndex].hint;
    //updating the UI
    document.querySelector('.given-hint').textContent=hint;
})