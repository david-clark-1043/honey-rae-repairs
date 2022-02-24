import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteTicket, fetchTickets } from "../ApiManager";
import "./Tickets.css";

const API = "http://localhost:8088"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(
        () => {
            fetchTickets()
            .then((ticketArray) => {
                setTickets(ticketArray)
            })
        },
        []
    )

    const removeTicket = (ticketId) => {
        return deleteTicket(ticketId)
            .then(fetchTickets)
            .then((ticketArray) => {
                setTickets(ticketArray)
            })
    }

    const history = useHistory()

    return (
        <>
            <div key="hireButton">
                <button key="hireButtonButton" onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>

            {
                tickets.map(
                    (ticket) => {
                        return (
                            <p key={`ticket--${ticket.id}`} className={`ticket ${ticket.emergency ? "emergency" : ""}`}>
                                {ticket.emergency ? "🚑" : ""} <Link to={`tickets/${ticket.id}`} key={`ticketLink--${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                                <button
                                    key={`deleteTicket--${ticket.id}`}
                                    onClick={() => {
                                        removeTicket(ticket.id)
                                    }}>
                                    Delete
                                </button>
                            </p>
                        )
                    }
                )
            }
        </>
    )
}

/*
<button 
    key={`deleteTicket--${ticket.id}`}
    onClick={() => {
    deleteTicket(ticket.id)
    }}>
    Delete
</button> 
*/