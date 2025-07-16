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

// Per ogni membro del team, creo una card
teamMembers.forEach((member) => {
  // Uso destructuring per estrarre i campi da ogni oggetto
  const { name, role, email, img } = member;

  // Creo la colonna responsiva (col-12 su mobile, col-md-6, col-lg-4 su desktop)
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  // Creo la card (uso d-flex per disporre immagine + testo orizzontalmente)
  const card = document.createElement("div");
  card.className =
    "card bg-dark text-white d-flex flex-row align-items-center overflow-hidden";

  // Creo l'immagine del membro (sarà affiancata al testo)
  const image = document.createElement("img");
  Object.assign(image, {
    src: img,
    alt: name,
    className: "img-fluid",
    style: "width: 100px; height: 100%; object-fit: cover",
  });

  // Creo il corpo della card con nome, ruolo e email
  const body = document.createElement("div");
  body.className = "card-body py-2 px-3"; // compatto

  // Creo il nome (grassetto, maiuscolo)
  const title = document.createElement("h5");
  title.className = "card-title fw-bold text-uppercase mb-1";
  title.innerText = name;

  // Creo il ruolo
  const subtitle = document.createElement("p");
  subtitle.className = "card-text mb-1";
  subtitle.innerText = role;

  // Creo il link email
  const emailLink = document.createElement("a");
  Object.assign(emailLink, {
    href: `mailto:${email}`,
    innerText: email,
    className: "text-info text-decoration-none",
  });
});
