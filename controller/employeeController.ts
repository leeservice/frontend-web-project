import { Request, Response, Application } from "express";
import { Employee } from "../model/employee"

const employeeService = require('../service/employeeService')

module.exports = function(app : Application){
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
}