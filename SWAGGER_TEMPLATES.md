# Swagger / OpenAPI Reference

This is the single Swagger documentation reference for the project. Use it as the main place for Swagger examples, route annotation templates, and API documentation guidance.

## Quick start

1. Start the backend.
2. Open http://localhost:5100/api-docs.
3. Use the UI to test endpoints or add new annotations in the route files.

## Where to document new routes

Add JSDoc comments above each route definition in the backend route files. Example:

```javascript
/**
 * @swagger
 * /api/v1/your-endpoint:
 *   get:
 *     tags:
 *       - Your Tag
 *     summary: Brief description
 *     description: Detailed description
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/your-endpoint', yourController);
```

## Common templates

### Auth example

```javascript
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login a user
 *     description: Authenticate a user and set an HTTP-only cookie
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

### Protected route example

```javascript
/**
 * @swagger
 * /api/v1/users/current-user:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get current user
 *     description: Retrieve the currently authenticated user's profile
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
```

## Best practices

- Keep descriptions brief and action-oriented.
- Add examples for request bodies and responses when possible.
- Document new endpoints as soon as you add them.
- Keep this file as the canonical Swagger reference; avoid maintaining a second copy of the same examples elsewhere.
 *               type: object
 *               properties:
 *                 event:
 *                   $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event not found
 *       401:
 *         description: Not authenticated
 */
```

### Update Event
```javascript
/**
 * @swagger
 * /api/v1/events/{id}:
 *   patch:
 *     tags:
 *       - Events
 *     summary: Update an event
 *     description: Update an existing event (owner or admin only)
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               eventDate:
 *                 type: string
 *                 format: date
 *               eventTime:
 *                 type: string
 *               location:
 *                 type: string
 *               category:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [upcoming, ongoing, completed, cancelled]
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 *       404:
 *         description: Event not found
 */
```

### Delete Event
```javascript
/**
 * @swagger
 * /api/v1/events/{id}:
 *   delete:
 *     tags:
 *       - Events
 *     summary: Delete an event
 *     description: Delete an event (owner or admin only)
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized
 *       404:
 *         description: Event not found
 */
```

---

## Partner Routes Template

### Get All Partners (Public)
```javascript
/**
 * @swagger
 * /api/v1/public-partners:
 *   get:
 *     tags:
 *       - Public Partners
 *     summary: Get all partners
 *     description: Retrieve all active partners (public access)
 *     responses:
 *       200:
 *         description: Successfully retrieved partners
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 partners:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Partner'
 */
```

### Create Partner
```javascript
/**
 * @swagger
 * /api/v1/partners:
 *   post:
 *     tags:
 *       - Partners
 *     summary: Create a new partner
 *     description: Create a new partner organization (authenticated)
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - contactEmail
 *             properties:
 *               name:
 *                 type: string
 *                 example: Green Earth Foundation
 *               description:
 *                 type: string
 *                 example: Environmental conservation organization
 *               website:
 *                 type: string
 *                 example: https://greenearth.org
 *               contactEmail:
 *                 type: string
 *                 format: email
 *                 example: contact@greenearth.org
 *               category:
 *                 type: string
 *                 example: Environment
 *               logo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Partner created successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Not authenticated
 */
```

---

## Contact Routes Template

### Submit Contact Form
```javascript
/**
 * @swagger
 * /api/v1/contacts:
 *   post:
 *     tags:
 *       - Contact
 *     summary: Submit contact form
 *     description: Send a contact message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Message sent successfully
 *       400:
 *         description: Validation error
 */
```

---

## Instructions

1. Copy the appropriate template above
2. Paste it directly above your route definition in the router file
3. Modify the details to match your specific endpoint
4. Save the file
5. The documentation will automatically appear in Swagger UI at http://localhost:5100/api-docs

## Note on Security

For protected routes (requiring authentication), always include:
```javascript
 *     security:
 *       - cookieAuth: []
```

This indicates that the route requires the JWT cookie for authentication.
