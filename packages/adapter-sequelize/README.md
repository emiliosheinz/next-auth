<p align="center">
   <br/>
   <a href="https://authjs.dev" target="_blank"><img height="64px" src="https://authjs.dev/img/logo/logo-sm.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;<img height="64px" src="https://raw.githubusercontent.com/nextauthjs/adapters/main/packages/sequelize/logo.svg" />
   <h3 align="center"><b>Sequelize Adapter</b> - NextAuth.js</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
   </p>
   <p align="center" style="align: center;">
      <img src="https://github.com/nextauthjs/next-auth/actions/workflows/release.yml/badge.svg?branch=main" alt="CI Test" />
      <img src="https://img.shields.io/bundlephobia/minzip/@next-auth/sequelize-adapter" alt="Bundle Size"/>
      <img src="https://img.shields.io/npm/v/@next-auth/sequelize-adapter" alt="@next-auth/sequelize-adapter Version" />
   </p>
</p>

## Overview

This is the Sequelize Adapter for [`auth.js`](https://authjs.dev). This package can only be used in conjunction with the primary `auth.js` package. It is not a standalone package.

You can find the Sequelize schema in the docs at [authjs.dev/reference/adapters/sequelize](https://authjs.dev/reference/adapters/sequelize).

## Getting Started

1. Install `next-auth` and `@next-auth/sequelize-adapter` as well as `sequelize` and your [database driver](https://sequelize.org/master/manual/getting-started.html) of choice.

```js
npm install next-auth @next-auth/sequelize-adapter sequelize sqlite3
npm install --save-dev sequelize
```

2. Add this adapter to your `pages/api/[...nextauth].js` next-auth configuration object.

```js
import NextAuth from "next-auth"
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import Sequelize from 'sequelize'

const sequelize = new Sequelize("sqlite::memory:")

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/configuration/auth-options
export default NextAuth({
  ...
  adapter: SequelizeAdapter(sequelize)
  ...
})
```

## Updating the database schema

In development, the sequelize adapter will create the necessary tables, foreign keys and indexes in your database. In production, synchronization is disabled. Best practice is to create the [required tables](https://authjs.dev/reference/adapters/models) in your database via [migrations](https://sequelize.org/master/manual/migrations.html).

In development, if you do not want the adapter to automatically create tables, you are able to pass `{ synchronize: false }` as the second option to `SequelizeAdapter` to disable this behavior:

```js
import NextAuth from "next-auth"
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import Sequelize from 'sequelize'

const sequelize = new Sequelize("sqlite::memory:")

export default NextAuth({
  ...
  adapter: SequelizeAdapter(sequelize, { synchronize: false })
  ...
})
```

## Using custom models

Sequelize models are option to customization like so:

```js
import NextAuth from "next-auth"
import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter"
import Sequelize, { DataTypes } from 'sequelize'

const sequelize = new Sequelize("sqlite::memory:")

export default NextAuth({
  ...
  adapter: SequelizeAdapter(sequelize, {
    models: {
      User: sequelize.define('user', { ...models.User, phoneNumber: DataTypes.STRING })
    }
  })
  ...
})
```

## Contributing

We're open to all community contributions! If you'd like to contribute in any way, please read our [Contributing Guide](https://github.com/nextauthjs/next-auth/blob/main/CONTRIBUTING.md).

## License

ISC
