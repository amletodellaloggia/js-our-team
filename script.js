const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// Prendo il contenitore DOM dove inserirò le card
const container = document.getElementById("team-container");
container.classList.add("row", "gx-3", "gy-3", "px-3", "px-md-5"); // Aggiungo classi Bootstrap

// Funzione per creare card e inserirle nel container
function addMemberCard(member) {
  // Uso destructuring per estrarre i campi da ogni oggetto
  const { name, role, email, img } = member;

  // Creo la colonna responsiva (col-12 su mobile, col-md-6, col-lg-4 su desktop)
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  // Creo la card (uso d-flex per disporre immagine + testo orizzontalmente)
  const card = document.createElement("div");
  card.className = "bg-dark text-white d-flex flex-row align-items-stretch overflow-hidden shadow-sm rounded-0";
  card.style.height = "100px";

  // Creo l'immagine del membro (sarà affiancata al testo)
  const image = document.createElement("img");
  image.src = img;
  image.alt = name;
  image.className = "img-fluid";
  image.style.width = "100px";
  image.style.objectFit = "cover";
  image.style.display = "block";
  image.style.height = "100%";

  // Creo il corpo della card con nome, ruolo e email
  const body = document.createElement("div");
  body.className = "card-body py-2 px-3"; 

  // Creo il nome
  const title = document.createElement("h5");
  title.className = "card-title fw-bold text-uppercase mb-1";
  title.innerText = name;

  // Creo il ruolo
  const subtitle = document.createElement("p");
  subtitle.className = "card-text mb-1";
  subtitle.innerText = role;

  // Creo il link email
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${email}`;
  emailLink.innerText = email;
  emailLink.className = "text-info text-decoration-none";

  // Inserisco i contenuti nel body usando spread + rest operator
  const content = [title, subtitle, emailLink];
  body.append(...content); // Uso spread per appendere tutti

  card.append(image, body);
  col.append(card);

  // Inserisco la colonna nel container principale
  container.appendChild(col);
}

teamMembers.forEach(addMemberCard);

// Creo il form per aggiungere membri
const formWrapper = document.createElement("div");
formWrapper.id = "form-wrapper";
formWrapper.className = "bg-dark text-white shadow-sm rounded-0 p-3 mb-4 mx-3 mx-md-5";

const form = document.createElement("form");
form.id = "add-member-form";
form.className = "row g-3 justify-content-center";

form.innerHTML = `
  <div class="col-12 col-md-3">
    <input type="text" class="form-control" id="name" placeholder="Nome" required />
  </div>
  <div class="col-12 col-md-3">
    <input type="text" class="form-control" id="role" placeholder="Ruolo" required />
  </div>
  <div class="col-12 col-md-4">
    <input type="email" class="form-control" id="email" placeholder="Email" required />
  </div>
  <div class="col-12 col-md-2 d-grid">
    <button type="submit" class="btn btn-primary">Aggiungi</button>
  </div>
`;

formWrapper.appendChild(form);

// Appendo il form
const mainContainer = document.querySelector(".container");
mainContainer.appendChild(formWrapper);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value;
  const role = form.role.value;
  const email = form.email.value;

  if (name === "" || role === "" || email === "") return;

  const newMember = {
    name,
    role,
    email,
    img: "img/newmember.png",
  };

  teamMembers.push(newMember);
  addMemberCard(newMember);

  form.reset();
});