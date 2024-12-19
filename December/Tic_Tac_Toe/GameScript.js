let boxes = document.querySelectorAll('.box')
let reserButton = document.querySelector("#reset")
let hide = document.querySelector('.hide')
let msgcontainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')
let newGameButton = document.querySelector('#newbtn')

let turnO = true

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
       
]

const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked")
        if(turnO){
            box.innerText = 'O'
            turnO = false
        }else{
            box.innerText = 'X'
            turnO = true
        }
        box.disabled = true
        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = ('Congratulations, Winner is ' + winner)
    msgcontainer.classList.remove('hide')
    disableBoxes()

}

const checkWinner = () =>{
    for(let patterns of winPatterns){
        // console.log(
        //     boxes[patterns[0]].innerText, 
        //     boxes[patterns[1]].innerText, 
        //     boxes[patterns[2]].innerText)
        let pos1value =  boxes[patterns[0]].innerText;
        let pos2value =  boxes[patterns[1]].innerText;
        let pos3value =  boxes[patterns[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value === pos2value && pos2value === pos3value){
                console.log("Winner", pos1value)
                showWinner(pos1value)

            }

        }
    }
    
}

newGameButton.addEventListener("click", resetGame)
reserButton.addEventListener("click", resetGame)
