
// 1. Import XRKIT and the icosahedron class factory

import {
    XRKIT,
  } from 'https://cdn.jsdelivr.net/npm/@mitchallen/three-xr-kit@1.0.13/dist/three-xr-kit.modern.js';
  
  import { IcosahedronFactory } from './icosahedron.js';
  
  // 2. Define and export a scene factory class
  export class IcosahedronSceneFactory {
  
    // 3. Define a static create method to return new scenes filled with icosahedron
    static create(spec) {
  
      // 4. Setup default values or use spec arguments
      spec = spec || {};
      var config = spec.config || {};
      var icosahedrons = config.icosahedrons || [];
      var rings = config.rings || [];
  
      var speed = 1;
  
      var gamePads = [];
  
      // Create a VR App
      // var vrApp = VRFactory.create(spec);
      var vrApp = XRKIT.create(spec);
  
      // Create a demo world group node
      const demoWorld = new THREE.Group();
      demoWorld.name = "demo";
  
      let NEON_GREEN = '#39FF14';
      let NEON_PINK = '#FF10F0';
  
      let shapeColor = NEON_PINK;
      let shapeOptions = [
        { color: shapeColor, x:  0, y: 0, z: 0, radius: 0.3 },
      ];
  
      for( let x = -1; x <= 1; x++ ) {
        for( let y = -1; y <= 1; y++ ) {
          for( let z = -1; z <= 1; z++ ) {
            shapeOptions.push({ color: shapeColor,  x, y, z, radius: 0.3 });
          }
        }
      }
  
      shapeOptions.forEach(options => demoWorld.add(IcosahedronFactory.create(options)));
  
      // Add icosahedrons to the demo world group node 
      // icosahedrons.forEach(options => demoWorld.add(IcosahedronFactory.create(options)));
  
      // Add rings of icosahedrons to the demo world group node
      // rings.forEach(options => demoWorld.add(IcosahedronFactory.createRing(options)));
  
  
      var points = [
        { x: -1, y: -1, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: -1, y: 1, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 1, y: -1, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 0 },
        { x: 0, y: 0, z: 0 },
  
        { x: -1, y: -1, z: 1 },
        { x: 0, y: 0, z: 1 },
        { x: -1, y: 1, z: 1 },
        { x: 0, y: 0, z: 1 },
        { x: 1, y: -1, z: -1 },
        { x: 0, y: 0, z: -1 },
        { x: 1, y: 1, z: -1 },
        { x: 0, y: 0, z: -1 },
  
        { x: -1, y: -1, z: 1 },
        { x: 0, y: 0, z: -1 },
        { x: -1, y: 1, z: 1 },
        { x: 0, y: 0, z: -1 },
        { x: 1, y: -1, z: 1 },
        { x: 0, y: 0, z: -1 },
        { x: 1, y: 1, z: 1 },
        { x: 0, y: 0, z: -1 },
  
      ];
  
      let iStart = 0;
      let iEnd = iStart + 1;
  
      let avatar = IcosahedronFactory.create({ color: NEON_GREEN, wireframe: false, radius: 0.2 });
      avatar.position.x = points[0].x;
      avatar.position.x = points[0].y;
      avatar.position.z = points[0].z;
      avatar.material.transparent = true;
      avatar.name = "fader";
      demoWorld.add(avatar);
  
      function move() {
        createjs.Tween.get(avatar.position).to(points[iStart], 500).wait(1500).to(points[iEnd], 500).call(
          function () {
            iStart++;
            if (iStart >= points.length) {
              iStart = 0;
            }
            iEnd = iStart + 1;
            move();
          }
        );
      }
  
      move();
  
      // createjs.Tween.get(avatar.material, { loop: true }).to({ opacity: 1 }, 500).wait(1500).to({ opacity: 0 }, 500);
      createjs.Tween.get(avatar.rotation, { loop: true }).wait(500).to({ y: Math.PI * 2 }, 1500, createjs.Ease.getPowInOut(3)).wait(500);
  
      // position the demo world
      demoWorld.translateY(1)
      demoWorld.translateZ(-5);
  
      // 8. Create a new ThreeJS scene
      var scene = new THREE.Scene();
  
      // Add demo world to scene
      scene.add(demoWorld);
  
  
  
      // Oculus Go Controller
      // Oculus Quest Left Controller (depends on handedness??)
      const c0 = vrApp.renderer.xr.getController(0);
      const c1 = vrApp.renderer.xr.getController(1);
      for (var ix = 0; ix < 2; ix++) {
        const cX = vrApp.renderer.xr.getController(ix);
        console.log(`CONTROLLER: [${ix}]`);
        console.log(cX);
      }
  
      console.log("### XR START ###")
      console.log(vrApp.renderer.xr)
      console.log("^^^ XR END ^^^")
  
      // scene.add(c0);
      // const h0 = vrApp.renderer.xr.getHand(0);
      // console.log(h0);
      c0.addEventListener('connected', function (event) {
        console.log('[0] controller connected')
        // console.log(JSON.stringify(event,null,2));
        console.log(event);
        console.log(`[0] controller connected handedness:\n > ${event.data.handedness}`);
        console.log(`[0] controller connected profiles:\n > ${event.data.profiles}`);
        console.log(`[0] controller connected gamepad:\n > `);
        console.log(event.data.gamepad);
        console.log(`[0] controller connected data:\n > `);
  
        gamePads.push(event.data.gamepad);
  
        console.log(event.data);
  
        // var session = vrApp.renderer.xr.getSession();
        // if( session ) {
        //   console.log('*** INPUT SOURCES ***:')
        //   console.log(session.inputSources);
        // }
      });
  
      c1.addEventListener('connected', function (event) {
        console.log('[1] controller connected')
        // console.log(JSON.stringify(event,null,2));
        console.log(event);
        console.log(`[1] controller connected handedness:\n > ${event.data.handedness}`);
        console.log(`[1] controller connected profiles:\n > ${event.data.profiles}`);
        console.log(`[1] controller connected gamepad:\n > `);
        console.log(event.data.gamepad);
  
        gamePads.push(event.data.gamepad);
  
        console.log(`[1] controller connected data:\n > `);
        console.log(event.data);
      });
  
      c0.addEventListener('select', function (event) {
        console.log(`[0] select`);
        console.log(`[0] handedness:\n > ${event.data.handedness}`);
        console.log(`[0] profiles:\n > ${event.data.profiles}`);
        // console.log(JSON.stringify(event,null,2));
      });
  
      c1.addEventListener('select', function (event) {
        console.log(`[1] select`);
        console.log(`[1] handedness:\n > ${event.data.handedness}`);
        console.log(`[1] profiles:\n > ${event.data.profiles}`);
        // console.log(JSON.stringify(event,null,2));
      });
  
      c0.addEventListener('selectstart', function () {
        console.log(`[0] select start ${speed++}`);
      });
      c0.addEventListener('selectend', () => console.log('[0] select end'));
      // c0.addEventListener('selectstart', onSelectStart);
      // c0.addEventListener('selectend', onSelectEnd);
      c0.addEventListener('squeezestart', function () {
        console.log(`[0] squeeze start ${speed--}`);
      });
      c0.addEventListener('squeezeend', () => console.log('[0] squeeze end'));
  
      // 10. Define a icosahedron scene with methods to return
      var icosahedronScene = {
  
        // 11. Define a method on the icosahedron scene to handle browser window resizing
        resize: function () {
          // VRFactory.resize(vrApp);
          XRKIT.resize(vrApp);
        },
  
        // 12. Define a method to be called when the scene is rendered
        step: function () {
          scene.traverse(function (node) {
            if (node.name === "icosahedron") {
              node.rotation.x += 0.005;
              node.rotation.y += 0.01 * speed;
            }
            if (node.name === "demo") {
              node.rotation.y += 0.005;
            }
            if (node.name === "ring") {
              // node.rotation.y += 0.01;
            }
          });
  
          gamePads.forEach(function (gamepad, ig) {
            // console.log(gamepad.buttons[0].pressed) 
  
            if (gamepad.buttons) {
              if (gamepad.buttons.length > 2) {
                // on Go, 2 may be touch pad
                if (gamepad.buttons[2].pressed) {
                  speed = 1;
                }
              }
  
              gamepad.buttons.forEach(function (btn, ix) {
                // console.log(btn)
                // Oculus Quest: 0 = squeeze, 3 = select
                if (ix !== 0 && ix !== 3 ) {
                  // this still interferes with squeeze
                  if (btn.pressed) {
                    // console.log(`PRESSED: [${ig}] [${ix}]`)
                    speed = 1;
                  }
                }
              });
            }
  
          });
  
          // VRFactory.render({
            XRKIT.render({
            scene,
            ...vrApp
          });
        },
  
        // 12.B - [VR] Add VR animation loop
        animate: function () {
          vrApp.renderer.setAnimationLoop(this.step);
        }
      };
  
      // 13. Return the new icosahedron scene
      return icosahedronScene;
    }
  }