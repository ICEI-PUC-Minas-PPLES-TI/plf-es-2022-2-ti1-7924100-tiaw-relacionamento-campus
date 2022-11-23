onload = () => {

  handleAnotherOption();
  handleSubmitForm();

}

// function loadImage() {
//   let imgInput = document.getElementById('user-picture');
//   let labelImg = document.getElementById('label-pic');

//   imgInput.addEventListener("change", () => {
//     let imgFile = document.getElementById('user-picture').files[0];
//     const reader = new FileReader();
//     reader.addEventListener("load", (e) => {
//       labelImg.innerHTML = "";

//       const newImg = document.createElement("img");
//       newImg.src = e.target.result;
//       newImg.classList.add("picture-img");
//       newImg.id = "picture-img";

//       labelImg.append(newImg);


//     }, false);

//     if (imgFile) reader.readAsDataURL(imgFile);
//   })
// }

function handleAnotherOption() {
  let anotherHobbie = document.querySelector('#another-hobbie');
  let addHobbie = document.querySelector('#add-hobbie');

  anotherHobbie.style.visibility = 'hidden';

  addHobbie.addEventListener('change', () => {
    if (addHobbie.checked) {
      anotherHobbie.style.visibility = 'visible';
      anotherHobbie.setAttribute('checked', true);
      anotherHobbie.value = '';
    } else {
      anotherHobbie.style.visibility = 'hidden';
    }
  })
}

// function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);

//   var dataURL = canvas.toDataURL("image/png");

//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

function handleSubmitForm() {

  let form = document.getElementById('user-sigin');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // let image = document.getElementById('picture-img');
    // let user_image;
    // if (image) user_image = getBase64Image(image);

    let user_name = document.getElementById('user-name').value;
    let user_email = document.getElementById('user-email').value;
    let user_password = document.getElementById('user-password').value;
    let user_area = document.getElementById('user-area').value;
    let user_birth = document.getElementById('user-birth').value;
    let user_sexuality = document.getElementById('user-sexuality').value;
    let user_insta = document.getElementById('user-insta').value;
    let user_number = document.getElementById('user-number').value;
    let interests = document.getElementsByName('interests[]');
    let hobbies = document.getElementsByName('hobbies[]');

    let user_interests = [];
    let user_hobbies = [];

    interests.forEach(interest => {
      if (interest.checked) {
        if (interest.value == "1") user_interests.push("Carona");
        else if (interest.value == "2") user_interests.push("Relacionamento");
        else if (interest.value == "3") user_interests.push("Happy Hour");
        else if (interest.value == "4") user_interests.push("Prática de esportes");
        else if (interest.value == "5") user_interests.push("Estudos");
        else if (interest.value == "6") user_interests.push("Jogos");
      };
    });

    let anotherHobbie = document.getElementById('another-hobbie');

    hobbies.forEach(hobbie => {
      if (hobbie.checked) {
        if (hobbie.value == "1") user_hobbies.push("Jogos");
        else if (hobbie.value == "2") user_hobbies.push("Filmes e Séries");
        else if (hobbie.value == "3") user_hobbies.push("Futebol");
        else if (hobbie.value == "4") user_hobbies.push("Conhecer novos lugares");
        else if (hobbie.value == "5") user_hobbies.push("Dança");
        else if (hobbie.value == "6") user_hobbies.push(anotherHobbie.value);
      };
    })


    const userObj = {
      profile_pic: "",
      nome: user_name,
      email: user_email,
      senha: user_password,
      regiao: user_area,
      nascimento: user_birth,
      sexualidade: user_sexuality,
      instagram: user_insta,
      numero: user_number,
      interesses: user_interests,
      hobbies: user_hobbies,
      amigos: []
    }

    pushObjToLS(userObj)

    form.reset();
    window.location = "../home/index.html";
  })
}

function pushObjToLS(obj) {
  let novoId = 1;

  if (db.users.length != 0) novoId = db.users[db.users.length - 1].id + 1;

  const newObj = {
    id: novoId,
    profile_pic: obj.profile_pic,
    nome: obj.nome,
    email: obj.email,
    senha: obj.senha,
    regiao: obj.regiao,
    nascimento: obj.nascimento,
    sexualidade: obj.sexualidade,
    instagram: obj.instagram,
    numero: obj.numero,
    interesses: obj.interesses,
    hobbies: obj.hobbies,
    amigos: obj.amigos
  }

  db.users.push(newObj);

  localStorage.setItem("users", JSON.stringify(db.users));

  // window.location = `user.html`;
}