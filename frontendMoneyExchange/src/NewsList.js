import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: theme.shape.borderRadius,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    },
    maxWidth: '800px', 
    width: '100%', 
}));

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:8080/news'); // Backend URL
                const data = await response.json();
                setNews(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setError('Haberleri alırken bir hata oluştu.');
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Typography variant="h6" color="error">{error}</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
            <Box textAlign="center" marginBottom={4}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Finans Dünyasında Güncel Haberler
                </Typography>
            </Box>
            {news.slice(0, 3).map((item, index) => ( // İlk 3 haber
                <StyledCard key={index} sx={{ margin: '0 auto' }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                        <Button 
                            size="small" 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            variant="contained" 
                            color="primary"
                        >
                            Devamını Oku
                        </Button>
                    </CardActions>
                </StyledCard>
            ))}
        </Container>
    );
};

export default NewsList;
