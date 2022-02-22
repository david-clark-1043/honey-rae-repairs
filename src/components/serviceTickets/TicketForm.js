import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const TicketForm = () => {
    const [ticket, updateTicket] = useState();

    const saveTicket = (event) => {
        event.preventDefault()
    }

    const history = useHistory()

    const submitTicket = (evt) => {
        evt.preventDefault()
        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            employeeId: 1,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            dateCompleted: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch("http://localhost:8088/serviceTickets", fetchOption)
                .then(() => {
                    history.push("/tickets")
                })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={(evt) => {
                            const copy = {...ticket}
                            copy.description = evt.target.value
                            updateTicket(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={(evt) => {
                            const copy = {...ticket}
                            copy.emergency = evt.target.checked
                            updateTicket(copy)
                        }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitTicket}>
                Submit Ticket
            </button>
        </form>
    )
}