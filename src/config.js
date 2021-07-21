
export const config = {

    // Define a list of options for icosahedrons to be created
  
    icosahedrons: [
      // center
      { color: "#FF0000", detail: 1 },
      { color: "#0000FF", radius: 1.5, detail: 0 },
      { color: "#000000", radius: 0.5 },
      { color: "#FF00FF", radius: 0.5, wireframe: false },
      // upper 
      { color: "#CCFF00", y:  15.0, z: 0.05, radius: 0.4 },
      { color: "#000000", y:  15.0, z: 0.05, radius: 0.4, wireframe: false },
      // upper 
      { color: "#CCFF00", y:   2.0, z: 0.05, radius: 0.4 },
      { color: "#000000", y:   2.0, z: 0.05, radius: 0.4, wireframe: false },
      // lower
      { color: "#15f4ee", y:  -2.0, z: 0.05, radius: 0.4 },
      { color: "#000000", y:  -2.0, z: 0.05, radius: 0.4, wireframe: false },
      // lower
      { color: "#15f4ee", y: -15.0, z: 0.05, radius: 0.4 },
      { color: "#000000", y: -15.0, z: 0.05, radius: 0.4, wireframe: false },
    ],
  
    // Define rings of icosahedrons
  
    rings: [
      // upper rings
      {
        yPos: 5.0,
        worldRadius: 3.0, shapeRadius: 0.25, shapeColors: ["#000000", "#00FF00"]
      },
      {
        yPos: 10.0,
        worldRadius: 3.0, shapeRadius: 0.25, shapeColors: ["#000000", "#FFF"]
      },
      // lower rings
      {
        yPos: -5.0,
        worldRadius: 3.0, shapeRadius: 0.25, shapeColors: ["#000000", "#69FFB4"]
      },
      {
        yPos: -10.0,
        worldRadius: 3.0, shapeRadius: 0.25, shapeColors: ["#000000", "#FF69B4"]
      },
      { shapeRadius: 0.5, shapeColors: ["#00FF00"] },
      { shapeRadius: 0.25, shapeColors: ["#000000", "#00FF00"] },
      { worldRadius: 3.5, shapeRadius: 0.25, shapeColors: ["#000000", "#FF0000"] },
      {
        yPos: 1.0,
        worldRadius: 3.0, shapeRadius: 0.25, shapeColors: ["#000000", "#0000FF"]
      },
      {
        yPos: -1.0, sides: 12,
        worldRadius: 3.0, shapeRadius: 0.1, shapeColors: ["#000000", "#FFFF00"]
      },
      {
        yPos: -3.0, sides: 5,
        worldRadius: 10.0, shapeRadius: 1.0, shapeColors: ["#AAAAAA"]
      },
      {
        yPos: -6.0, sides: 10,
        worldRadius: 10.0, shapeRadius: 0.25, shapeColors: ["#FFFFFF", "#0000FF"]
      },
      {
        sides: 5, detail: 2,
        worldRadius: 15.0, shapeRadius: 2.0, shapeColors: ["#15f4ee", "#000000"]
      }
    ]
  
  };