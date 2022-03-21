import { Body, Controller, Post, Req, Request, Res, Response } from '@nestjs/common';
import { resolve } from 'path';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(
        private readonly employeeService: EmployeesService
    )
    {}

//    @Post('createEmployee')
//     async create{@Body() body:any ,@Res() res:Response,@Req() req:Request){

//     }

    }

