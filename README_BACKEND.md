# Arcadia Backend Documentation

This file is the single backend reference for the project. Frontend details belong in [client/README.md](client/README.md), and Swagger examples belong in [SWAGGER_TEMPLATES.md](SWAGGER_TEMPLATES.md).

## Stack

- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB with Mongoose
- Auth: JWT in HTTP-only cookies
- Validation: express-validator
- Security: helmet, express-rate-limit, express-mongo-sanitize
- Uploads: Multer + Cloudinary

## Prerequisites

- Node.js 14+
- MongoDB Atlas or a local MongoDB instance
- A Cloudinary account for image uploads

## Environment variables

Create a .env file in the project root:

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

## Run the backend

### Development

```bash
npm run dev
```

Backend URL:

- http://localhost:5100

Swagger UI:

- http://localhost:5100/api-docs

### Production

```bash
npm start
```

## Project structure

```text
controllers/          # Route controllers
middleware/           # Auth, validation, uploads, errors
models/               # Mongoose schemas
routes/               # Express routes
utils/                # Backend helper functions
errors/               # Custom error classes
server.js             # App entry point
```

## Request lifecycle

1. Request enters `server.js` and passes global middleware.
2. Router in `routes/` matches the endpoint.
3. Route-specific middleware handles authentication, validation, and upload parsing.
4. Controller in `controllers/` executes use-case logic.
5. Controller reads/writes MongoDB via `models/` and returns a JSON response.

## API overview

### Auth

- POST /api/v1/auth/register
- POST /api/v1/auth/login
- GET /api/v1/auth/logout

### Users

- GET /api/v1/users/current-user
- PATCH /api/v1/users/update-user
- GET /api/v1/users/admin/app-stats

### Events

- GET /api/v1/events
- POST /api/v1/events
- GET /api/v1/events/:id
- PATCH /api/v1/events/:id
- DELETE /api/v1/events/:id

### Partners

- GET /api/v1/partners
- POST /api/v1/partners
- GET /api/v1/partners/:id
- PATCH /api/v1/partners/:id
- DELETE /api/v1/partners/:id

### Contact

- POST /api/v1/contact

## Swagger documentation

Use Swagger UI for interactive API testing at http://localhost:5100/api-docs.

- Keep route annotations in the route files.
- Use [SWAGGER_TEMPLATES.md](SWAGGER_TEMPLATES.md) as the canonical example file for new docs.
- If you add a new endpoint, document it in the route file with JSDoc comments so it appears in Swagger.

## When to update this file

Update this backend doc when any of the following changes:

- API base paths or endpoint groups
- middleware/auth strategy
- environment variable requirements
- upload/storage pipeline
- backend startup commands

## Notes

Keep this file focused on backend concerns only: setup, environment, routes, middleware, services, security, and API behavior.
