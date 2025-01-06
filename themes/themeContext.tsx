import { createContext } from 'react';
import theme from './theme'; // Adjust the import path as necessary

const themeContext = createContext(theme.light); // Default to light theme

export default themeContext;
