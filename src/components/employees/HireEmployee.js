import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { sendEmployee } from "../ApiManager";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState();

    const history = useHistory()

    const submitEmployee = (evt) => {
        evt.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
        }

        return sendEmployee(newEmployee)
                .then(() => {
                    history.push("/employees")
                })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={(evt) => {
                            const copy = {...employee}
                            copy.name = evt.target.value
                            updateEmployee(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Technical Specialty"
                        onChange={(evt) => {
                            const copy = {...employee}
                            copy.specialty = evt.target.value
                            updateEmployee(copy)
                        }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Hire Employee
            </button>
        </form>
    )
}