/*
 * File: icosahedron.js
 * Author: Mitch Allen
 * Reference:
 *  https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry
 */

// 1. Define and export a icosahedron factory class
export class IcosahedronFactory {

    // 2. Define a static create method to return new icosahedrons
    static createMesh( spec = {} ) {
  
      // 3. Setup default values or use arguments
  
      let {
        color = '#FF00FF',
        radius = 1,
        detail = 0, // greater than 1, it's effectively a sphere.
        wireframe = true,
      } = spec;
  
      // 4. Use ThreeJS to define a 3D icosahedron
      var geometry = new THREE.IcosahedronGeometry(radius, detail);
      var material = new THREE.MeshBasicMaterial({ 
        color: color,
        wireframe: wireframe 
      });
  
      return {
        geometry,
        material
      }
    }
  
    // 2. Define a static create method to return new icosahedrons
    static create( spec = {} ) {
  
      // 3. Setup default values or use arguments
  
      let {
        name = "icosahedron",
        x = 0.0,
        y = 0.0,
        z = 0.0,
        mesh = IcosahedronFactory.createMesh( spec ),
      } = spec;
  
      let { geometry, material } = mesh; 
  
      // 4. Use ThreeJS to define a 3D icosahedron
  
      var icosahedron = new THREE.Mesh( geometry, material );
  
      // 5. Use the name property to specify a type
      icosahedron.name = name;
  
      // 6. Using ThreeJS methods on the icosahedron, move it to a specific offset
      icosahedron.translateX(x);
      icosahedron.translateY(y);
      icosahedron.translateZ(z);
  
      // 7. Return the new icosahedron
      return icosahedron;
    }
  
    static createRing( spec = {} ) {
  
      let {
        sides = 6,
        yPos = 0.0,
        worldRadius = 5,
        shapeRadius = 1,
        shapeColors = [ "#000000", "#0000FF" ],
      } = spec;
  
      var step = 2 * Math.PI / sides;
    
      var meshList = [];
    
      for( var j = 0; j < shapeColors.length; j++ ) {
        meshList.push( IcosahedronFactory.createMesh(
          {
            ...spec,
            color: shapeColors[j],
            radius: shapeRadius,
            wireframe: j === 0,
          }) );
      }
  
      var ringGroup = new THREE.Group();
    
      for (var i = 0, angle = 0; i < sides; i++, angle += step) {
          var xPos = worldRadius * Math.cos(angle);
          var zPos = worldRadius * Math.sin(angle);
          for( var m = 0; m < meshList.length; m++ ) {
            ringGroup.add(IcosahedronFactory.create({ 
                mesh: meshList[ m ], 
                x: xPos, 
                y: yPos,
                z: zPos,           
              }))
          }
      }
  
      ringGroup.name = "ring";
  
      return ringGroup;
    }
  }