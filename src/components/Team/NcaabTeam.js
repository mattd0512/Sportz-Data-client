import { useEffect, useState } from "react"
import { Card, Col, Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Spinner from "react-bootstrap/Spinner"
import { ncaabTeam } from "../../api/team"

const backgroundCSS = {
    backgroundColor: 'rgb(212, 212, 212)',
    // backgroundColor: 'rgb(120, 219, 111)',
    display: 'flex',
    justifyContent: 'center',
    // height: '100rem'
}

const cardCSS = {
    marginTop: '20px',
    marginBottom: '20px',
    width: '40rem',
    height: '35rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '2.5%',
}

const col1Style = {
    paddingLeft: '15rem'
}

const cardHeader = {
    fontFamily: 'Bungee Inline',
    // backgroundColor: 'rgb(241, 50, 50)',
    // color: 'white'
}

const boldText = {
    fontWeight: 'bold'
}

const findingResult = {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: '30%',
    fontSize: '200%',
    color: 'rgb(241, 50, 50)'
}

const spinnerCSS = {
    marginLeft: '15%',
}

const NcaabTeam = (props) => {

    const [ncaab, setNcaab] = useState(null)
    const {user, msgAlert} = props

    useEffect(() => {
        ncaabTeam(user)
            .then((res) => {
                setNcaab(
                     res.data.results
                )
                console.log(res.data)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Failure to show teams ' + error,
                    variant: 'danger'
                })
            })
    }, [])

    if (!ncaab) {
        return (
            <>
                <div style={backgroundCSS}>
                    <Container style={findingResult}>
                        <p>Finding conferences</p>
                        <p>
                            <Spinner animation='border' style={spinnerCSS}>
                            </Spinner>
                        </p>
                    </Container>
                </div>
            </>
        )
    }

    return (
        <>
            <div style={backgroundCSS}>
                <Container className="fluid">
                    <Row>
                        <Col style={col1Style}>
                            <Card style={cardCSS}>
                                <Card.Header style={cardHeader}>
                                    <h4 style={boldText}>{ncaab.conference}</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {ncaab.map((result) => (
                                            <div>
                                                <small><span style={boldText}>Team:</span> {result.team}</small>
                                                <small><span style={boldText}>Conference:</span> {result.conference}</small>
                                                <small><span style={boldText}>Division:</span> {result.division}</small>
                                            </div>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NcaabTeam