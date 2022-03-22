"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeInfoSchema = void 0;
const mongoose = require("mongoose");
exports.employeeInfoSchema = new mongoose.Schema({
    employeeId: { type: Number },
    employeeName: { type: String },
    phoneNumber: { type: Number },
    emailId: { type: String },
    employeeAddress: [
        {
            address: { type: String },
            city: { type: String },
            pincode: { type: Number },
        }
    ],
    role: { type: String },
    projects: { type: String },
    expierence: { type: Number },
    skills: [
        {
            domain: { type: String },
            years: { type: Number },
        }
    ]
}, {
    versionKey: false,
    timestamps: true,
    collection: "Employees",
});
//# sourceMappingURL=employees.schema.js.map