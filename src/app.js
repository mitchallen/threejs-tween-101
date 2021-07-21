// 1. Add reminder for how to reference the script
/*
  In a browser must use script type="module" parameter:

  <script type="module" src="./src/app.js"></script>
 */

// 2. Import the icosahedron scene factory
import {IcosahedronSceneFactory} from './icosahedron-scene.js';
import {config} from './config.js';

// 3. Create a new icosahedron scene using the factory
var icosahedronScene = IcosahedronSceneFactory.create({
  clear: "#111111",
  config
});

// 4. Add and define a listener for browser resize events
window.addEventListener( 
  'resize', 
  icosahedronScene.resize, 
  false 
);

// 5. Animate
icosahedronScene.animate();