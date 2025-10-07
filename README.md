# Quotes Generator

A simple, elegant web app that fetches and displays random quotes at the click of a button.

---

## Features

- Display random quotes on button click  
- Clean and responsive UI  
- Easily extendable for quote sources (APIs, local list)  
- Lightweight — no heavy frameworks

---

## Tech Stack

- HTML5  
- CSS3  
- Vanilla JavaScript  
- (Optional enhancements: Bootstrap, Icons, etc.)
- Quotes API
---

## 🔗 Data Source

This app fetches quotes from a third-party API:  
👉 [API Ninjas - Quotes API](https://api-ninjas.com/api/quotes)

The request uses an API key and headers to fetch quotes dynamically via JavaScript `fetch()`:

- Method: `GET`
- Endpoint: `https://api.api-ninjas.com/v1/quotes`
- Header: `X-Api-Key: your-api-key-here`

> Note: For security reasons, **do not expose your actual API key** in production.

