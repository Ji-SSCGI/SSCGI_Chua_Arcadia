# Arcadia - Community Event Management Platform

Arcadia is a full-stack web application for community events, partnerships, and user engagement. The project is split into a React/Vite frontend in the client folder and an Express/MongoDB backend in the project root.

## Documentation map

Use the docs below as the main sources of truth:

- Overview and setup: this file
- Backend documentation: [README_BACKEND.md](README_BACKEND.md)
- Frontend documentation: [client/README.md](client/README.md)
- Swagger/OpenAPI reference: [SWAGGER_TEMPLATES.md](SWAGGER_TEMPLATES.md)

## What this app includes

- Event creation and management
- Partner organization profiles
- User authentication and authorization
- Admin dashboard views and stats
- Public event discovery and contact flow

## Tech stack

- Frontend: React 18, Vite, React Router, Styled Components, Axios
- Backend: Node.js, Express, MongoDB with Mongoose, JWT, bcryptjs
- Media uploads: Cloudinary + Multer
- API docs: Swagger UI via OpenAPI annotations

## Quick start

### Prerequisites

- Node.js 14+
- npm
- MongoDB Atlas or a local MongoDB instance

### Install dependencies

```bash
npm install
npm --prefix client install
```

### Environment variables

Create a .env file in the project root with:

```env
NODE_ENV=development
PORT=5100
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Run the app

```bash
npm run dev
```

This starts:

- Backend: http://localhost:5100
- Frontend: http://localhost:5173
- Swagger UI: http://localhost:5100/api-docs

## Project structure

```text
client/                 # React frontend
controllers/            # Express controllers
middleware/             # Auth, validation, uploads
models/                 # Mongoose schemas
routes/                 # API routes
utils/                  # Shared backend utilities
server.js               # Express entry point
```

## Main docs

- Backend setup and API reference: [README_BACKEND.md](README_BACKEND.md)
- Frontend setup and architecture: [client/README.md](client/README.md)
- Swagger examples and route annotations: [SWAGGER_TEMPLATES.md](SWAGGER_TEMPLATES.md)

## Notes

Keep frontend details in the frontend doc and backend details in the backend doc. Avoid duplicating setup steps across multiple files.
