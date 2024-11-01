package com.example.moneyexchange.Dto;

import java.util.Map;

public class ExchangeRatesResponse {
    private Map<String, Double> rates;
    private String base;
    private String date;



    // Getter ve Setter metodları
    public Map<String, Double> getRates() {
        return rates;
    }

    public void setRates(Map<String, Double> rates) {
        this.rates = rates;
    }

    public String getBase() {
        return base;
    }

    public void setBase(String base) {
        this.base = base;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}

