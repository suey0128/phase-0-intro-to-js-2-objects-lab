// Write your solution in this file!
// const employee = {};

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return Object.assign({}, employee, {[key]:value});
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     return Object.assign(employee, {[key]:value});
// }

// function deleteFromEmployeeByKey(employee, key) {
//     let newEm = {...employee};
//     delete newEm[key];
//     return newEm;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// }


let employee = {};

employee.name = 'bob';
employee.streetAddress = '23 street';

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return Object.assign({},employee,{[key]:value}); 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = Object.assign({},employee); 
    delete newEmployee[key];
    // access an object key, a string follow '.', .a , a is automatically a string. inside [] on the other hand, it is a variable, unless it is [''] 
    return newEmployee;
}

function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}