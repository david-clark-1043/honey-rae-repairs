import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

const API = "http://localhost:8088"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecialties] = useState("")

    useEffect(
        () => {
            fetch(`${API}/employees`)
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )
    const history = useHistory()

    useEffect(
        () => {
            const employeeSpecialties = employees.map(employee => {
                return employee.specialty
            }).join(", ")
            setSpecialties(employeeSpecialties)
        },
        [employees]
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/hire")}>Hire Employee</button>
            </div>
            <div>Specialties: {specialties}</div>
            {
                employees.map(
                    (employeeObject) => {
                        return <p key={`employee--${employeeObject.id}`}><Link to={`/employees/${employeeObject.id}`}>{employeeObject.name}</Link></p>
                    }
                )
            }
        </>
    )
}