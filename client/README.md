# Arcadia Frontend Documentation

This is the single frontend documentation for the React client.

For backend details, use [../README_BACKEND.md](../README_BACKEND.md).
For Swagger docs, use [../SWAGGER_TEMPLATES.md](../SWAGGER_TEMPLATES.md).

## Stack

- React 18
- Vite
- React Router v6.4+
- Styled Components
- Axios
- React Toastify
- React Context API

## Prerequisites

- Node.js 14+
- npm

## Install and run

```bash
cd client
npm install
npm run dev
```

Frontend URL:

- http://localhost:5173

## Folder structure

```text
client/
  public/
  src/
    assets/
    components/
    pages/
    utils/
    App.jsx
    main.jsx
    index.css
```

## Main pages

- Landing
- Register
- Login
- Add Event
- All Events
- Edit Event
- Stats
- Profile
- Admin

## API calls

The client uses `src/utils/customFetch.js`:

```javascript
const customFetch = axios.create({
  baseURL: '/api/v1',
});
```

Vite proxies `/api` requests to the backend during development.

## Frontend flow

1. `main.jsx` bootstraps the app and router.
2. Route pages in `src/pages/` use loaders/actions for data and form handling.
3. Shared UI is composed from `src/components/`.
4. API calls go through `src/utils/customFetch.js`.
5. Server responses update route state and UI feedback.

## When to update this file

Update this frontend doc when any of the following changes:

- route structure or major pages
- API integration pattern (Axios instance, base path, proxy behavior)
- global styling/theme system
- startup/build commands

## Notes

Keep this file frontend-only: UI structure, routes, components, state, and styling.
