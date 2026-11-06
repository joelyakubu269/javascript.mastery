let isAnswerCorrect=(question, userAnswer)=> {
    if (!userAnswer) {
        return false
    }
    return question.correctAnswer === userAnswer.answer
}
let   countCorrectAnswers=(questions, userAnswers)=>{
    let count= 0
    for (question of questions) {
        const Answer= userAnswers.find(answer=> {return answer.id == question.id})
        if (isAnswerCorrect(question,userAnswer)){
        count++
    }
    }
    return count
} 