import { Application, Request, Response } from "express";
import { Employee } from "../model/employee";

const employeeService = require('../service/employeeService')

module.exports = function(app: Application){

    app.get('/employees', async (req: Request, res: Response) => {
        let data: Employee[]

        try {
            data = await employeeService.getAllDeliveryEmployees();
        } catch (e) {
            console.error(e);
        }

        res.render('list-delivery-employees', {employee: data})
    })

    app.get('/employees/:id', async (req: Request, res: Response) => {
        let data: Employee

        try {
            data = await employeeService.getEmployeesById(req.params.id)
        } catch (e) {
            console.error(e);
        }

        res.render('view-delivery-employes', {employee: data})
    })
}
