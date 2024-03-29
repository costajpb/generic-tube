# 📽️ Generic Tube

A Vue.js-based application to browse TV shows from http://www.tvmaze.com/api .

## Requirements \*

- Node.js (v21.6.1)
- npm (v10.2.4)
- An active internet connection (for data)

\* A warning will be issued when installing the project in lower versions, but it might still work.

## Running the application

- Install the project (`npm install`)
- Build the application (`npm run build`)
- Run the application (`npm run preview`)
- Follow the link output in the console

Obs.: [This project was bootstrapped with Vite](#keeping-scaffolding-boilerplate-templates-plugins-etc-to-a-minimum), so those steps should look familiar to those used to the tool.

### Running the unit tests

Once the project is installed (`npm install`), the command `npm test` can be issued to run the unit tests. They will run in watch mode; press `q` to quit.

It's perhaps worth mentioning that there will be deprecation warnings for the nested dependency `punycode`. A possible solution could be to downgrade the used Node.js version, but it's probably best just to live with it.

### No live environment

Since there were no explicit requirements about letting this project go public, putting it in a live environment was not taken in consideration.

## Development notes

### Keeping scaffolding, boilerplate templates, plugins, etc. to a minimum

In order to have "minimum" on objective grounds, the tools used to develop this project were adopted based on the following two premises:

- A tool should not influence or limit any design/architecture decision (e.g. a particular folder structure).
- A tool should not jump start any given requirement (e.g. [API wrappers](https://www.npmjs.com/search?q=tvmaze), ready-made UI components).

#### A note on [Vite](https://vitejs.dev/)

Although Vite can give one a Vue.js application running in a matter of seconds, the main point of its adoption was to use the time that would otherwise be spent on setting up the development environment on addressing the requirements.

Going back in Git history, one may notice that a good deal of the business logic was implemented before Vue.js started being used, and Jest was the test runner. However, as the need for a view layer came along and Typescript was already in the mix, running the application in a browser would require a build step and an HTTP server solution. Hence, Vite was adopted. Also, since Jest and Vitest provide basically the same API, the latter taking the upper hand performance-wise, Vitest was kept.

It's worth emphasizing that going with Vite did not influence or limit any design or architecture decision. The `tsconfig` files and the `vite.config` file as well, for example, have been modified and unnecessary scaffolding removed. About jump starting requirements, Vite might actually have helped with the navigation part. But the router configuration in such a simple application is completely generic, and having done it manually would likely have yielded the exact same outcome with no significant time saving.

### Test-Driven Development (TDD)

Test-Driven Development was widely adopted for the business logic and for those requirements implemented on the `infra` layer (Vue.js part). On a similar note, snapshots have been provided for the presentational part of the components. One can check the test coverage by running `npm test -- --coverage`.

It's worth mentioning that the official Vue.js styleguide preconizes moving tests away from the files they are supposed to test, which is not very TDD-friendly. For that reason, one should identify this and other practices from the style guide within the `infra` folder, but not so much in other layers.

### Domain-Driven Development (DDD)

One may pull the "Over-engineering" card on layering out the business logic of the view components. However, even the simplest of the front-end projects may benefit from DDD:

- By establishing one single possible (transitive) dependency chain —`infrastructure` (`infra`) depends on `application`, and `application` on `domain` — layers can be individually tested based on inputs and outputs. For instance, there is no risk of messing up core businees logic while working on a view component.
- [The consumed API](https://www.tvmaze.com/api) lives under another jurisdiction, hence its integrity cannot be guaranteed. Therefore, an [anti-corruption layer](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) is necessary to ensure internal consistency. With that, there is no doubt that a "show" will always be a [`Show`](./domain/show/entity.ts) within this architecture.

Other than that, one major advantage of this approach should be to retain functionality over major refactors and technology shifts. And that's not to say moving away from Vue.js. The framework is already in it's third version, there might be more to come, and transitioning can be less of a headache with DDD. While keeping things framework agnostic closer to the domain, the changes in the view layer can be carried out more easily.

Of course, plumbing code is entailed when such a route is taken. For example, procedural navigation is enforced to cope with navigation events. That means that the `router-link` component can't be used as such.

A major shortcoming from that is that the `push` method from the router for procedural navigation forces a full page reload. Not only is it performance detrimental, but also it may pose challenges to the application state management. One potential solution would be a procedural click on a hidden `router-link`, but that needs testing. Or should that part of the implementation deviate from the DDD use scenario. Anyway, since Vue.js itself heavily relies on event handling, this practice still complies to a good extent with the Vue.js paradigm.

### Typescript

It's true that Vue.js allows no-build applications, meaning that Typescript is no hard requirement strictly speaking. However, the `domain` layer, for instance, is mostly about some types and interfaces, which would be unattainable without Typescript. Additionally, Typescript can settle an agreement layer between developers, which is much needed when working on a team.

### Styling approach

Although a mighty solution like [Tailwind](https://tailwindcss.com/) would probably have cleared out the styling-related requirements much faster than the adopted one, it would probably not be in line with any of the aforementioned tool adoption criteria, not to mention its large footprint. Neither would it make evident the commonest hurdles of dealing with CSS (e.g. stacking contexts, layout modules, etc.). Therefore, class-based styling in single-file components (SFC) was chosen for the strategy basis. The outcome is somewhat verbose though.

For that strategy, [Open Props](https://open-props.style/) were adopted to somehow fill in for a missing UX designer or Design System. Some other properties have been derived from Open Props for the sake of consistency, but a lot more work should be put into that for a production-ready result.

The option of [PostCSS](https://postcss.org/) for the CSS flavor was just enough to allow incremental addition of features to make working with _quasi_-vanilla CSS "bearable". For example, it allows the use of CSS nesting today, even though [it's still a working draft.](https://caniuse.com/css-nesting)

### No dedicated state management system

Based on the requirements and in order to keep it simple, a dedicated state management system was not adopted. Were this application to be developed further, [Pinia](https://pinia.vuejs.org/) should be system to be adopted. Not only is it maintained by those who maintain Vue.js, but also it's oddly intuitive.

### Known issues

- On the desktop view, picking a show from the search and then navigating back from the details page will have the user meet the old search results again. It doesn't break anything, but is an odd behavior for a non-modal popover nonetheless.
- There are a couple of unit tests which might fail randomly; that is due to inefficient data mocking. Those tests are mistakenly trying to reach out the internet and sometimes the requests fail to complete in due time.
- Some shows don't feature a cover image or summary, or their episodes. To keep up with data, those are still displayed but it might not be the best in terms of looks.
- The employed layout algorithms can't cover all the show cover images aspect ratios. Some very quirk ones will let the background color of the listing through.

### Moving forward

Were this project to be developed further, even though it features all the given requirements, there are some points which could use more attention. To name a few:

- Handling edge cases (e.g. missing data) and error scenarios (e.g. network errors).
- Assets optimization — thumbnail images are too big, rendering the dashboard a bit slow, while those in the jumbotron don't look crisp on wide screens.
- Search results should not show when moving back from the details page on the desktop view.
- Full page reloads should be avoided while keeping the use of the DDD use scenario methods.
- A more informed UX design decision on how to tackle the listing display of shows considering the variety of possible cover image aspect ratios.
