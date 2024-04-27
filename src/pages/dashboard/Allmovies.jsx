import { Cardns, Caro, Dropdownns } from "../../components"
import { Row,Col } from "react-bootstrap"
const Allmovies = () => {
    return (
        <div>

            <Caro />

            <div className="mt-4 container   ">
            <Dropdownns className="mb-4" />
            <br className="border-bottom-0"/>
                <Row className="width: fit-content mb-4 container">
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
    )
}

export default Allmovies