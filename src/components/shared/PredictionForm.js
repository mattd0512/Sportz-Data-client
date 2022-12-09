import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const PredictionForm = (props) => {
    const {prediction, handleChange, handleSubmit, heading} = props

    return (
        //make sure you're being consistent throughout your code, even when coding with someone else. you used single quotes in other spots but double quotes in some. consistency is important!
        <Container className="justify-content-center">
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Winner:</Form.Label>
                <Form.Control 
                    placeholder="Who do you think will win?"
                    name="winner"
                    id="name"
                    value= { prediction.winner }
                    onChange={ handleChange }
                />
                <Form.Label>Comment:</Form.Label>
                <Form.Control 
                    placeholder="Tell us what you think of the game!"
                    name="comment"
                    id="description"
                    value= { prediction.comment }
                    onChange={ handleChange }
                />
                 <Form.Label>Favorite Player:</Form.Label>
                <Form.Control 
                    placeholder="Who's your favorite player on either team?"
                    name="name"
                    id="name"
                    value= { prediction.name }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default PredictionForm