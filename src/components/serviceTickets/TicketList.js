import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Tickets.css";

const API = "http://localhost:8088"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const [totalTicketMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch(`${API}/serviceTickets?_expand=employee&_expand=customer`)
                .then(res => res.json())
                .then((ticketArray) => {
                    setTickets(ticketArray)
                })
        },
        []
    )

    const history = useHistory()

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            <div>{totalTicketMessage}</div>
            {
                tickets.map(
                    (ticket) => {
                        return <p key={`ticket--${ticket.id}`} className={`ticket ${ticket.emergency ? "emergency" : ""}`}>
                        {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                    </p>
                    }
                )
            }
        </>
    )
}