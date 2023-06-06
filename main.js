const gParent = document.getElementById("grand-parent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

//Click Event Listeners
 
// ------------------------------------------- //

// gParent.addEventListener('click', e => {
//     console.log("Grand Parent")
// })
// parent.addEventListener("click", e => {
//     console.log("This is parent")
// })
// child.addEventListener("click", e => {
//     console.log("This is the child")
// })
//As you can see in the browser console that when you click on gparent it logs out only gparent, but if you click on parent it logs out gparent and parent both, and if we click on the child it logs all of gparent, parent, and child like in boobling raised from bottom to top all the listeners
 
// ------------------------------------------ //

//Caputring and bubbling
// gParent.addEventListener('click', e => {
//     console.log("Grand Parent Captured");
// }, true);

// gParent.addEventListener('click', e => {
//     console.log("Grand Parent Bubbled");
// });

// parent.addEventListener("click", e => {
//     e.stopPropagation()// To Stop propagation (Execution) 
//     console.log("This is parent Captured");
// }, true);

// parent.addEventListener("click", e => {
//     console.log("This is parent Bubbled");
// });

// child.addEventListener("click", e => {
//     console.log("This is the child Captured");
// }, true);

// child.addEventListener("click", e => {
//     console.log("This is the child Bubbled");
// });

//Different from bubbling it logs captured element first and then clicked element and then bubbling by skiping the captured element in bubbling phase!


//------------------------------------------ //

//To Make Event listener work at once for eny of the following!

// gParent.addEventListener('click', e => {
//     console.log("This is grand parent")
// })
// parent.addEventListener("click", e => {
//     console.log("This is parent")
// })
// child.addEventListener("click", e => {
//     console.log("This is the child")
// }, { once : true })

// Child is print out only at once because it set to true for the once : true;

// ----------------------------------------- //

//To remove Event Listeners

// gParent.addEventListener('click', e => {
//     console.log("This is grand parent")
// })
// parent.addEventListener("click", e => {
//     console.log("This is parent")
// })
// child.addEventListener("click", childMsg) // When use classic function by name never use pranthesis
// function childMsg() {
//     console.log("This is the child")
// }
// child.removeEventListener('click', childMsg)
//This is how we can remove eventlisteners by using the simple function we cannot remove the eventlisteners we should have to use the named function as we did so, do not remove eventlisteners by using the function in this way of (e) => {} this not work beacuse this create the another not exact fuction!

// --------------------------------------- //

//Event Deligation

// const divs = document.querySelectorAll('div');

// divs.forEach(allDiv => {
//     allDiv.addEventListener("click", (e) => {
//         console.log("Hello World")
//     })
// });

//But what happens if we create new div? 
//Lets see

const newDiv = document.createElement("div")
document.body.appendChild(newDiv)
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "purple"

//As you can see that in the console there is noting printing out when click on the newly created div this is because we create the div after selecting all the div before
// Here is the solution to fix that issue! instead of using the foreach on divs we use this by committing out that!
// document.addEventListener("click", (e) => {
//     if(e.target.matches("div")) {
//         console.log("Hello World")
//     } else {
//         console.log("You have not clicked on the divs")
//     }  
// });


//-------------------------------------------------------------------//

//This is how you can solve the issue. I know that this is not only one method to solve this problem there are so many out there and some are way better than mine or this one, come on this is only for learning perposes do not be so much conscious and have a good day bye!.