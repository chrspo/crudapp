import React, {useEffect, useState} from "react"
import {Button, ButtonGroup, Container, Table} from "reactstrap";
import {Link} from "react-router-dom";
import AppNavbar from "./AppNavbar";

function ClientList () {
    const [clients, setClients] = useState([])
    const [isLoading, setLoading] = useState(true)

    // Load clients on component mount
    useEffect(() => {
        fetch('/clients')
            .then(response => response.json())
            .then(data => setClients(data))
        setLoading(false)
    }, [])

    // remove client by id
    async function remove(id) {
        await fetch(`/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...clients].filter(i => i.id !== id)
            setClients(updatedClients)
        });
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const clientList = clients.map(client => {
        return <tr key={client.id}>
            <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
            <td>{client.email}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/clients/" + client.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(client.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    })

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/clients/new">Add Client</Button>
                </div>
                <h3>Clients</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="30%">Name</th>
                        <th width="30%">Email</th>
                        <th width="40%">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clientList}
                    </tbody>
                </Table>
            </Container>
        </div>
    )

}

export default ClientList;