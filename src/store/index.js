// Importing the proxy function from the valtio library.
import { proxy } from 'valtio';

// Creating a proxy state object with initial values.
// Proxy state is reactive, meaning any component or function
// that uses this state will re-render or re-run when the state changes.
const state = proxy({
  intro: true,              // A flag indicating whether an introduction is shown or not.
  color: '#EFBD48',         // A color, represented in hexadecimal.
  isLogoTexture: true,      // A flag indicating if the logo has a texture.
  isFullTexture: false,     // A flag indicating if the entire model has a texture.
  logoDecal: './threejs.png',  // Path to the logo texture image.
  fullDecal: './threejs.png',  // Path to the full texture image.
});

// Exporting the state to make it available to other parts of the application.
export default state;
