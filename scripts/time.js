function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Get hours with leading zero if needed
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes with leading zero if needed
    
    const updatedHours = hours % 12;
    let ampm;
    
    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM"
    }
    
    const currentTimeString = `${updatedHours} : ${minutes} ${ampm}`;
    
    document.getElementById("clock-time").innerText = currentTimeString;
}

setInterval(updateTime, 60000);

updateTime();