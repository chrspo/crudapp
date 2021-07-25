import React, {useEffect, useState} from "react"
import {Link, withRouter} from "react-router-dom";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import AppNavbar from "./AppNavbar";

function ClientEdit (props) {
    const [client, setClient] = useState({
        name: '',
        email: ''
    })

    // Check on component mount, if ww need the edit or create form
    useEffect(async () => {
        if (props.match.params.id !== 'new') {
            const client = await (await fetch(`/clients/${props.match.params.id}`)).json()
            setClient(client)
        }
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        let item = {...client}

        item[name] = value
        setClient(item)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await fetch('/clients' + (client.id ? '/' + client.id : ''), {
            method: (client.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client),
        })
        props.history.push('/clients');
    }

    return <div>
        <AppNavbar/>
        <Container>
            <h2>{client.id ? 'Edit Client' : 'Add Client'}</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={client.name || ''}
                           onChange={handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" id="email" value={client.email || ''}
                           onChange={handleChange} autoComplete="email"/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/clients">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
}

export default withRouter(ClientEdit);