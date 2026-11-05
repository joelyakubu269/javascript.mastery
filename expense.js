let calculateTotal=(expenses)=>{
   let total= 0
   for (expense of expenses){
        total+= expense.amount
   }
   return total
}
let calculateCategoryTotal=(expenses, category)=>{
    let amount = 0
    for (expense of expenses) {
        if (expense.category == category){
            amount+= expense.amount
        }
    }
    return amount
}
let findLargestExpense=(expenses)=>{
    let largestExpense= expenses[0]
    for(expense of expenses){
        if (expense.amount > largestExpense.amount){
            largestExpense= expense
        }
    }
    return largestExpense
}
let createExpenseSummary=(expenses)=>{
    let total= calculateTotal(expenses)
    let foodTotal= calculateCategoryTotal(expenses,"food")
    let transportTotal= calculateCategoryTotal(expenses,"transport")
    let largestExpense= findLargestExpense(expenses)
    const summary = {
        total:
        foodTotal:
        transportTotal:
        largestExpense:
    }
}