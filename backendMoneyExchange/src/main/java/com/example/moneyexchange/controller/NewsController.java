package com.example.moneyexchange.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@RestController
public class NewsController {
    private final RestTemplate restTemplate;
    private final String apiKey = "c1404eac823e4a9880a82ec3264e99f7"; // API anahtarınızı buraya ekleyin
    private final String apiUrl = "https://newsapi.org/v2/top-headlines?category=business&apiKey=" + apiKey;

    public NewsController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/news")
    public List<Map<String, Object>> getLatestNews() {
        Map<String, Object> response = restTemplate.getForObject(apiUrl, Map.class);
        return (List<Map<String, Object>>) response.get("articles");
    }
}
