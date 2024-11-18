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