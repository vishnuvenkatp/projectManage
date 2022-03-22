import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { employeeInfoSchema } from './schema/employees.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
    { name: "employee", schema: employeeInfoSchema },
  ]),
  
],
providers: [EmployeesService],
controllers: [
  EmployeesController
],
exports: [EmployeesService]
})
export class EmployeesModule {}
