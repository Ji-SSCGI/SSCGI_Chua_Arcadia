import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Arcadia API Documentation',
      version: '1.0.0',
      description: 'API documentation for Arcadia - Community Event Management Platform',
      contact: {
        name: 'Arcadia Development Team',
        email: 'support@arcadia.com',
      },
      license: {
        name: 'Academic Project',
      },
    },
    servers: [
      {
        url: 'http://localhost:5100',
        description: 'Development server',
      },
      {
        url: 'https://your-production-url.com',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'token',
          description: 'JWT token stored in HTTP-only cookie',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'User ID',
            },
            name: {
              type: 'string',
              description: 'User first name',
            },
            lastName: {
              type: 'string',
              description: 'User last name',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'User email address',
            },
            location: {
              type: 'string',
              description: 'User location',
            },
            role: {
              type: 'string',
              enum: ['user', 'admin'],
              description: 'User role',
            },
            avatar: {
              type: 'string',
              description: 'User avatar URL',
            },
          },
        },
        Event: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Event ID',
            },
            title: {
              type: 'string',
              description: 'Event title',
            },
            description: {
              type: 'string',
              description: 'Event description',
            },
            eventDate: {
              type: 'string',
              format: 'date',
              description: 'Event date',
            },
            eventTime: {
              type: 'string',
              description: 'Event time',
            },
            location: {
              type: 'string',
              description: 'Event location',
            },
            category: {
              type: 'string',
              description: 'Event category',
            },
            capacity: {
              type: 'number',
              description: 'Event capacity',
            },
            imageUrl: {
              type: 'string',
              description: 'Event image URL',
            },
            status: {
              type: 'string',
              enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
              description: 'Event status',
            },
            createdBy: {
              type: 'string',
              description: 'User ID who created the event',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Event creation timestamp',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Event update timestamp',
            },
          },
        },
        Partner: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Partner ID',
            },
            name: {
              type: 'string',
              description: 'Partner name',
            },
            description: {
              type: 'string',
              description: 'Partner description',
            },
            website: {
              type: 'string',
              description: 'Partner website URL',
            },
            contactEmail: {
              type: 'string',
              format: 'email',
              description: 'Partner contact email',
            },
            logo: {
              type: 'string',
              description: 'Partner logo URL',
            },
            category: {
              type: 'string',
              description: 'Partner category',
            },
            isActive: {
              type: 'boolean',
              description: 'Partner active status',
            },
          },
        },
        Contact: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Contact name',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Contact email',
            },
            message: {
              type: 'string',
              description: 'Contact message',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            msg: {
              type: 'string',
              description: 'Error message',
            },
          },
        },
      },
    },
    tags: [
      {
        name: 'Authentication',
        description: 'User authentication endpoints',
      },
      {
        name: 'Users',
        description: 'User management endpoints',
      },
      {
        name: 'Events',
        description: 'Event management endpoints (authenticated)',
      },
      {
        name: 'Public Events',
        description: 'Public event endpoints',
      },
      {
        name: 'Partners',
        description: 'Partner management endpoints (authenticated)',
      },
      {
        name: 'Public Partners',
        description: 'Public partner endpoints',
      },
      {
        name: 'Contact',
        description: 'Contact form endpoints',
      },
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
