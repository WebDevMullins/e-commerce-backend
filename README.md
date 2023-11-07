# E-commerce Backend &middot; [![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/WebDevMullins/svg-logo-maker/blob/main/LICENSE)

<p align="center">
<img src="https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat" alt=".ENV Badge">
<img src="https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat" alt="Insomnia Badge">
<img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat" alt="MySQL Badge">
<img src="https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat" alt="Node.js Badge">
<img src="https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat" alt="Sequelize Badge">
</p>

A working Express.js API configured to use Sequelize to interact with a MySQL databse.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)

## Installation

### Clone repo to destinaton.

```bash
git clone https://github.com/WebDevMullins/e-commerce-backend.git
```

### Install dependencies using:

```bash
npm install
```

Rename the `.env.EXAMPLE` file to `.env`. Update with your credentials.

```bash
DB_NAME=databasename #replace with the database name
DB_USER=yourusername # replace with your user name
DB_PW=yourpassword # replace with your password
```

### Databse Setup

Log in to MySQL, and use the following command to set up database:

```bash
source db/schema.sql
```

In a terminal, run the following command to seed the database:

```bash
npm run seed
```

## Usage

From the root directory, run the following to start the application:

```bash
npm run start
```

Use Insomnia to GET, POST, PUT, and DELETE on the routes (categories, products, tags).

## Demo

### [Walkthrough Video](https://watch.screencastify.com/v/ubPli8Fu2jyuMuC5It3S)

![Gif-Demo](https://github.com/WebDevMullins/e-commerce-backend/assets/6474546/cd2709e4-2d62-4d5d-9c22-ee61fca0f757)

## License

E-commerce Backend is [MIT licensed](./LICENSE).
