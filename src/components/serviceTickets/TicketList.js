import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Tickets.css";

const API = "http://localhost:8088"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])


    const fetchTickets = () => {
        return fetch(`${API}/serviceTickets?_expand=employee&_expand=customer`)
            .then(res => res.json())
            .then((ticketArray) => {
                setTickets(ticketArray)
            })
    }

    useEffect(
        fetchTickets,
        // () => {
        //     fetch(`${API}/serviceTickets?_expand=employee&_expand=customer`)
        //         .then(res => res.json())
        //         .then((ticketArray) => {
        //             setTickets(ticketArray)
        //         })
        // },
        []
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(fetchTickets)
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
                                        deleteTicket(ticket.id)
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