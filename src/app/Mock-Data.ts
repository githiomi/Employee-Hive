import { Employee } from "./models/Employee";
import { SEX } from "./models/SEX";

// This is mock data about emlpoyees that will eventually come from the JSON server
export const Employees: Employee[] = [

    {
        empId: 1,
        employeeName: 'Daniel Githiomi',
        employeeAge: 21,
        employeeGender: SEX.MALE,
        employeeEmail: "daniel@gmail.com",
        employeePosition: "Junior Developer",
        isPaid: true
    },
    {
        empId: 2,
        employeeName: 'Dhosio Hoes',
        employeeAge: 18,
        employeeGender: SEX.MALE,
        employeeEmail: "dhosio@gmail.com",
        employeePosition: "Senior Developer",
        isPaid: false
    },
    {
        empId: 3,
        employeeName: 'Jeremiah Sultan',
        employeeAge: 38,
        employeeGender: SEX.MALE,
        employeeEmail: "jere@gmail.com",
        employeePosition: "Company CEO",
        isPaid: true
    },
    {
        empId: 4,
        employeeName: 'Maureen Esuman',
        employeeAge: 24,
        employeeGender: SEX.FEMALE,
        employeeEmail: "maureen@gmail.com",
        employeePosition: "Janitor",
        isPaid: false
    },
    {
        empId: 5,
        employeeName: 'Codeculate Maina',
        employeeAge: 21,
        employeeGender: SEX.MALE,
        employeeEmail: "daniel@gmail.com",
        employeePosition: "Chairperson",
        isPaid: true
    }

]