<p align="center">
  <br>
  <img height="70" alt="Zeruai logo" src="https://res.cloudinary.com/vitorgiovane/image/upload/v1592201062/zeruai/dark-logo_dpmouh.png" />
  </p>
  <br>
<h2 align="center">
  Back-end of Zeruai application
    <br>
</h2>
<h4 align="center">REST API developed with TypeScript and Node.js</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vitorgiovane/zeruai-back-end?color=%2304D361">
  <img alt="GitHub tp language" src="https://img.shields.io/github/languages/top/vitorgiovane/zeruai-back-end">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
  <img alt="Code size" src="https://img.shields.io/github/languages/code-size/vitorgiovane/zeruai-back-end">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/vitorgiovane/zeruai-back-end">
</p>

<br>

## :gem: &nbsp; Features
- Creation of users
- Creation of sessions

<br>

## :notebook_with_decorative_cover: &nbsp; Documentation
https://documenter.getpostman.com/view/3822165/SzzhfJqZ?version=latest

<br>

## :arrow_forward: &nbsp; Creating a user
<img alt="GoStack 11 - Vitor" src="https://res.cloudinary.com/vitorgiovane/image/upload/v1592202252/zeruai/2020-06-15_03-23_saakrn.png" />

<br>

## :arrow_forward: &nbsp; Creating a session
<img alt="GoStack 11 - Vitor" src="https://res.cloudinary.com/vitorgiovane/image/upload/v1592202634/zeruai/2020-06-15_03-29_sueiex.png" />

<br>

## :video_game: &nbsp; How to run this project
1. Clone this repository on your machine.
2. Make sure you have Node.js (12 or higher), Docker and Docker Compose installed on your machine.
3. At the root of the project, create an **.env** file and fill it in according to the **.env.example** file. Filling example:
```yml
PROJECT_PREFIX=zeruai-back-end
DB_EXTERNAL_PORT=5020
DB_NAME=zeruai
DB_USER=zeruai
DB_PASSWORD=zeruai
```
4. Open the **ormconfig.json** file, located at the root of the project, and adjust the database connection data according to the **.env** file created in step 3.
5. In a terminal at the root of the project run **`docker-compose up -d --build`** to start the Postgres database.
6. In a terminal at the root of the project run **`yarn`** or **`npm install`** to install the dependencies.
7. At a terminal at the root of the project run **`yarn typeorm migration:run`** or **`npm run typeorm migration:run`** to perform the migrations.
8. At a terminal at the root of the project run **`yarn dev:server`** or **`npm run dev:server`** to run the project. Then, the API can be consumed by the base URL **http://localhost:3333**.

<br>

## :rocket: &nbsp; Technologies
This project was developed with the following technologies:

- TypeScript
- Node.js
- Express.js
- TypeORM
- Docker
- Docker Compose
- Postman
- VS Code

<br>

## :page_with_curl: &nbsp; License
This project is under the MIT license. See the [LICENSE](https://github.com/vitorgiovane/zeruai-back-end/blob/master/LICENSE) for more information.

<br>

---
Developed by **Vitor Giovane** <span>&#x1f1e7;&#x1f1f7;</span>

**[Talk to me :smile:&nbsp;:thumbsup:](https://www.linkedin.com/in/vitorgiovane)** 
