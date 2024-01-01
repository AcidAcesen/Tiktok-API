# TikTok API Web App 🎉

This project is a simple web application that utilizes the TikTok API to retrieve data from TikTok videos. Users can input the URL of a TikTok video, and the application will fetch and display relevant information about the video.

## How to Use 🚀

1. Clone or download the project repository.

   ```bash
   git clone https://github.com/your-username/tiktok-api-web-app.git
Open the project in your preferred code editor.

bash
Copy code
cd tiktok-api-web-app
code .
Open the index.html file in your web browser or deploy the project to a web server.

In the web application, you will see an input field where you can enter the URL of a TikTok video.

Click the "Get Data" button to initiate the data retrieval process.

The application will display information about the TikTok video, including the video title, author's nickname, and a playable video without a watermark.

Dependencies 📦
axios: A promise-based HTTP client for the browser and Node.js. The project uses Axios to make API requests.
API Key 🔑
The TikTok API requires an API key for authentication. In the script.js file, you will find the following headers containing the API key:

javascript
Copy code
headers: {
    'X-RapidAPI-Key': '66bee44222msh9ace5355b7cbca3p15c371jsn6bae0e49f43c',
    'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
}
Note: Ensure you have the correct and valid API key for the TikTok API. You can obtain it from the RapidAPI platform.

Project Structure 📂
index.html: The main HTML file that contains the structure of the web application.
styles.css: The stylesheet file for styling the web application.
script.js: The JavaScript file that contains the logic for fetching and displaying TikTok video data.
Acknowledgments 🙌
This project uses the TikTok API provided by RapidAPI.
Troubleshooting ❓
If you encounter any issues or errors while using the web application, please check the following:

Ensure that the TikTok video URL is valid.
Confirm that the API key in the script.js file is correct and has the necessary permissions.
Check your browser's console for any error messages.
Feel free to contribute to and enhance this project. If you have any questions or suggestions, please create an issue in the repository.
