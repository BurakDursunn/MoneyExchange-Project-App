import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';

const CurrencyList = () => {
    const [currencyRates, setCurrencyRates] = useState({});

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                const response = await fetch('http://localhost:8080/currency-rates'); // Backend URL
                const data = await response.json();
                setCurrencyRates(data);
            } catch (error) {
                console.error('Error fetching currency rates:', error);
            }
        };

        fetchCurrencyRates();
    }, []);

    return (
        
        <Container className="mt-5">
            
            <Row className="justify-content-center">
                <Col md={5}>
                   
                    
                    <h1 className="text-center mb-4">Serbest Piyasa Döviz Kurları</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Döviz</th>
                                <th>Türk Lirası Değeri</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(currencyRates).map(([currency, rate]) => (
                                <tr key={currency}>
                                    <td>{currency}</td>
                                    <td>{rate}</td> {/* Formatlanmış döviz değeri */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default CurrencyList;