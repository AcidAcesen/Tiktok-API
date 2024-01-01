# TikTok API Web App

[![TikTok API](https://img.shields.io/badge/TikTok%20API-v1.0-blue)](https://example.com/api)

This project is a straightforward web application designed to interact with the TikTok API, allowing users to retrieve video data, including title, author, and a high-definition version without a watermark. The application is implemented using HTML, CSS, and JavaScript, with Axios serving as the primary library for API requests.

## Usage

1. **Clone the Repository:**
   - ```bash
     git clone https://github.com/acidacesen/Tiktok-API.git
     cd Tiktok-API
     ```

2. **Open the Application:**
   - Open the `index.html` file in your web browser.

3. **Input TikTok Video URL:**
   - Follow the on-screen instructions to input the TikTok video URL.

## Preview
### Alternatively, you can [visit the deployed app here](https://acidacesen.github.io/Tiktok-API/).


## API Integration

The application utilizes the TikTok API. If needed, make adjustments to the code, such as adding your API key or modifying the endpoint URLs.

```javascript
// Replace 'YOUR_TIKTOK_API_KEY' with your actual TikTok API key
const options = {
    // ... other options
    headers: {
        'X-TikTok-API-Key': 'YOUR_TIKTOK_API_KEY',
        'X-TikTok-API-Host': 'tiktok-api.example.com'
    }
};
```
## Dependencies
Axios: A promise-based HTTP client for the browser and Node.js.
```
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
