// import { chuvihinhtron, dientichhinhtron } from "./math.js"
// import something from "./math.js"


// let userInput = +prompt("Vui lòng nhập vào bán kính đường tròn")

// const result1 = chuvihinhtron(userInput)
// const result2 = dientichhinhtron(userInput)

// console.log(`
//     Chu vi hình tròn với bán kính ${userInput} là: ${Math.round(result1)}
//     Diện tích hình tròn với bán kính ${userInput} là: ${Math.round(result2)}
// `);

// console.log(something);

// spread & rest operator: ...
// Tham chiếu thì chỉ có ở kiểu dữ liệu phức: Array, Object
// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1]
// arr1.push(6)
// console.log(arr1, arr2);

// let obj1 = {
//     name: "Long",
//     company: "Viettel"
// }

// let obj2 = {
//     ...obj1
// }

// const sum3 = (...params) => {
//     console.log(params);
// }

// sum3(1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1)

const person = {
    name: "Mindx",
    age: 7,
    name1: "Mindx1",
    name2: "Mindx2",
    name3: "Mindx3",
}

const person2 = {
    name: "Mindx2",
    age: 17
}

const { name, age, company } = person
const { name: nameAfter, age: ageAfter } = person2


// console.log(name, age, company);
// console.log(nameAfter, ageAfter, companyAfter);

// const { name1, ...rest } = person

// console.log(name1);

// console.log(rest);