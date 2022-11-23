var db = {
  "users": [],
  "events": []
}

db.users = JSON.parse(localStorage.getItem("users"));
db.events = JSON.parse(localStorage.getItem("events"));

if(!db.users) {
  db.users = [
      {
        "id": 1,
        "profile_pic": "https://avatars.githubusercontent.com/u/83314995?v=4",
        "nome": "Bernardo Cavanellas Biondini",
        "email": "bernardobiondini@gmail.com",
        "senha": "pppppppp",
        "regiao": "Pampulha",
        "nascimento": "2001-09-26",
        "sexualidade": "Homossexual",
        "instagram": "obernardocb",
        "numero": "(31) 97125-2570",
        "interesses": [
          "Happy Hour",
          "Carona",
          "Estudo"
        ],
        "hobbies": [
          "Filmes e Séries",
          "Dança"
        ],
        "amigos": [2, 3, 4, 5]
      },
      {
        "id": 2,
        "email": "rommel@gmail.com",
        "hobbies": [
          "Filmes e Séries"
        ],
        "instagram": "rommeldamassa",
        "interesses": [
          "Happy Hour",
          "Relacionamento"
        ],
        "nascimento": "1970-03-20",
        "nome": "Rommel Romeo Rumiel",
        "numero": "(31) 9443-1312",
        "profile_pic": "https://randomuser.me/api/portraits/thumb/men/62.jpg",
        "regiao": "Pampulha",
        "senha": "LJ3b08@p",
        "sexualidade": "Hetero"
      },
      {
        "id": 3,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/women/63.jpg",
        "nome": "Lilian Cavanellas Biondini",
        "email": "liliancavanellas@hotmail.com",
        "senha": "llllllll",
        "regiao": "Pampulha",
        "nascimento": "1973-01-08",
        "sexualidade": "Hetero",
        "instagram": "liliancavanellas",
        "numero": "",
        "interesses": [
          "Happy Hour",
          "Carona",
          "Estudo"
        ],
        "hobbies": [
          "Filmes e Séries",
          "Dança",
          "Futebol"
        ],
        "amigos": []
      },
      {
        "id": 4,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/women/64.jpg",
        "nome": "Rita Ora",
        "email": "ritinha@gmail.com",
        "senha": "ritaohrita",
        "regiao": "Barreiro",
        "nascimento": "2000-12-09",
        "sexualidade": "Bissexual",
        "instagram": "taririta",
        "numero": "",
        "interesses": [
          "Carona",
          "Jogos"
        ],
        "hobbies": [
          "Game"
        ],
        "amigos": []
      },
      {
        "id": 5,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/women/65.jpg",
        "nome": "Vanessa Camargo",
        "email": "vancam@hotmal.com",
        "senha": "vanessanessa",
        "regiao": "Buritis",
        "nascimento": "1999-10-25",
        "sexualidade": "Homossexual",
        "instagram": "v_ansessa",
        "numero": "",
        "interesses": [
          "Happy Hour",
          "Relacionamento"
        ],
        "hobbies": [
          "Dança",
          "Cantar"
        ],
        "amigos": []
      },
      {
        "id": 6,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        "nome": "Pedro Junior",
        "email": "ppjr@hotmail.com",
        "senha": "PppEdrojr",
        "regiao": "Buritis",
        "nascimento": "2003-12-22",
        "sexualidade": "Hetero",
        "instagram": "ppjr",
        "numero": "(31) 97919-2121",
        "interesses": [
          "Carona",
          "Estudo"
        ],
        "hobbies": [],
        "amigos": []
      },
      {
        "id": 7,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/men/66.jpg",
        "nome": "Pedro da Silva",
        "email": "pedrinho_da_silva@gmail.com",
        "senha": "jjjjjjjj",
        "regiao": "Bandeirantes",
        "nascimento": "2000-04-13",
        "sexualidade": "Homossexual",
        "instagram": "pedasilva",
        "numero": "",
        "interesses": [
          "Carona",
          "Jogos"
        ],
        "hobbies": [
          "Game"
        ],
        "amigos": []
      },
      {
        "id": 8,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/women/66.jpg",
        "nome": "Isabela Correa de Paula",
        "email": "isadepaula@gmail.com",
        "senha": "llllllll",
        "regiao": "Bandeirantes",
        "nascimento": "1998-01-02",
        "sexualidade": "Homossexual",
        "instagram": "isadp",
        "numero": "",
        "interesses": [
          "Estudo"
        ],
        "hobbies": [],
        "amigos": []
      },
      {
        "id": 9,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/men/67.jpg",
        "nome": "Marcelo Soares",
        "email": "marceloos@gmail.com",
        "senha": "mmmmmmmmm",
        "regiao": "Savassi",
        "nascimento": "2002-08-30",
        "sexualidade": "Hetero",
        "instagram": "marcelinhoo",
        "numero": "",
        "interesses": [
          "Happy Hour",
          "Carona",
          "Estudo"
        ],
        "hobbies": [
          "Game",
          "Futebol"
        ],
        "amigos": []
      },
      {
        "id": 10,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/men/68.jpg",
        "nome": "Lucas Soares dos Santos",
        "email": "lucas.soares@gmail.com",
        "senha": "llllllll",
        "regiao": "Savassi",
        "nascimento": "1999-06-13",
        "sexualidade": "Bissexual",
        "instagram": "lucassdossantos",
        "numero": "",
        "interesses": [
          "Carona",
          "Relacionamento"
        ],
        "hobbies": [],
        "amigos": []
      },
      {
        "id": 11,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/women/68.jpg",
        "nome": "Mariana Verrichen",
        "email": "mariverr@gmail.com",
        "senha": "kasnkdnsakndk",
        "regiao": "Savassi",
        "nascimento": "2003-10-31",
        "sexualidade": "Hetero",
        "instagram": "mariverr",
        "numero": "",
        "interesses": [
          "Carona",
          "Estudo"
        ],
        "hobbies": [
          "Dança"
        ],
        "amigos": []
      },
      {
        "id": 12,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/men/69.jpg",
        "nome": "Bruno Andrade",
        "email": "brunoandrade@gmail.com",
        "senha": "brubruib]a",
        "regiao": "Pampulha",
        "nascimento": "1991-07-13",
        "sexualidade": "Homossexual",
        "instagram": "brunoand",
        "numero": "",
        "interesses": [
          "Happy Hour",
          "Carona",
          "Jogos",
          "Estudo"
        ],
        "hobbies": [
          "Game",
          "Filmes e Séries",
          "Dança"
        ],
        "amigos": []
      },
      {
        "id": 13,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/women/54.jpg",
        "nome": "Milene de Almeida",
        "email": "mileneida@hotmail.com",
        "senha": "mimimimimimi",
        "regiao": "Buritis",
        "nascimento": "2000-03-12",
        "sexualidade": "Homossexual",
        "instagram": "mileneal",
        "numero": "",
        "interesses": [
          "Happy Hour",
          "Jogos"
        ],
        "hobbies": [
          "Game",
          "Futebol"
        ],
        "amigos": []
      },
      {
        "id": 14,
        "profile_pic": "https://randomuser.me/api/portraits/thumb/men/54.jpg",
        "nome": "Roberto Carlos",
        "email": "robertinhocantor@gmail.com",
        "senha": "akjsdjansjdnaisj",
        "regiao": "Savassi",
        "nascimento": "1950-07-30",
        "sexualidade": "Bissexual",
        "instagram": "robertocarloscantor",
        "numero": "",
        "interesses": [
          "Carona",
          "Estudo"
        ],
        "hobbies": [
          "Dança"
        ],
        "amigos": []
      }
    ]
}

if(!db.events) {
  db.events = [
    {
      "id": 1,
      "nome": "Encontro Engenharias PUC-Praça",
      "cidade": "Belo Horizonte",
      "categoria": "Happy Hour",
      "email": "Welbert.Luiz@gmail.com",
      "telefone": "(31) 98416-59XX",
      "texto": "Venha divertir-se nesse inusitado encontro."
    },
    {
      "id": 2,
      "nome": "Petequeiros da PUC",
      "cidade": "Contagem",
      "categoria": "Esporte",
      "email": "Welbert.Luiz@gmail.com",
      "telefone": "(31) 98416-59XX",
      "texto": "É horas de exercitar-se. Quadra de esporte da PUC-Corel."
    },
    {
      "id": 3,
      "nome": "Sarau de poesia e duelo de MCs - Psicologia/Musica/Letras",
      "cidade": "Belo Horizonte",
      "categoria": "Cultura e arte",
      "email": "Welbert.Luiz@gmail.com",
      "telefone": "(31) 98416-59XX",
      "texto": "Cultura e Arte"
    }
  ];
}