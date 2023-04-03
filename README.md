# Quacking Through the Cosmos

---
## Team

- Patrick Knight - [GitHub](https://github.com/pfknight8)
- Michael Kleyman - [GitHub](https://github.com/MichaelKleyman)
- Brandi Jefferson - [GitHub](https://github.com/brandi-jeff)

---
## Date

Start: 3-26-2023

Due: 4-2-2023, 11:59 PDT

---
## Technologies

<img alt="PERN" width='450' src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/PERN.png" />

* PostgreSQL
* Express
* React
* Node
* Sequelize

---
## Description

A short hackathon project provided through the #DearJuniorDev Discord Server. The theme for this project is to build an interactive website that provides information on the planets of the solar system (refer to the full prompt below). For this project, our team of three chose to use the PERN stack, as shown in the technologies section, and this repo hosts the backend for our project. To view our project, one may visit the deployed version provided below.

To get started with coding this project, one will need to install the proper technologies, as refered to in the technology section. One can then `fork` and `clone` the repository, then run `npm install` to install the dependencies. To set up the database, run `sequelize db:create` to build the database, then `sequelize db:migrate` to incoporate the models into the database, then `sequelize db:seed:all` to seed the database with our seed information. Use `npm run dev` to spin up a local server at localhost:3001.

---
## Project Links

[ERD](https://drive.google.com/file/d/1EPkEpEISBgIFE8sKZ55jtUETzgNYlR_6/view?usp=sharing)

[Frontend Repo](https://github.com/MichaelKleyman/SolarSysQuack-Frontend)

---
## Features

- [ ] Planets are made entirely out of CSS w/o imported assets
- [ ] Planets can be selected to display modal with a brief synopsis of the planet info
- [ ] The modal can be clicked to view more information about each planet on their info 'page'
- [ ] The additional planet info can be shown by clicking the respective links on the nav bar
- [ ] Planet moons, if applicable, are also displayed on info 'page' of planet
- [ ] Moons of planets can be shown when the Moons link on the navbar is clicked

---
## Screenshots

---
## Quackathon Prompt

CHALLENGE:
Create an educational Single Page Application website that teaches students about the solar system. You will find the requirements of the project in a second message in this channel.

RULES:
1. One submission per team.
2. Teams must consist of 2-4 DJD members.
3. Code plagiarism is not okay. Please don't steal.
4. All submissions must be deployed or able to be demoed in a tool such as Replit/Codepen. We want to see it in action!
5. Submissions must also include a link to your code's repo.
5. You may edit your submission up until the deadline.
6. Keep it professional and appropriate.
7. Challenge requirements are a minimum for eligibility -- If you'd like to build more, feel free to do so! Just be sure not to overstretch or overcommit your team.

QUACKATHON REQUIREMENTS:

SUBMISSION:
To submit, have one member of the team comment in this channel by filling out the template below:

TEAM NAME:
TEAM MEMBERS:
REPO:
LIVE CODE DEMO:

- The website must be a SPA application.

Planets:
- Each planet of the solar system must have its own profile page.
- Each page must include at a minimum (Name of the planet, size, distance from the Sun, three identifying facts, solid or gas core, and a visual representation of the planet)
- NOTE: No images, assets, emojis, or SVGs are permitted. The visual representation of each planet must be made ENTIRELY out of CSS.
- If the planet has a moon, you must display the following information for every moon (Name, history behind name, and size). 
- Planet pages must include at least two different component styles.
- If a planet has more than one moon, the moon information must be displayed in repeating elements.
- All planet and moon content MUST be stored in a database.


Backend:
- You must use foreign keys.
- Planets and Moons must be stored separate from one another.
- You must incorporate one ENUM for the planet data.

Homepage:
- The homepage should be an overview of the solar system.
- The data included will be up to each team.
- The homepage must include at least two components that are NOT used on any planet page.
- Homepage content does not need to be stored in a database and can be coded into your components.

README:
- Your README must include instructions for me to spin up the project locally, as well as an overview of the tech and/or libraries used.
- It should also include a list of the Quackathon requirements and how those were met or exceeded by your team.

Credit: DevJessParker 03/24/2023

---
## Credits

Any relevant resources or code snippets can be referenced (linked) to here.

- [Windows To The Universe](https://www.windows2universe.org/our_solar_system/moons_table.html)
- [Sequelize](https://sequelize.org/docs/v6/getting-started/) Documents
- [PostgreSQL](https://www.postgresql.org/docs/) Documents
- [Express.js](https://expressjs.com/en/starter/installing.html) Documents
- [Node.js](https://nodejs.org/en/docs) Documents
