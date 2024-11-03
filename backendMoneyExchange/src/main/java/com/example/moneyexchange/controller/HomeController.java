package com.example.moneyexchange.controller;

import com.example.moneyexchange.service.CurrencyService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HomeController {

    private final CurrencyService currencyService;

    public HomeController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @GetMapping("/currency-rates")
    public Map<String, String> getCurrencyRates() {
        return currencyService.getRates();
    }
}
