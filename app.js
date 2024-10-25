
setInterval(() => {
    const now = new Date();
    var Hours = now.getHours().toString().padStart(2,"0");    
    var ampm = Hours >= 12?Hours-12:Hours; 
    var Minutes = now.getMinutes().toString().padStart(2,"0");    
    var Seconds = now.getSeconds().toString().padStart(2,"0");
    var h =  document.getElementById("hour");
    h.textContent = ampm;   
    var m =  document.getElementById("minutes");
    m.textContent = Minutes;   
    var s =  document.getElementById("seconds");
    s.textContent = Seconds; 
    var AmPm = document.getElementById("AMPM");
    var a = Hours >= 12 ?"PM":"AM";
    AmPm.textContent = a;   
}, 1000);