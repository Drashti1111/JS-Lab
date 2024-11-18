//Testing
//alert("JAVASCRIPT LINKED")

//footer
const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; Drashti, ${currentYear}`; 

//Greeting message
const greetingElement = document.querySelector("section div h1");
const hour = new Date().getHours();

let greeting = "";

if (hour < 12){
    greeting = "Good Morning!";
}
if (hour < 17){
    greeting = "Good Afternoon!";
}
else{
    greeting = "Good Evening!";
}

greetingElement.textContent = greeting;

//Alert button
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", function () { alert("HHELLO WORLD"); });

//Hover button
alertButton.addEventListener("mouseover", () => (alertButton.textContent = "You're hovering"));
alertButton.addEventListener("mouseout", () => ((alertButton.textContent = "Click ME!")));

//list
const list = document.getElementById("numbers");
for (let i = 1; i <= 12; i++){
    const listitem = document.createElement("li");
    listitem.textContent = i % 2 == 0 ? "Even" : "Odd";
    list.appendChild(listitem)
}