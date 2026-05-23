export const site = {
  firstName: "Arnau",
  middleName: "",
  lastName: "Jimenez Castany",
  email: "arnau.jc91@gmail.com",
  description:
    "A personal website for software, machine learning, physics, and writing.",
  blogName: "Blog",
  blogDescription: "about Physics and Deep Learning",
  githubUsername: "arnaujc91",
  linkedinUrl: "https://www.linkedin.com/in/arnau-jim%C3%A9nez-castany-b2ba2597/",
};

export const fullName = [site.firstName, site.middleName, site.lastName]
  .filter(Boolean)
  .join(" ");
