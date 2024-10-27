import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';

const GoldPrices = () => {
    const [goldPrices, setGoldPrices] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGoldPrices = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/gold-prices'); // Backend portunuza göre ayarlayın

                if (!response.ok) {
                    throw new Error('Ağ yanıtı beklenilen gibi değil');
                }

                const data = await response.json();
                console.log(data); // Gelen veriyi konsola yazdırın
                setGoldPrices(data); // Alınan veriyi state'e atıyoruz
            } catch (error) {
                console.error('Altın fiyatlarını yüklerken hata oluştu:', error);
                setError('Altın fiyatlarını yüklerken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'); // Hata mesajı
            } finally {
                setLoading(false);
            }
        };

        fetchGoldPrices();
    }, []);

    // İlk 10 fiyatı almak için
    const goldEntries = Object.entries(goldPrices).slice(0, 10);

    
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={5}>
                    <h1 className="text-center mb-4">Serbest Piyasa Altın Fiyatları</h1>
                    {loading ? (
                        <p style={{ textAlign: 'center' }}>Yükleniyor...</p>
                    ) : error ? (
                        <p style={{ textAlign: 'center', color: 'red' }}>{error}</p> // Hata mesajını burada gösteriyoruz
                    ) : (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Altın Türü</th>
                                    <th>Fiyat (TRY)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {goldEntries.map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value.toFixed(2)} TRY</td> {/* Formatlanmış fiyat değeri */}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default GoldPrices;
