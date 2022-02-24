import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { assignTicket, getEmployees, getTicket } from "../ApiManager"

export const Ticket = () => {
    const [ticket, set] = useState({})  // State variable for current ticket object
    const [employees, setEmployees] = useState([])
    const [customers, setCustomers] = useState([])
    let { ticketId } = useParams()  // Variable storing the route parameter
    const history = useHistory()

    useEffect(
        () => {
            getTicket(ticketId)
                .then(set)
        },
        [ticketId]  // Above function runs when the value of ticketId change
    )


    useEffect(
        () => {
            getEmployees()
                .then((data) => {
                    setEmployees(data)
                })
        },
        []
    )



    const assignEmployee = (changeEvent) => {

        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            employeeId: parseInt(changeEvent.target.value),
            customerId: parseInt(localStorage.getItem("honey_customer")),
            dateCompleted: "2022"
        }

        //set(newTicket)

        return assignTicket(ticketId, newTicket)
            .then(() => {
                getTicket(ticketId)
                    .then(set)
                    // .then( () => {
                    //     history.push("/tickets")
                    // })
            })
    }

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">
                    <select
                        value={ticket.employeeId}
                        onChange={assignEmployee}>
                        {/* <option value="0" hidden>Select Employee</option> */}
                        {
                            employees.map(
                                (employee) => {
                                    return <option key={`employee--${employee.id}`} value={employee.id}>{employee.name}</option>
                                }
                            )
                        }
                    </select>
                </div>
            </section>
        </>
    )
}