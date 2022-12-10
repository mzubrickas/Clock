function Time() {

    // Creating object of the Date class
    let date = new Date();
   
    // Get current hour
    let hour = date.getHours();
    // Get current minute
    let minute = date.getMinutes();
    // Get current second
    let second = date.getSeconds();
   
    // Variable to store AM / PM
    let period = "";
   
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
   
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
   
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
   }
   
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   
   Time();