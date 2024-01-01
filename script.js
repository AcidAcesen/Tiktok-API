async function getData() {
    const urlInput = document.getElementById('urlInput').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    const apiUrl = 'https://tiktok-video-no-watermark2.p.rapidapi.com/';

    const options = {
        method: 'GET',
        url: apiUrl,
        params: {
            url: urlInput,
            hd: '1'
        },
        headers: {
            'X-RapidAPI-Key': '66bee44222msh9ace5355b7cbca3p15c371jsn6bae0e49f43c',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const responseData = response.data.data;

        const outputHtml = `
            <h2>${responseData.title}</h2>
            <p>${responseData.author.nickname}</p>
            <video width="320" height="240" controls>
                <source src="${responseData.hdplay}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;

        outputDiv.innerHTML = outputHtml;
    } catch (error) {
        console.error(error);
        outputDiv.innerHTML = 'Error fetching data. Please try again.';
    }
}
