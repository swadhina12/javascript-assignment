const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

 generateJoke();

 async function generateJoke(){
    const jokeRes = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            accept: 'application/json'
        }
    });
const joke =await jokeRes.json();
console.log(joke);

jokeEL.innerHTML = joke.joke;
 }
