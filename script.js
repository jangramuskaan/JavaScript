// let obj = {
//     name : "Muskaan Jangra",
//     address : "Haryana",
//     age:17
// };

// obj.age= 18    
// console.log(obj);

// const para = document.querySelector("p") 
// para.innerText = "Hello World!"
// para.style.color = "blue"
// console.log(para);

// const para = document.getElementsByClassName("para")  
// para[0].innerText = "Hello World!"
// para[0].style.color = "blue"
// console.log(para);

// const para2 = document.querySelectorAll(".para")  
// para2[0].innerText = "Hello World!"
// para2[0].style.color = "blue"
// console.log(para2);


// function first() {
// }
// function second() {
// }
// function third() {
//    console.trace();
// }
// first();


// function infinite() {
//     infinite()
// }


    
// var a=345
// let b=5674

// console.log(a)
// console.log(b)

// let total = 40

// function calculate() {
//     console.log(total)
//     let total = 100
// }
// calculate()



// const timerID= setInterval(() => {console.log("setInterval executed")}, 1000);

// const timeoutID= setTimeout(() => {clearInterval(timerID)},10000);
//clearTimeout(timeoutID);




// let num=1;

// const id = setInterval(() => {
//     if (num === 10)clearInterval(id);
//     console.log(num)
//     num+=1
// }, 1000);


// const name = document.querySelector('#name');
// const btn = document.querySelector('.btn');
// const list = document.querySelector('.list');
// btn.addEventListener('click',() => {
//     if (name.value === '') {
//         alert('Please enter a name');
//         return;
  
//     }
//     const li = document.createElement('li');
//     const dlt= document.createElement('button');
//     dlt.innerText='Delete';
//     li.innerText = name.value;
//    dlt.addEventListener('click', () => {
//         list.removeChild(li);
//     })
//     li.appendChild(dlt);
//     list.appendChild(li);
//     name.value = '';
// })



// function print(num) {
//     console.log("inside print")
//     (num)
// }
// function callback() {
//     console.log("inside callback")
// }
// print(callback)


// function print(num) {
//     setTimeout(() => {
//         console.log("inside print")
//         num()
//     }, 2000);
// }

// function sample(){
//     console.log("inside callbak")
// }
// print(sample)




