import React, { useEffect, useState } from "react"

const API = "http://localhost:8088"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch(`${API}/customers`)
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer.")
            }
            else {
                updateMessage(`You have ${customers.length} customers.`)
            }
        },
        [customers]
    )

    return (
        <>
        <div>{totalCustomerMessage}</div>
        {
            customers.slice(0, 5).map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
}