import { Request, Response, Application } from "express";
import { Employee } from "../model/employee"

const employeeService = require('../service/employeeService')

module.exports = function(app : Application){

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

    app.post('/add-employee', async(req: Request, res: Response) => {
        let data: Employee = req.body
        let id: Number

        try{
            id = await employeeService.createEmployee(data)

            //res.redirect('/add-employee')
        }catch(e){
            console.error(e)

            res.locals.errormessage = e.message

            
        }
        res.render('add-employee', req.body)
    })


    app.get('/add-employee', async(req: Request, res: Response) => {
        
        res.render('add-employee')
    })

    app.get('/update-employee/:id', async(req: Request, res: Response) => {
        
        res.render('update-employee')
    })

    app.put('/update-employee/:id', async(req: Request, res: Response) => {
        let data: Employee = req.body

        try {
            data = await employeeService.updateEmployee(req.params.id)
        } catch (e) {
            console.error(e);
        }

        res.render('view-delivery-employes' + req.params.id)
    })
}
