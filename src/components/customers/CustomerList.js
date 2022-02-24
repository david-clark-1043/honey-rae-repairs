import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"
const API = "http://localhost:8088"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            getAllCustomers()
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