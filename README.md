[![CI](https://github.com/alex-kim-dev/test-assignment-roox/actions/workflows/ci.yml/badge.svg)](https://github.com/alex-kim-dev/test-assignment-roox/actions/workflows/ci.yml)

# Solution to the Roox test assignment for a junior frontend developer

Built on top of my [webpack-react-template](https://github.com/alex-kim-dev/webpack-react-template) with linters & CI, and also:

## Requirements

- [x] recreate the suggested figma design
- [x] SPA with React 16
- [x] Typescript
- [x] SCSS
- [x] Webpack
- [x] reusable components
- [x] use presentational and container components

## Functionality

- [x] users list page
  - [x] sorting by name or city
- [x] user profile page
  - [x] a prefilled form with readonly state switching
  - [x] form validation
- [x] users api

## Challenges & what I learned

- **Sorting UX**

  The sidebar with the sorting buttons is present on both pages in the design, but there's no point having this UI on the user profile page. The corresponding component is in the users feature directory, and should ideally be used internally, but I had to use it in [MainLayout](/src/components/MainLayout/MainLayout.tsx), to have it present on both pages.

- **Circular dependencies**

  This was mainly related to some components imported their siblings through an index file and then exported themselves through the same file. But once I had a bigger problem with the mentioned sorting component, the circle included about 6-7 modules, and I reached to a dependency analyzing tool [^1] to solve the issue.

- **Form & field state**

  At first I wasn't sure what's a good UX for editing a form / showing errors, so I looked at Formik examples [^2] and some basic code. I liked the approach of tracking whether a field was touched or not. I kept the [field state locally](/src/features/users/components/Field/Field.tsx), but later ran into a problem where the fields weren't showing errors on form submission. I ended up adding another touched state to the [form](/src/features//users/components/UserProfile/UserProfile.tsx) and passed it through a context to the fields.

- **Polymorphic [Field](/src/features/users/components/Field/Field.tsx)**

  I've seen some styling frameworks provide a prop to change the rendered html element, and I wanted to do the same with the field component, which by default is input, and I could use it as a textarea for the user profile form. The code is simple, but it took some time researching this topic on the internet to get it typed correctly [^3]

Also these 2 topics are new to me:

- feature oriented project structure [^4]
- form validation with a schema [^5]
- using not only `rem/em`, but also `px` [^6]

[^1]: [DPDM](https://github.com/acrazing/dpdm#readme)
[^2]: [Formik](https://formik.org/docs/overview#the-gist)
[^3]: [Build strongly typed polymorphic components with React and TypeScript](https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/)
[^4]: [Bulletproof React](https://github.com/alan2207/bulletproof-react)
[^5]: [Yup](https://github.com/jquense/yup)
[^6]: [The Surprising Truth About Pixels and Accessibility](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
