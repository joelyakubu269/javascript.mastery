function StartTimer(seconds) {
    const minutes = seconds/60
    const remainingMinutes= Math.floor(seconds % 60)
    return `${minutes}: ${remainingMinutes.toString.padStart(2,"0")}` 
}