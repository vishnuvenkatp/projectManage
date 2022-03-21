import * as mongoose from 'mongoose';


export const employeeInfo = new mongoose.Schema({

},
{
    versionKey: false,
    timestamps: true,
    collection: "Employees",
  }
)

