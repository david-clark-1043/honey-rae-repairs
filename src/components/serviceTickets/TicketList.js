import React, { useEffect, useState } from "react"

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


    return (
        <>
        <div>{totalTicketMessage}</div>
        {
            tickets.map(
                (ticketObject) => {
                    return <p key={`ticket--${ticketObject.id}`}>
                        {ticketObject.description} submitted by {ticketObject.customer.name} worked on by {ticketObject.employee.name}
                        </p>
                }
            )
        }
        </>
    )
}