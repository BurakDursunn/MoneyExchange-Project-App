package com.example.moneyexchange.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Service
public class CurrencyService {

    private final RestTemplate restTemplate;
    private final String apiKey = "518b2e215644e9d75c4a7c317ad5b53f"; // API anahtarınızı buraya yazın
    private final String apiUrl = "https://api.exchangeratesapi.io/v1/latest";
    private final Set<String> popularCurrencies = Set.of(
            "USD", "EUR", "GBP", "AUD", "CAD", "CHF", "CNY", "SEK", "RUB"
    );



    // Önbellek olarak kullanılacak değişken
    private Map<String, String> cachedRates = new HashMap<>();
    private boolean isCacheInitialized = false;

    public CurrencyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // Günlük olarak her gece saat 2'de (sistem saatine göre) verileri güncelleyen yöntem
    @Scheduled(cron = "0 0 2 * * *") // Günde bir defa çalışması için cron ifadesi: "Her gün saat 02:00'de"
    public void refreshRates() {
        Map<String, String> updatedRates = fetchLatestRates();
        if (!updatedRates.isEmpty()) {
            cachedRates = updatedRates;
            isCacheInitialized = true;
        }
    }

    // Verileri çekip cache'e kaydeder
    private Map<String, String> fetchLatestRates() {
        String url = apiUrl + "?access_key=" + apiKey;

        try {
            Map<String, Object> response = restTemplate.getForObject(url, Map.class);

            if (response != null && response.containsKey("rates")) {
                Map<String, Number> allRates = (Map<String, Number>) response.get("rates");
                Map<String, String> filteredRates = new HashMap<>();

                Number tryRate = allRates.get("TRY");
                if (tryRate == null) {
                    System.err.println("Türk Lirası'nın değeri bulunamadı!");
                    return Map.of();
                }

                for (String currency : popularCurrencies) {
                    if (allRates.containsKey(currency)) {
                        Number rate = allRates.get(currency);
                        double tryValue = tryRate.doubleValue() / rate.doubleValue();
                        filteredRates.put(currency, String.format("%.2f TRY", tryValue));
                    }
                }
                return filteredRates;
            }
        } catch (Exception e) {
            System.err.println("API çağrısında hata oluştu: " + e.getMessage());
        }
        return Map.of();
    }

    // Gerekli yerden çağrılabilecek ana fonksiyon: önbelleği döndürür
    public Map<String, String> getRates() {
        if (!isCacheInitialized) {
            refreshRates(); // Önbellek henüz başlatılmamışsa güncelle
        }
        return cachedRates;
    }
}
