# Tech Blog

## Description

This project is a CMS-style blog site similar to a WordPress site, where developers can publish their blog posts and comment on other developers' posts. The site is built from scratch and follows the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployed Application](#deployed-application)
- [Repo](#repo)
- [License](#license)
- [Contact](#contact)

## Installation

To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/tech-blog.git

# Navigate into the project directory
cd tech-blog

# Install dependencies
npm install
```

## Usage

Database setup:

```bash
psql -U postgres
```

```bash
\i schema.sql
```

Seed the database:

```bash
npm run seed
```

Start the application:

```bash
npm start
```

## Features

- Publish articles, blog posts, and thoughts
- Comment on other developers' posts
- User authentication and session management
- Dashboard for managing personal blog posts

## Deployed Application

[Tech Blog](.)

## Repo

[Tech Blog](https://github.com/briansotolago/tech-blog)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [briansoto.bs23@gmail.com].
