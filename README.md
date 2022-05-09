## Wherevernote

wherevernote is an [evernote](https://evernote.com/) clone where users will be able to create notes and organize them into notebooks.

---

### Technologies Used
  * [React](https://reactjs.org/)
  * [Redux](https://redux.js.org/)
  * [JavaScript](https://www.javascript.com/)
  * [Express](https://expressjs.com/)
  * [Sequelize](https://sequelize.org/)
  * [Node](https://nodejs.org/en/docs/)
  * [PostgresSQL](https://www.postgresql.org/)
  * HTML/Css
  * Visual Studio Code

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Live Link

   [wherevernote](https://wherevernote.herokuapp.com/)

---

## Getting Started

1. Clone this repo

   ```bash
   git clone https://github.com/LincolnHer/wherevernote.git__
   ```
2. Install dependencies

   ```
   npm install
   ```
3. Create a .env file based on the .env.example file with proper settings for your development environment.
4. Setup your PostgreSQL user, password and database and make sure it matches your .env file.
   ```
   psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
   ```
5. Create the database using `sequelize-cli`.
   ```
   npx dotenv sequelize db:create
   ```
   Any `sequelize db:` commands need to be prefixed with `dotenv` to load the database configuration environment variables from the `.env`
   file.

6. Migrate and Seed your database
   ```
   npx dotenv sequelize db:migrate
   ```
   ```
   npx dotenv sequelize db:seed:all
   ```

7. To start App run the command below in your backend and frontend directories in this specific order.

   ```
   npm start
   ```

8. You can demo the site or create an account to begin using **Wherevernote**.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Features
   *  Logged in Users can create, read, update, or delete notes.
   *  Logged in Users can create, read, update, or delete their notebooks.
   *  Users can browse their their notes and the specific notebooks they belong to.

<p align="right">(<a href="#top">back to top</a>)</p>
