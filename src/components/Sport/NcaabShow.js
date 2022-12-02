import { useEffect, useState } from "react"
import { Card, Col, Container } from "react-bootstrap"
import { ncaabShow } from "../../api/sport"
import Row from "react-bootstrap/Row"
import NcaabGameShow from "../game/NcaabGameShow"

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
    paddingLeft: '0rem'
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


const NcaabShow = (props) => {

    const [ncaab, setNcaab] = useState([])
    const {user, msgAlert} = props

    useEffect(() => {
        ncaabShow(user)
            .then((res) => {
                console.log(res.data.results)
                setNcaab(
                    res.data.results
                )
            })
            .catch((error) => {
                // msgAlert({
                //     heading: 'Failure',
                //     message: 'Failure to show conferences ' + error,
                //     variant: 'danger'
                // })
            })
    }, [])

    // if (!ncaab) {
    //     return (
    //         <>
    //             <div style={backgroundCSS}>
    //                 <Container style={findingResult}>
    //                     <p>Finding conferences</p>
    //                     <p>
    //                         <Spinner animation='border' style={spinnerCSS}>
    //                         </Spinner>
    //                     </p>
    //                 </Container>
    //             </div>
    //         </>
    //     )
    // }

    return (
        <>
            <div style={backgroundCSS}>
                <Container className="fluid">
                    <Row>
                        <Col style={col1Style}>
                            <Card style={cardCSS}>
                                <Card.Header style={cardHeader}>
                                <h5 class="card-title">NCAAB conference and Divisions</h5>
                                    <h4 style={boldText}>{ncaab.conference}</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {ncaab.map((result) => (
                                            <div>
                                                <small><span style={boldText}>Conference:</span> {result.conference}</small>
                                                <small><span style={boldText}>Division:</span> {result.division}</small>
                                                <small><span style={boldText}>League:</span> {result.league}</small>
                                            </div>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Card>
                    <NcaabGameShow/>
                </Card>
            </div>
        </>
    )
}

export default NcaabShow