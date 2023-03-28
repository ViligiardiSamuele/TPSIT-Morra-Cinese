//config
let loadingGif = "https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif"
let patch = 'img/'
//indici          0             1             2
let images = ['sasso.jpg', 'carta.jpg', 'forbice.jpg'];

//input <img>
let iSasso = document.getElementById("sasso")
let iCarta = document.getElementById("carta")
let iForbice = document.getElementById("forbice")
//let button = document.getElementById("riprova")

//output <span>
let info = document.getElementById("info")
let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")
let computerImg = document.getElementById("computerImg") //computer
let outGif = document.getElementById("gif")

function play(player){
    let comp = Math.floor(Math.random() * 3)
    console.log(comp)
    computerImg.src = patch + images[comp];
    let vincitore = comparaMosse(comp, player);
    if(!vincitore == ''){
        if(vincitore == 'computer'){
            info.innerHTML = "Hai PERSO - Clicka per giocare ancora"
            computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        } else {
            info.innerHTML = "Hai VINTO - Clicka per giocare ancora"
            playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
            button.disabled = false;
        }
    } else {
        info.innerHTML = "E' PARI - Clicka per giocare ancora"
    }
}

function comparaMosse(comp, player){
    //ritorna una string con il vincitore
    if (comp != player) {
        if     (comp == 0 && player == 1)
            return 'player'
        else if(comp == 0 && player == 2)
            return 'computer'
        else if(comp == 1 && player == 0)
            return 'computer'
        else if(comp == 1 && player == 2)
            return 'player'
        else if(comp == 2 && player == 0)
            return 'player'
        else if(comp == 2 && player == 1)
            return 'computer'
    } else return '';
}

function onLoad(){
    outGif.src = loadingGif
}