let isAnswerCorrect=(question, userAnswer)=> {
    if (!userAnswer) {
        return false
    }
    return question.correctAnswer === userAnswer.answer
} 