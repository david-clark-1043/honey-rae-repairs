import React from "react"
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketList } from "./serviceTickets/TicketList";

export const Repairs = () => {

    return (
        <>
        <h1 key="title">Honey Rae's Repair Shop</h1>
        <h2 key="customers">Customers</h2>
        <CustomerList />
        <h2 key="employees">Employees</h2>
        <EmployeeList />
        <h2 key="tickets">Tickets</h2>
        <TicketList />
        </>

    )
}