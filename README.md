# Wealth Wizard  API

## Project status: In Development

This is my financial manager's API, I'm creating this project to have better financial control in my own way, where I can style everything the way I want

# API Development Process

This project is based on [NestJS](https://docs.nestjs.com/)

To running this project in dev mode you need threee things:

1. install dependences
2. Configure a local database
3. Run migrations
4. Run the app

These three steps are covered in sequence below

## Installation

```bash
yarn
```

## Docker-compose
In this project inside of dev folder we have a docker-compose with the project dependencies like Database and Redis
to start this dependencies run this command:
```bash
cd dev && docker-compose up -d
```

## How create and run migrations
```bash
  npm run migration:generate
``

```bash
  npm run migration:run
```

## Running the app

First, you need create a `.env` file at the project root:

```bash
######################
######ENV VARS########
######################
JWT_SECRET=batata
DRIZZLE_DATABASE_URL=postgresql://root:123@localhost/wealth-wizard
```

Then, you can run as follows:

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod

```

# Reflection

I created this project to see what it would be like to start a product project from scratch, where I would have to make all the decisions and choose what to use, and come to understand more about integrations with other apis.

I still don't know how long this project will take to finish but I want to add some things to it as a study, to give a proper focus on them which are:

- Documentation (Swagger)
- TDD
- Tests
- CI/CD
- Logs and monitorin
- New ORM called Drizzle
- SWC compiler
- Vitest

## Swagger route is http://localhost:3000/api/v1/docs