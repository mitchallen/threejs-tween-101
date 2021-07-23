
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
    ]

  };