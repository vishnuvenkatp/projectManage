import * as mongoose from 'mongoose';

export interface IemployeeAddress extends mongoose.Document{
            address:String,
            city:String,
            pincode:Number,
}

export interface IemployeeAddress extends mongoose.Document{
    address:String,
    city:String,
    pincode:Number,
}
export interface Iskills extends mongoose.Document{
    domain:String,
    years:Number,
}

export interface IemployeeInfoHeader extends mongoose.Document{
  
    employeeId:Number,
    employeeName:String,
    phoneNumber:Number,
    emailId:String,
    employeeAddress:IemployeeAddress[],
    role:String,
    projects:String,
    expierence:Number,
    skills:Iskills[],
}
export const employeeInfoSchema = new mongoose.Schema({

    employeeId:{type :Number},
    employeeName:{type:String},
    phoneNumber:{type :Number},
    emailId:{type:String},
    employeeAddress:[
        {
            address:{type:String},
            city:{type:String},
            pincode:{type :Number},
        }
    ],
    role:{type:String},
    projects:{type:String},
    expierence:{type :Number},
    skills:[
        {
            domain:{type:String},
            years:{type :Number},
        }
    ]

},
{
    versionKey: false,
    timestamps: true,
    collection: "Employees",
  }
)

