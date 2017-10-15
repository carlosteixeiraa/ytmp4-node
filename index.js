// Declaração Variaveis
const fs = require('fs');
const ytdl = require('ytdl-core');
var prompt = require('prompt-console');
var video;
var nomevideo;
var formato = "mp4";

// Link video
prompt.ask(
  [{
    question: 'Qual é o link do video?',
    name: 'linkvideo'
  }, ],
  function(response) {
    video = response.linkvideo
    // Chamar escolha do nome
    nomev();
  }
);
// Escolha do nome
function nomev() {
  prompt.ask(
    [{
      question: 'Qual é o nome do ficheiro?',
      name: 'nomevideo'
    }, ],
    function(response) {
      nomevideo = response.nomevideo + "." + formato;
      // Chamar download
      download();
    }
  );
}

// Download
function download() {
  ytdl(video, { filter: (format) => format.container === formato })
    .pipe(fs.createWriteStream(nomevideo));
  console.log('Download em progresso!')
}
