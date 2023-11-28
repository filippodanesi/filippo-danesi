export interface Template {
  link: string;
  type: string;
  title: string;
};
const one: Template = {
  link: "mailto:hello@filippodanesi.it",
  type: "Email",
  title: "hello@filippodanesi.it",
};
const two: Template = {
link: "https://www.linkedin.com/in/filippodanesi/",
    type: "LinkedIn",
  title: "filippodanesi",
};
const three: Template = {
link: "https://www.serp-secrets.com",
    type: "My Blog",
  title: "serp-secrets.com",
};
export const bytype = {
  one,
    two,
    three,
};
export const contact = Object.values(bytype);
