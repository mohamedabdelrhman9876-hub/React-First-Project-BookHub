# BookHub — React Class Project

A Vite + React starter for the BookHub class project.

## Getting started

```bash
npm install
npm run dev
```

Other useful scripts:

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload  |
| `npm run build`   | Build the app for production          |
| `npm run preview` | Preview the production build          |
| `npm run lint`    | Run ESLint                            |

## Project rules

Every submission **must** follow these rules. Code that breaks them will be asked to be reworked.

### 1. Everything is a component

- The UI **must** be built from React components — no page written as one long block of HTML/JSX inside `App.jsx`.
- One component per file, and the file name **must** match the component name in PascalCase: `BookCard.jsx` exports `BookCard`.
- Keep components small and focused: a component does **one** job.
- Split the page into sections first (`Navbar`, `Hero`, `BookList`, `BookCard`, `Footer`, …), then refine further as needed.
- **The navbar is its own component.** `Navbar.jsx` (or `Header.jsx`) holds the logo, links and nav actions — `App.jsx` renders `<Navbar />` and nothing else from it.
- **The hero section is its own component.** `Hero.jsx` renders the banner (title, tagline, call-to-action) and receives its text as props — never hardcode the headline inside `App.jsx`.
- **Every button is its own component.** No bare `<button>` written inline in a page or section: extract `<Button label="Add to list" onClick={...} />` (and variants like `PrimaryButton` / `IconButton` if they look different).

### 2. Pass data with props

- Components **must not** hardcode the content they display. Titles, authors, ratings, images, and labels arrive through **props**.
- Destructure props in the signature: `function BookCard({ title, author, cover })`.
- Props flow **down** from parent to child. Never prop-drill through a component that does not use the value — lift state to the closest common parent instead.
- Give every prop a sensible default or handle the missing case, so a component never crashes on empty data.
- Pass functions through props when a child needs to notify a parent (`onSelect`, `onRemove`, …).

### 3. Model data as objects

- Book data (and any similar record) **must** be stored as an **object**, not as scattered separate variables:

  ```js
  const book = {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 4.5,
    cover: "/book_covers/clean_code_cover.png",
  };
  ```

- Keep data arrays **outside** the component (`const books = [...]`) or in their own module, and render them with `.map()`. Never copy-paste the same JSX once per book.
- Use consistent keys across objects of the same collection, and pass `book.id` (not the array index) as the React `key`.
- Access fields by name only — do not rely on positional values.

### 4. Reuse, don't repeat

- Any JSX or logic that appears **twice** must be extracted into its own reusable component.
- A button style reused across the app exists **once** — as a `Button` component — not copied into every file.
- Reusable components **must** be driven entirely by props, so the same component can render different content in different places (`<BookCard book={...} />` used for every book).
- Prefer composition over configuration: pass children or slots (`{children}`, `renderFooter`) instead of piling up boolean props like `isFooterVisible`.
- Shared helpers (formatting a rating, sorting a list) go in their own functions/modules — not duplicated inline in each component.
- Reusable components must not reach out to global state or import sibling components; they receive everything they need.

### 5. General

- Components live in `src/components/`; shared data or helpers live in `src/data/` or `src/utils/`.

  | Folder        | Use it for                                                        |
  | ------------- | ----------------------------------------------------------------- |
  | `components/` | Reusable UI pieces — `Navbar`, `Hero`, `Button`, `BookCard`        |
  | `data/`       | Objects and arrays (the books) that components render             |
  | `utils/`      | Non-UI helper functions: formatting, sorting, filtering           |
  | `assets/`     | Images you `import` (covers, logos, icons)                        |
  | `public/`     | Files served as-is at the site root, referenced by plain path     |

- No inline styles repeated across files — use CSS classes or a shared stylesheet.
- The app must build cleanly: `npm run build` and `npm run lint` both pass before you push.

## Tech

- [Vite](https://vite.dev/) for the dev server and build
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) for Fast Refresh
- [ESLint](https://eslint.org/) with the React recommended rules
