# Swagger / OpenAPI Reference

This is the single Swagger documentation file for the project.

Do not create additional Swagger markdown guides. Extend this file instead.

## Access docs

1. Start the backend.
2. Open http://localhost:5100/api-docs.

## Where to write Swagger docs

Add JSDoc OpenAPI comments directly above backend route definitions.

Example:

```javascript
/**
 * @swagger
 * /api/v1/your-endpoint:
 *   get:
 *     tags:
 *       - Your Tag
 *     summary: Brief summary
 *     description: Detailed description
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/your-endpoint', yourController);
```

## Common templates

### Auth endpoint

```javascript
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
```

### Protected endpoint

```javascript
/**
 * @swagger
 * /api/v1/users/current-user:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get current user
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
```

## Best practices

- Keep docs close to code in route files.
- Document new endpoints when added.
- Avoid creating another Swagger guide; update this file only.

## Endpoint documentation checklist

For each new endpoint, include:

- tag
- summary
- description
- request parameters/body schema
- security requirement (if protected)
- success and common error responses
