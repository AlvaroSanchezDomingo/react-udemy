export const isAdult = (age) => age>= 18
const canDrink = (age) => isAdult(age)

export default (age) => age>= 65

export {canDrink}