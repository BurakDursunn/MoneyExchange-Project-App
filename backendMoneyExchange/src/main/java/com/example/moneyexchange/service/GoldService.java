package com.example.moneyexchange.service;

import com.example.moneyexchange.Dto.GoldResponse;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class GoldService {

    private final String API_KEY = "KH42L4Z0IX1MWLQRDM28358QRDM28";
    private final String API_URL = "https://api.metals.dev/v1/latest?api_key=" + API_KEY + "&currency=TRY&unit=g";

    private Map<String, Double> goldRates; // Altın fiyatlarını saklamak için

    public GoldService() {
        // Uygulama başlatıldığında fiyatları hemen güncelle
        updateGoldRates();
    }

    @Scheduled(cron = "0 0 0 * * ?") // Her gün saat 00:00'da çalışacak
    public void updateGoldRates() {
        RestTemplate restTemplate = new RestTemplate();
        try {
            GoldResponse response = restTemplate.getForObject(API_URL, GoldResponse.class);
            if (response != null && response.getStatus().equals("success")) {
                goldRates = response.getMetals(); // Altın fiyatlarını güncelle
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Map<String, Double> getGoldRates() {
        return goldRates; // Güncel fiyatları döner
    }
}
