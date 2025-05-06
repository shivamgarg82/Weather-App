# ☀️ Weather App

[![GitHub license](https://img.shields.io/github/license/shivamgarg82/Weather-App)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/shivamgarg82/Weather-App)](https://github.com/shivamgarg82/Weather-App/stargazers)

A real-time weather forecasting application with location detection and 5-day forecast.

![Screenshot 2025-05-06 153047](https://github.com/user-attachments/assets/4cc3170c-93f0-4c20-9f16-039ed9da53a8)


## 🌟 Key Features
- 🌍 Automatic location detection + manual city search
- 📊 Detailed metrics: Temperature (℃/℉), Humidity, Wind Speed
- 🗓️ 5-day weather forecast with icons
- 🌙 Day/Night mode based on local time
- 📱 Fully responsive PWA (Progressive Web App)

## 🚀 Quick Start

```bash
# Clone with HTTPS
git clone https://github.com/shivamgarg82/Weather-App.git

# Install dependencies (if any)
npm install

# Launch development server
npm start

🔧 Project Structure
Weather-App/
├── assets/
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript modules
│   ├── icons/          # Weather icons
│   └── demo.gif        # Screen recording
├── index.html          # Main entry point
├── manifest.json       # PWA configuration
├── LICENSE             # MIT License
└── README.md           # This file
🌐 API Reference
Uses OpenWeatherMap API:

Current Weather Data API

5 Day / 3 Hour Forecast API

Geocoding API

🛠️ Development Setup
Get API key from OpenWeatherMap

Create config.js:

javascript
const API_KEY = "your_api_key_here";
Include in index.html:

html
<script src="./assets/js/config.js"></script>
🤝 How to Contribute
bash
# Standard workflow:
git fork https://github.com/shivamgarg82/Weather-App.git
git checkout -b feature/your-feature
# Make changes...
git commit -m "feat: add your feature"
git push origin feature/your-feature
📜 License
MIT © Shivam Garg

🔗 Live Demo: https://appweathe1.netlify.app/
🐞 Report Issues: GitHub Issues
💡 Feature Requests: Open an issue with the "enhancement" label
