import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';


const imageStyle = {
    width: '450px',
    height: '250px',
    borderRadius: '1%',
    marginRight: '15px',
};




const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={5}>
                    <Button variant="primary" onClick={handleShow}>
                        Contact
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>İletişim Bilgileri</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><strong>Kişi Adı:</strong>Furkan Sandık</p>
                            <p><strong>Telefon Numarası:</strong> +90 546 710 25 67</p>
                            <p><strong>Instagram Adresi:</strong> @altinsankuyumculuk</p>
                            <p><strong>Adres:</strong> Kaş mah, Kalkan, Antalya, Türkiye</p>
                            <img
                    src="/images/akkv.jpg" // Sadece /images ile başlayan yolu kullanın
                    alt="Logo"
                    style={imageStyle}
                />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Kapat
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
