const apiKey = "runrxOHnQUeKA1TLb9KDiVtMPqbYvjx6TolBzJrZ";
const searchUrl = `https://freesound.org/apiv2/search/text/?query=lofi&filter=duration:[120.0 TO *]&token=${apiKey}`;

fetch(searchUrl)
  .then(response => response.json())
  .then(data => {
    const modalBodies = document.querySelectorAll('.modal-body-audio');
    modalBodies.forEach(modalBody => {
      for (let i = 0; i < 5; i++) {
        const soundId = data.results[i+1].id;
        const soundUrl = `https://freesound.org/apiv2/sounds/${soundId}/?token=${apiKey}`;
        fetch(soundUrl)
          .then(response => response.json())
          .then(data => {
            const audioUrl = data.previews["preview-hq-mp3"];
            const audioElement = document.createElement("audio");
            audioElement.controls = true;
            audioElement.src = audioUrl;
            modalBody.appendChild(audioElement);
          })
          .catch(error => console.error(error));
      }
    });
  })
  .catch(error => console.error(error));

function ticket(){
    
    email=document.getElementById('inputemail').value;
    document.getElementById('tickets').innerHTML=`THANK YOU FOR PURCHASING, WE WILL CONTACT YOU ON YOUR EMAIL <b>${email}<b>`;
}

function order(){
    email=document.getElementById('inputemail').value;
    document.getElementById('order').innerHTML=`THANK YOU FOR PURCHASING, WE WILL CONTACT YOU ON YOUR EMAIL <b>${email}<b>`;
}

