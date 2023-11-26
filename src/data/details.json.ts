export interface Template {
  link: string;
  title: string;
  location: string;
  date: string;
  type: 'work' | 'education';
};

const one: Template = {
  link: "https://www.nur.it",
  title: "Technical SEO Lead at NUR S.r.l.",
  location: "San Giorgio Bigarello, Italy",
  date: "2022 - Now",
  type: 'work',
};

const two: Template = {
  link: "https://www.tesecom.it",
  title: "SEO/SEM Specialist at Tesecom S.r.l.",
  location: "Pisa, Italy",
  date: "2020 - 2022",
  type: 'work',
};

const three: Template = {
  link: "https://www.brand-store.it",
  title: "E-Commerce Specialist at BRAND-STORE S.r.l.",
  location: "Ponsacco, Italy",
  date: "2019 - 2020",
  type: 'work',
};

const four: Template = {
  link: "https://www.comunicareimpresa.com",
  title: "Executive Master at Centro Studi Comunicare l'Impresa",
  location: "Online",
  date: "2021 - 2022",
  type: 'education',
};

const five: Template = {
  link: "https://www.24orebs.com",
  title: "Executive Master at 24ORE Business School",
  location: "Online",
  date: "2021",
  type: 'education',
};

const six: Template = {
  link: "https://www.ied.edu",
  title: "Executive Master at IED Istituto Europeo di Design",
  location: "Firenze, Italy",
  date: "2020 - 2021",
  type: 'education',
};

// ... Altri oggetti Template ...

export const bytitle = {
  one,
  two,
  three,
  four,
  five,
  six,
  // ... Altri oggetti Template ...
};

export const details = Object.values(bytitle);
