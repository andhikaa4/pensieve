import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../Images/logo.png'

function Navbar() {
    return (
        <Container fluid >
            <Container fluid-xxl className='pt-5 fixed-top'>
                <Row>
                    <Col className='d-flex justify-content-center'>    
                            <img style={{ width: "100px", height: "100px",objectFit:"contain", filter:"invert(100%)"}} src={Logo} alt="" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Navbar;