const myName = document.getElementById('myName');
const btn = document.getElementById('btn');

// function f1(size) {

//     function f2 (){
//         myName.style.fontSize = `${size}px`;
//     }

//     return f2
// }

// const font12 = f1(12);
// const font24 = f1(24);
// const font36 = f1(36);
// const font48 = f1(48);
// const font60 = f1(60);


// btn.addEventListener('click' , font48)

function f1 (){
    let i = 1;

    console.log()

    function f2 (){
        console.log(myName.innerText + ' ' + i++)
    }

    return f2;
}

btn.addEventListener('click', f1())


