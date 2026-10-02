// create a alert box that display a greeting message based on the current time using javascript 
function showGreeting() {
    let hour = new Date().getHours();
    let message;

    if(hour < 12) {
        message = "Good Morning!";
    }
    else if(hour < 18) {
        message = "Good Afternoon!";
    }
    else {
        message = "Good Evening!";
    }

    alert(message);
}