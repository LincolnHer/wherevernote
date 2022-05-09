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
5. To generate a strong JWT secret run this command in your terminal:

   ```
   openssl rand -base64 10
   ```
6. Create the database using `sequelize-cli`.
   ```
   npx dotenv sequelize db:create
   ```
   Any `sequelize db:` commands need to be prefixed with `dotenv` to load the database configuration environment variables from the `.env`
   file.



7. Migrate and Seed your database
   ```
   npx dotenv sequelize db:migrate
   ```
   ```
   npx dotenv sequelize db:seed:all
   ```

8. To start App run the command below in your backend and frontend directories in this specific order.

   ```
   npm start
   ```

9. You can demo the site or create an account to begin using **Wherevernote**.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Deploy to Heroku

1. Create a new project on Heroku
2. Under "Resources" tab in your new application, click "Find more add-ons" and add the "Heroku Postgres" add-on.
3. In your terminal, install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
4. After installation, login to Heroku in your terminal by running:
   ```
   heroku login
   ```
5. Add Heroku as a remote to your project's git repo. replace <name-of-Heroku-app> with the name of your application.

   ```
   heroku git:remote -a <name-of-Heroku-app>
   ```
6. Under Settings find "Config Vars". Click the Reveal Config Vars and add `JWT_EXPIRES_In` and `JWT_SECRET` and any other environment variables you need for production.

7. Push your project to heroku.
   ```
   git push heroku main
   ```

8. Set up your production database
   ```
   heroku run npm run sequelize db:migrate
   ```
   ```
   heroku run npm run sequelize db:seed:all
   ```

9. If you want to open your site in your terminal run:
   ```
   heroku open
   ```

---

## Features
   *  Logged in Users can create, read, update, or delete notes.
   *  Logged in Users can create, read, update, or delete their notebooks.
   *  Users can browse their their notes and the specific notebooks they belong to.

<p align="right">(<a href="#top">back to top</a>)</p>
