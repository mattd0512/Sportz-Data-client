import { useEffect, useState } from "react"
import { Card, Col, Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import { nbaGame } from "../../api/game"

const backgroundCSS = {
    backgroundColor: 'rgb(212, 212, 212)',
    // backgroundColor: 'rgb(120, 219, 111)',
    display: 'flex',
    justifyContent: 'center',
    // height: '100rem'
}

const cardCSS = {
    marginLeft: '80px',
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
    paddingBottom: "50rem",
    paddingLeft: '35rem'
}

const cardHeader = {
    fontFamily: 'Bungee Inline',
    // backgroundColor: 'rgb(241, 50, 50)',
    // color: 'white'
}

const boldText = {
    fontWeight: 'bold'
}

const NbaGameShow = (props) => {

    const [nbaGames, setGameNba] = useState([])
    const {user, msgAlert} = props

    useEffect(() => {
        nbaGame(user)
            .then((res) => {
                setGameNba(
                    res.data.results
                )
            })
            // .catch((error) => {
            //     msgAlert({
            //         heading: 'Failure',
            //         message: 'Failure to show conferences ' + error,
            //         variant: 'danger'
            //     })
            // })
    }, [])

    return (
        <>
            <div style={backgroundCSS}>
                <Container className="fluid">
                    <Row>
                        <Col style={col1Style}>
                            <Card style={cardCSS}>
                                <Card.Header style={cardHeader}>
                                <h5 class="card-title">Upcoming Matchups</h5>
                                    <h4 style={boldText}>{nbaGame.conference}</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {nbaGames.map((result) => (
                                            <div>
                                            <small><span style={boldText}>Summary:</span> {result.summary}</small>
                                            <small><span style={boldText}>Scheduled Date:</span> {result.schedule.date}</small>
                                            <small><span style={boldText}>Away Odds:</span> {result.odds[0].spread.current.awayOdds}</small>
                                            <small><span style={boldText}>Home Odds:</span> {result.odds[0].spread.current.homeOdds}</small>
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

export default NbaGameShow