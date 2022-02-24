const API = "http://localhost:8088"

export const getAllCustomers = () => {
    return fetch(`${API}/customers`)
        .then(res => res.json())
}

export const getEmployee = (employeeId) => {
    return fetch(`${API}/employees/${employeeId}`)
        .then(res => res.json())
}

export const getEmployees = () => {
    return fetch(`${API}/employees`)
        .then(res => res.json())
}
export const sendEmployee = (newEmployee) => {

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }

    return fetch(`${API}/employees`, fetchOption)
        .then(res => res.json())

}

export const getTicket = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
        .then(res => res.json())
}

export const assignTicket = (ticketId, newTicket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newTicket)
    })
        .then(res => res.json())
}

export const sendTicket = (newTicket) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newTicket)
    }
    return fetch("http://localhost:8088/serviceTickets", fetchOption)
        .then(res => res.json())
}

export const fetchTickets = () => {
    return fetch(`${API}/serviceTickets?_expand=employee&_expand=customer`)
        .then(res => res.json())
}

export const deleteTicket = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
                method: "DELETE"
            })
}

