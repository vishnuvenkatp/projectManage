import * as mongoose from 'mongoose';


export const employeeInfo = new mongoose.Schema({

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

