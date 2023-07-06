import { Employee } from "../model/employee"
const axios = require('axios');
const employeeValidator = require('../validator/employeeValidator')


module.exports.createEmployee = async function(employee: Employee): Promise<number> {
    const error:string = employeeValidator.validateEmployee(employee)

    if(error){
        throw new Error(error)
    }

    try{
        const response = await axios.post('http://localhost:8080/api/employee/', employee)

        return response.data
    }catch(e){
        throw new Error('Could not create employee')
    }

module.exports.getAllDeliveryEmployees = async function (): Promise<Employee[]> {
    try {
        const response = await axios.get('http://localhost:8080/api/employee')
        return response.data
    } catch (e) {
        throw new Error('Could not get employees');
    }
}

module.exports.getEmployeesById = async function (id: number): Promise<Employee> {
    try {
        const response = await axios.get('http://localhost:8080/api/employee/' + id)

        return response.data
    } catch (e) {
        throw new Error('Could not get employee')
    }
}
