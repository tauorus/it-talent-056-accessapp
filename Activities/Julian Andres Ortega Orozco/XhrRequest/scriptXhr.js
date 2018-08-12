function buscarPelicula(){
    var resp = responseOmdbApi();       
       
}

function responseOmdbApi(){
    var searchMovie = document.getElementById('searchMovie').value;
    var url = "http://omdbapi.com/?s=" + searchMovie + "&apikey=deae4c65"
    var xhr = new XMLHttpRequest();
    var responseTextOmdbApi = "Hola";
    xhr.open('GET', url, true);  

    xhr.addEventListener('error', function(e) {
        console.log('Un error ocurrió', e);
        responseTextOmdbApi = "Un error ocurrió: " + e 
      });
      
      xhr.addEventListener('readystatechange', function() {
        console.log('xhr.readyState:', xhr.readyState);
      });

      xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
          console.log('rsc: '+ xhr.responseText);
          responseTextOmdbApi = xhr.responseText;  
          document.getElementById('lblMsg').innerHTML = responseTextOmdbApi;         
        }
      });
    xhr.send();
    responseTextOmdbApi = xhr.responseText;    
    return responseTextOmdbApi;
}