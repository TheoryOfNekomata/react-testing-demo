# Introduction

This project uses the directory structure suggested by [Create React App](https://create-react-app.dev) using the
`typescript` template, along with some preferential modifications, such as:

- Removal of `@testing-library/react` and related dependencies for testing components.
- Inclusion of an [example `.env` file](./.env.example) as well as its integration on the [main HTML
  file](./public/index.html) and the [entry code](./src/index.tsx)
- Separation of ESLint and Browserslist configurations from the [`package.json` file](./package.json) through the
  [`.eslintrc`](./.eslintrc) and [`.browserslistrc`](./.browserslistrc) files respectively.
- Separation of style sheets from the [entry code](./src/index.tsx) and the [`App` component](./src/App.tsx) through the
  [`index.css` file](./public/index.css). The project should use a CSS-in-JS solution such as
  [`styled-components`](https://styled-components.com) which will be demonstrated in the next commits.
- Addition of [`.editorconfig`](./.editorconfig)
- Removal of sample tests and configuration.

This README file serves as description to the changes made for each commit. Enter the following commands to enable
browsing the code through the Git CLI:

    $ git config --global alias.next '!git checkout `git rev-list HEAD..demo-end | tail -1`'
    $ git config --global alias.prev 'checkout HEAD^'

The code adds `next` and `prev` respectively so commands such as `git next` and `git prev` could be used.
