import { Cardns, Caro, Dropdownns } from "../../components"
import { Row, Col } from "react-bootstrap"
import Wrapper from "../../assets/wrappers/Allmovies"
const Allmovies = () => {
    return (
        <Wrapper>

            <Caro />
            <div className="container">

            </div>
            <div className="mt-4 container">
                <br className="border-bottom-0" />

                <div className="cards ms-6">
                    <div className="center">

                        <Dropdownns className="mb-4 ml-3" />
                    </div>

                    <Row className="width: fit-content mb-5 container">
                        <Col>
                            <Cardns />
                        </Col>
                        <Col>
                            <Cardns />
                        </Col>
                        <Col>
                            <Cardns />
                        </Col>
                    </Row>

                    <Row className="mb-4 container">
                        <Col>
                            <Cardns />
                        </Col>
                        <Col>
                            <Cardns />
                        </Col>
                        <Col>
                            <Cardns />
                        </Col>
                    </Row>

                    <Row className="mb-4 container">
                        <Col>
                            <Cardns />
                        </Col>
                        <Col>
                            <Cardns />
                        </Col>
                        <Col>
                            <Cardns />
                        </Col>
                    </Row>
                </div>


            </div>
        </Wrapper>
    )
}

export default Allmovies