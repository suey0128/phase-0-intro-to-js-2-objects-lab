// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {[key]:value});
}

function deleteFromEmployeeByKey(employee, key) {
    let newEm = {...employee};
    delete newEm[key];
    return newEm;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
