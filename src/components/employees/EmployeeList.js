import React, { useEffect, useState } from "react"

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
        <div>Specialties: {specialties}</div>
        {
            employees.map(
                (employeeObject) => {
                    return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                }
            )
        }
        </>
    )
}