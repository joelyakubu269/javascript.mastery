let getLetterGrade=(score)=>{
     if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
let hasPassed=(score)=>{
    return score>=60
}
     
let getFeedback = (grade) => {
    switch (grade) {
        case "A":
            return "Excellent work";
        case "B":
            return "Good work";
        case "C":
            return "You passed";
        case "D":
            return "You passed";
        case "F":
            return "Keep practicing";
        default:
            return "Invalid grade";
    }
};

let createGradeReport=(name, score)=>{
    const grade= getLetterGrade(score)
    const passed= hasPassed(score)
    const remark= getFeedback(grade)
    const reportCard = {
        name :name,
        score:score,
        grade:grade,
        passed:passed,
        feedback: remark,

    }
}