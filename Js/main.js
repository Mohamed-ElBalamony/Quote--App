var groupOfQuotes = [
    {quote : `"Dead Dosent Mean Gone.!"` , author : `--Mustafa Mahmoud`},

    {quote : `"Do not take life too seriously. You will not get out alive."` , author : `--Elbert Hubbard`},

    {quote : `"The best revenge is massive success."` , author : `--Frank Sinatra`},

    {quote : `"You miss 100% of the shots you don't take."` , author : `--Wayne Gretzy`},

    {quote : `"Understanding comes from a desire to belong."` , author : `--Anthony T. Hincks`},

    {quote : `"I will be to you, as you are to me."` , author : `--De philosopher DJ Kyos`},
] , previousIndex = -1;


function getRandomNumber() {
    var randonNum = Math.floor(Math.random() * groupOfQuotes.length);

    return randonNum;
}


document.getElementById('quote-btn').onclick = function() {
    var index = getRandomNumber();

   if(previousIndex == index) {
        index = getRandomNumber();
   }

    previousIndex = index;

    document.getElementById('quoteContent').innerHTML = groupOfQuotes[index].quote;

    document.getElementById('authorContent').innerHTML = groupOfQuotes[index].author;
}