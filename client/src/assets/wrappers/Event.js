import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  margin-bottom: 2rem; /* Spacing between each user component */
  
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  
  /* Styling for main icon */
  .main-icons {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: #22703c;
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }

  /* For a circular icon with background image */
  .main-icon {
    width: 10rem;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
  }

  .partner-icon-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Info styles for name, email, etc */
  .info {
    h5 {
      margin-bottom: 0.5rem;
      text-transform: none;
    }
    p {
      margin: 0;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
      text-transform: none;
    }
  }
  
  /* Content area (location, role, etc.) */
  .content {
    padding: 1rem 1.5rem;
    border-top: 1px solid #ddd;
    margin-top: 1rem;
  }
  
  /* Flex layout for content */
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Status Badge Styling */
  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
  }

  .status-upcoming {
    background: #e0e8f9;
    color: #647acb;
  }

  .status-completed {
    background: #ffeeee;
    color: #d66a6a;
  }

  /* Buttons and actions */
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
  }

  .edit-btn {
    margin-right: 0.5rem;
    background-color: #4caf50; /* Green color for editing */
    color: white;
  }
  
  .delete-btn {
    background-color: #f44336; /* Red color for deletion */
    color: white;
  }

  .edit-btn:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  .delete-btn:hover {
    background-color: #d32f2f; /* Darker red on hover */
  }
`;

export default Wrapper;
