import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import img1 from './Img/product_1.jpg'
import img2 from './Img/product_2.jpg'
import img3 from './Img/product_3.jpg'
import img4 from './Img/product_4.jpg'
import './App.css'
export default function Products() {
    return (
        <div className='fist'>

            <Container>
                <h1 className='text-center'>LATEST ARRIVALS</h1>
                <Row>
                    <Col sm="6" md="4" lg="3">
                        <Card
                        >
                            <img
                                alt="Sample"
                                src={img1}
                            />
                            <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    FOSSIL
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    BERING ROSE GOLD STEEL MESH
                                </CardSubtitle>
                                <CardText>
                                    $100-$350
                                </CardText>
                                <Button>
                                    VIEW PRODUCTS
                                </Button>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col sm="6" md="4" lg="3">
                        <Card 
                        > 
                        <div className='discount'>-17%</div>
                            <img
                                alt="Sample"
                                src={img2}
                            />
                            <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    FOSSIL
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    BERING ROSE GOLD STEEL MESH
                                </CardSubtitle>
                                <CardText>
                                    $100-$350
                                </CardText>
                                <Button>
                                    VIEW PRODUCTS
                                </Button>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col sm="6" md="4" lg="3">
                        <Card
                        >
                            <img
                                alt="Sample"
                                src={img3}
                            />
                            <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    FOSSIL
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    BERING ROSE GOLD STEEL MESH
                                </CardSubtitle>
                                <CardText>
                                    $100-$350
                                </CardText>
                                <Button>
                                    VIEW PRODUCTS
                                </Button>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col sm="6" md="4" lg="3">
                        <Card
                        >
                            <img
                                alt="Sample"
                                src={img4}
                            />
                            <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    FOSSIL
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    BERING ROSE GOLD STEEL MESH
                                </CardSubtitle>
                                <CardText>
                                    $100-$350
                                </CardText>
                                <Button>
                                    VIEW PRODUCTS
                                </Button>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}