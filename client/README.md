# Arcadia Frontend Documentation

This is the frontend-only guide for the React client in the client folder. Backend setup belongs in [README_BACKEND.md](../README_BACKEND.md), and Swagger examples belong in [SWAGGER_TEMPLATES.md](../SWAGGER_TEMPLATES.md).

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

The app runs at http://localhost:5173.

## Project structure

```text
client/
  public/               # Static assets
  src/
    assets/             # Images, wrappers, shared UI assets
    components/         # Reusable UI components
    pages/              # Route-level screens
    utils/              # Axios helpers and constants
    App.jsx             # Router setup
    main.jsx            # Entry point
    index.css           # Global styles
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

## API communication

The client uses a shared Axios instance from src/utils/customFetch.js and proxies requests to the backend through Vite.

```javascript
const customFetch = axios.create({
  baseURL: '/api/v1',
});
```

## Notes

Keep this file focused on frontend concerns only: UI structure, routing, components, state, styling, and client-side setup.
  /* Colors */
  --primary-500: #645cff;
  --grey-50: #f8fafc;
  
  /* Dark Mode */
  --dark-mode-bg-color: #333;
  --dark-mode-text-color: #f0f0f0;
  
  /* Spacing */
  --border-radius: 0.25rem;
  --letter-spacing: 1px;
  
  /* Transitions */
  --transition: 0.3s ease-in-out all;
}

.dark-theme {
  --text-color: var(--dark-mode-text-color);
  --background-color: var(--dark-mode-bg-color);
}
```

## Form Handling

### React Router Actions

Forms use React Router's `<Form>` component and actions:

```javascript
// pages/Register.jsx
import { Form } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful!');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (
    <Form method="post">
      <FormRow type="text" name="name" />
      <FormRow type="email" name="email" />
      <FormRow type="password" name="password" />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </Form>
  );
};
```

## API Integration

### Making API Requests

```javascript
import customFetch from '../utils/customFetch';

// GET request
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/events');
    return { events: data.events };
  } catch (error) {
    return error;
  }
};

// POST request
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customFetch.post('/events', data);
    toast.success('Event created!');
    return redirect('/dashboard/all-events');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// PATCH request
const updateEvent = async (id, data) => {
  const response = await customFetch.patch(`/events/${id}`, data);
  return response.data;
};

// DELETE request
const deleteEvent = async (id) => {
  await customFetch.delete(`/events/${id}`);
};
```

## Theme Toggle

The app supports dark/light mode:

```javascript
const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const toggleDarkTheme = () => {
  const newDarkTheme = !isDarkTheme;
  setIsDarkTheme(newDarkTheme);
  document.body.classList.toggle('dark-theme', newDarkTheme);
  localStorage.setItem('darkTheme', newDarkTheme);
};
```

## Authentication Flow

1. **Registration**: User fills form → Action submits → Redirects to login
2. **Login**: Credentials sent → Cookie set by backend → Redirects to dashboard
3. **Protected Routes**: Loader checks auth → If unauthorized, redirects to login
4. **Logout**: Clear cookie → Redirect to home

## Notifications

Using React Toastify:

```javascript
import { toast } from 'react-toastify';

// Success
toast.success('Action completed successfully!');

// Error
toast.error('Something went wrong!');

// Info
toast.info('Here is some information');

// Warning
toast.warning('Please be careful');
```

## Environment Variables

Not typically needed for frontend in this setup, as API proxy handles URLs. However, you can create `.env` file if needed:

```env
VITE_API_URL=http://localhost:5100/api/v1
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Building for Production

1. **Build the app**
   ```bash
   npm run build
   ```

2. **Test production build**
   ```bash
   npm run preview
   ```

3. **Deploy `dist` folder** to your hosting service (Netlify, Vercel, etc.)

### Production Considerations

- Update API baseURL to production backend
- Configure CORS on backend
- Ensure cookie settings work with production domain
- Set up proper error boundaries
- Add loading states
- Optimize images and assets

## Troubleshooting

### Vite Dev Server Issues
- Clear Vite cache: `rm -rf node_modules/.vite`
- Ensure port 5173 is available

### API Connection Issues
- Verify backend is running on port 5100
- Check Vite proxy configuration
- Check browser console for CORS errors

### Styling Issues
- Ensure styled-components is installed
- Check for CSS variable definitions
- Verify dark theme class is toggled

### Routing Issues
- Check route paths match exactly
- Verify loaders/actions are exported
- Check for error boundaries

## npm Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext js,jsx"
}
```

## Dependencies

### Production Dependencies
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.10.0
- @tanstack/react-query: ^4.29.5
- axios: ^1.3.6
- styled-components: ^5.3.10
- react-icons: ^4.8.0
- react-toastify: ^9.1.2
- dayjs: ^1.11.7
- recharts: ^2.5.0

### Development Dependencies
- @vitejs/plugin-react: ^4.0.0
- vite: ^4.3.0
- eslint: ^8.38.0

## Best Practices

1. **Component Organization**: Keep components small and focused
2. **Reusability**: Use shared components (FormRow, etc.)
3. **Error Handling**: Always handle errors in loaders/actions
4. **Loading States**: Show loading indicators during async operations
5. **Accessibility**: Use semantic HTML and ARIA labels
6. **Performance**: Lazy load routes if needed
7. **Security**: Never store sensitive data in localStorage

## License

Part of SSCGI academic coursework.
