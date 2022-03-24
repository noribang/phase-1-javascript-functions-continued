/* Function Declaration */
// razzle()
// function razzle() {
//     console.log("You have been razzled!")
// } 
//razzle()

/* Default Arguments */
// razzle()
// function razzle(lawyer = "Billy", target = "em") {
//     console.log(`${lawyer} rrrazzle-dazzles ${target}!`)
// }
// razzle("Methuselah", "T'challah")

/* Lab */
// saturdayFun()
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!` 
}
/* Lab - Function Expression */
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
/* Lab - Scope Chain */
function wrapAdjective(flair = "*") {
    return function(par1 = "special") {
        return `You are ${flair}${par1}${flair}!`
    }
}
