package com.example.moneyexchange.Dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public class GoldResponse {
    private String status;
    private Map<String, Double> metals;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Map<String, Double> getMetals() {
        return metals;
    }

    public void setMetals(Map<String, Double> metals) {
        this.metals = metals;
    }
}
