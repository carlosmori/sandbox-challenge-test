# The Sandbox Challenge - Carlos Mori

## Application Fundamentals

The application consist in a NFT explorer. Particularly about Doggies NFT Collection:

Check: https://opensea.io/collection/snoop-dogg-doggies

A user can type a Doggie Id and get information about that NFT (name, picture, ownership).

You can check the app deployed at:

https://sandbox-app-doggies.herokuapp.com/

> It might take a while to load due to being a free tier domain

## Tech Stack

The application has been built using:

- [Vue 3](https://vuejs.org/)
- [Nuxt 3](https://v3.nuxtjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Web3](https://web3js.readthedocs.io/en/v1.8.0/) - Blockchain Library
- [Pinia 3](https://pinia.vuejs.org/) - State Management
- [Element-Plus](https://element-plus.org/en-US/) - UI Library
- [SASS](https://sass-lang.com/) css preprocessor with [BEM](https://getbem.com/introduction/)

## How to run the app

> Note: Create an `.env` file with the values of `.env.template`

Install the dependencies and devDependencies and start the server.

```sh
cd sandbox-app
npm i
npm run dev
```

Navigate to the port in your browser

## Application Features

##### Javascript Related

- Pinia for store management
- Web3 for blockchain communication
- Nuxt js for server side rendering
- Form Validations
- Jest for unit testing (partially)

##### Layout Building Related

- HTML Skeletons for loading states
- Custom Google Fonts
- Integrated Element Plus UI library
- Custom Stars component for space background
- Floating CSS3 animations
- Breadcrumbs

##### Bonus Sections

- [x] Random Doggie Feature
- [x] Artistic customized design
- [x] SCSS + BEM
- [x] Full responsive approach
- [ ] Unit Testing (Partially)

# Side Notes

### No unit testing performed but...

Due to the fact that I needed to support SCSS I have a custom Vite configuration on top of Nuxt to compile those .scss files.

To integrate a test suite using Nuxt 3 has proven to be a really complex feature. Jest and Vitest won't compile scss files and I couldnt by pass this blocker.

Tried several things to make them work but Nuxt 3 has been released only 3 months ago. So they have little documentation on the matter and there are several open issues as well.

Spent 1+ day trying to fix it but I need more time.

Incomplete Docs (proof #1):

https://v3.nuxtjs.org/getting-started/testing/

Github Issues (proof #2):

https://github.com/nuxt/framework/issues/6792

https://github.com/nuxt/vite/issues/71

**BUT!!**

In the spirit of proactivity I did make the tests anyway.

You wont be able to run them but check them out!

> Location: `test/searchBox.test.js`

Please bear in mind that this is blind code so I dont know if this actually runs but to get the idea.

## PDF Assigment

You may find the PDF with the assigment at the root of the project!
