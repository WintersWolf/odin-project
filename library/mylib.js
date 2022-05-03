var apiKey = 'AIzaSyBH-1hXw_rWl_h2S8DRV3WYirxRE4nUarI';

      function handleClientLoad() {
          gapi.load('client', initClient);
      }

      function initClient() {
        gapi.client.init({
          apiKey: apiKey,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/urlshortener/v1/rest']
        }).then(showInputs)
      }

      function showInputs() {
        document.getElementById('requestFields').style.display = '';
      }

      function makeRequest() {
        function writeResponse(resp) {
          var responseText;
          if (resp.code && resp.data[0].debugInfo == 'QuotaState: BLOCKED') {
            responseText = 'Invalid API key provided. Please replace the "apiKey" value with your own.';
          } else {
            responseText = 'Short URL ' + shortUrl + ' expands to ' + resp.longUrl;
          }
          var infoDiv = document.getElementById('info');
          infoDiv.innerHTML = '';
          infoDiv.appendChild(document.createTextNode(responseText));
        }

        var shortUrl = document.getElementById('shortUrl').value;
        var request = gapi.client.urlshortener.url.get({
          'shortUrl': shortUrl
        });
        request.execute(writeResponse);
      }