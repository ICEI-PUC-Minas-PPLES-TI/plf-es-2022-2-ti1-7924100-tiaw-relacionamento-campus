// declara um conjunto inicial de textos
// var db_textos_inicial = {
//   "data": 
//   [
//       {
//           "id": 1,
//           "nome": "Encontro Engenharias PUC-Praça",
//           "cidade": "Belo Horizonte",
//           "categoria": "Happy Hour",
//           "email": "Welbert.Luiz@gmail.com",
//           "telefone": "(31) 98416-59XX",
//           "texto": "Venha divertir-se nesse inusitado encontro."
//       },
//       {
//           "id": 2,
//           "nome": "Petequeiros da PUC",
//           "cidade": "Contagem",
//           "categoria": "Esporte",
//           "email": "Welbert.Luiz@gmail.com",
//           "telefone": "(31) 98416-59XX",
//           "texto": "É horas de exercitar-se. Quadra de esporte da PUC-Corel."
//       },
//       {
//           "id": 3,
//           "nome": "Sarau de poesia e duelo de MCs - Psicologia/Musica/Letras",
//           "cidade": "Belo Horizonte",
//           "categoria": "Cultura e arte",
//           "email": "Welbert.Luiz@gmail.com",
//           "telefone": "(31) 98416-59XX",
//           "texto": "Cultura e Arte"
//       }
//   ]
// }

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
// var db = JSON.parse(localStorage.getItem('db_texto'));
// if (!db) {
//   db.data = db_textos_inicial
// };


// console.log("Eventooooooss");
// console.log(db.events);

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertTexto(texto) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1;
  if (db.events.length != 0) 
    novoId = db.events[db.events.length - 1].id + 1;
  let novoTexto = {
      "id": novoId,
      "nome": texto.nome,
      "email" : texto.email,
      "telefone": texto.telefone,
      "cidade" : texto.cidade,
      "categoria": texto.categoria,
      "texto": texto.texto,
  };

  // Insere o novo objeto no array
  db.events.push(novoTexto);
  displayMessage("Texto inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('events', JSON.stringify(db.events));
}

function updateTexto(id, texto) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.evets.map(obj => obj.id).indexOf(id);

  // Altera os dados do objeto no array
  db.evets[index].nome = texto.nome,
  db.evets[index].email = texto.email,
  db.evets[index].telefone = texto.telefone,
  db.evets[index].cidade = texto.cidade,
  db.evets[index].categoria = texto.categoria,
  db.evets[index].texto = texto.texto,

  displayMessage("Evento alterado com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('events', JSON.stringify(db.evets));
}

function deleteTexto(id) {    
  // Filtra o array removendo o elemento com o id passado
  db.events = db.events.filter(function (element) { return element.id != id });

  displayMessage("Texto removido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('events', JSON.stringify(db.events));
}


// Limpar Local Storage.
// var db = JSON.parse(localStorage.clear('db_texto'));