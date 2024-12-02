let guess = (Math.floor(Math.random()*100)+1)
console.log(guess)
let attempts = 0
let game_status = 1
const  guess1=document.getElementById('guess')
let attempt=document.getElementById('chances')

function check(){
    if(game_status == 1 && attempts<10){
       const obj1 = document.forms[0]
       let val = obj1.val.value
      /*  console.log(val) */
       attempts++
        if( val == guess){
         guess1.innerHTML = 'Guess is correct'
        // console.log('chances Used :' +attempts)
         attempt.innerHTML="You won the game"
        // console.log('guess is correct')
         document.getElementById('check_btn').innerHTML='Reset'
         game_status = 0
         attempts = 0
        }
        else if(val < guess){
          guess1.innerHTML = 'Guess is lower'
        // console.log('chances Used :' +attempts)
          attempt.innerHTML='Chances Used :' +attempts
        // console.log('guess is lower')
        }
        else{
          guess1.innerHTML = 'Guess is higher'
        // console.log('chances used :' +attempts)
          attempt.innerHTML='Chances Used :' +attempts
        // console.log('guess is higher')
        }
    }
    else if(attempts>=10){
      document.getElementById('check_btn').innerHTML='Reset'
      attempt.innerHTML = "You lost the game"
      game_status=0
      const btn1 = document.querySelector('.btn1');
      btn1.style.display = 'block'
       const btn = document.querySelector('.btn');
      btn.style.display = 'none'
    }
    else{
        reset()
    }
}
function reset(){
    document.getElementById('check_btn').innerHTML='check'
    /* console.log(game_status) */
    attempts = 0
    game_status=1
    const btn1 = document.querySelector('.btn1');
    btn1.style.display = 'none'
     const btn = document.querySelector('.btn');
    btn.style.display = 'block'
    guess = Math.floor(Math.random()*100)+1
    console.log(guess)
    const obj1 = document.forms[0]
       let val = obj1.val.value = ''
       attempt.innerHTML='Chances Used :' + attempts
}