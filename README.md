# Admin Frontend Template

This is a React-based admin frontend template. Below you will find information about the dependencies used, different parts of the template, and instructions on how to run the project.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **@reduxjs/toolkit**: The official, recommended way to write Redux logic.
- **react-redux**: Official React bindings for Redux.
- **react-router-dom**: DOM bindings for React Router.
- **i18next**: Internationalization framework.
- **react-i18next**: React bindings for i18next.
- **prop-types**: Runtime type checking for React props.

## Project Structure

### `src/store`

Contains the Redux store configuration.

- **index.js**: Configures and exports the Redux store.

### `src/reducers`

Contains the Redux reducers.

- **index.js**: Combines all reducers.
- **counter.reducer.js**: Manages the state for the counter.

### `src/pages`

Contains the different pages of the application.

- **notfound/index.jsx**: 404 Not Found page.
- **login/index.jsx**: Login page.

### `src/i18n`

Contains the internationalization configuration and translation files.

- **index.js**: Configures i18next.
- **en.json**: English translations.
- **fr.json**: French translations.

### `src/components/atoms`

Contains small, reusable components.

- **StyledLogo.jsx**: A simple component that displays the "StyledLogo" text.

### `src/App.jsx`

The main application component that connects to the Redux store and handles the counter functionality.

## Running the Project

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd adminfront
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the project**:
    ```sh
    npm start
    ```

4. **Open the application**:
    Open your browser and navigate to `http://localhost:3000`.

## Explanation of Template Parts

- **Store Configuration**: The Redux store is configured in `src/store/index.js` using `@reduxjs/toolkit`.
- **Reducers**: The state management logic is handled by reducers in `src/reducers`. The `counter.reducer.js` manages the counter state.
- **Pages**: The `src/pages` directory contains different pages of the application, such as the login page and the 404 Not Found page.
- **Internationalization**: The `src/i18n` directory contains the configuration for i18next and the translation files for English and French.
- **Components**: The `src/components/atoms` directory contains small, reusable components like `StyledLogo.jsx`.
- **Main Application**: The `src/App.jsx` file is the main application component that connects to the Redux store and handles the counter functionality.

This template provides a basic structure for a React-based admin frontend with state management and internationalization support.