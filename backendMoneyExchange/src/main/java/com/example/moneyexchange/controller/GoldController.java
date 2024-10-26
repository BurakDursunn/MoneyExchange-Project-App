package com.example.moneyexchange.controller;

import com.example.moneyexchange.service.GoldService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class GoldController {

    private final GoldService goldService;

    public GoldController(GoldService goldService) {
        this.goldService = goldService;
    }



    @GetMapping("/api/gold-prices")
    public Map<String, Double> getGoldPrices() {
        return goldService.getGoldRates();
    }
}
