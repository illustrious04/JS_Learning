let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector('#btn2')
let togglebutton = document.querySelector('#togglebutton')
let currMode = "light" //Dark
let body = document.querySelector("body")

// ---------forLight Dark Mode.html file----------
togglebutton.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }else {
        currMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }

    //console.log(currMode)

})



//-----------External Events Html file--------------
// Approch 1
//const button1 = document.querySelector('#btn1');

// button1.addEventListener('click', () => {
//   alert('Button clicked!');
// });

//Approch-2
// btn1.onclick = () => {
//     console.log('Button 1 is clicked');
//     alert('Hello');
// };

// btn2.ondblclick = () => {
//     console.log('Button 2 is clicked twice');
//     alert('Hello');
// }


// const div = document.querySelector('#Div-1')
//  div.onmouseover = () => {
//     console.log('You are inside the div')
// }




