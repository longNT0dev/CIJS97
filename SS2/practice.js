//Bài 4
const doubleNumberArr = (numArr) => {
    if (!Array.isArray(numArr)) {
        console.log("Giá trị truyền vào không phải 1 mảng");
        return
    }
    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = numArr[i] * 2
    }

    return numArr
}

const doubleNumberArrWithMap = (numArr) => {
    if (!Array.isArray(numArr)) {
        console.log("Giá trị truyền vào không phải 1 mảng");
        return
    }

    return numArr.map(number => number * 2)
}

// console.log(doubleNumberArr([5,10,15,20]));
// console.log(doubleNumberArrWithMap([5,10,15,20]));

// Bài 6
const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];

const calculateTotalUnitOfWorks = (unitOfEmployeeWork) => {
    return unitOfEmployeeWork.reduce((prev, curr) => prev += curr.workingDays, 0)
}

// console.log(calculateTotalUnitOfWorks(employees))

// Bài 7  
const findGreatestSalary = (employees) => {
    let maxSalary = 0
    let infoEmployee
    employees.forEach(employee => {
        if (employee.salary > maxSalary) {
            maxSalary = employee.salary;
            infoEmployee = employee
        }
    })

    return infoEmployee
}

console.log(findGreatestSalary([
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
]
)); 