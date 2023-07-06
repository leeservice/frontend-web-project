import { Employee } from "../model/employee"

module.exports.validateEmployee = function(employee: Employee) : string {
    if(employee.name.length > 50){
        return "Name Greater Than 50";
    }

    if(employee.bankAccountNo.length > 20){
        return "Bank account number is longer than 20 characters";
    }

    if(employee.natInsuranceNo.length != 9){
        return "National insurance number is not 9 characters long";
    }

    return null
}