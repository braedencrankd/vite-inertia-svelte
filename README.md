# Svelte InertiaJS Laravel Vite Template

This is a bare bones project template to get you up and running with a Svelte and Laravel Fullstack application.

This template uses [Vite](https://vitejs.dev/) for blazingly fast build times and hot module replacement using native es modules.

## How to get started.

To get this project up and running, you first need to install [PHP](https://www.php.net/downloads.php), [Composer](https://getcomposer.org/download/) and [NodeJs](https://nodejs.org/en/download/).

Additonally to get up and running with the mysql database you need to install [mysql](https://dev.mysql.com/downloads/mysql/)

The easiet way to install these dependencies is using a package manager, as shown below for each target platform below:

-   **OSX**: [Homebrew](https://brew.sh/)

-   **WINDOWS**: [Chocolatly](https://chocolatey.org/)

-   **Linux**: apt (_Installed on most linux distributions by default_)

## How to setup a local dev environment

**Clone the repo locally:**

You can use degit to clone the repo. (Change _example-project_ to your project name)

```sh

npx degit braedencrankd/vite-inertia-svelte example-project

cd example-project

```

**Install PHP dependencies:**

`composer install`

**Install NPM dependencies:**

Run `npm i` or `pnpm i` to install the required node modules

**Build assets:**

Run `npm run dev` or `pnpm dev` to run in development mode.

## Setup Database

First create the default `.env` file to setup your environment variables.

`cp .env.example .env`

_Edit the database configuration section in the .env file to connect to database of your choice_

**Generate a new application key**

`php artisan key:generate`

**Run the database migrations (Set the database connection in .env before migrating)**

`php artisan migrate`

**Finally run the dev server**

Now to start the local development server run: `php artisan serve`
