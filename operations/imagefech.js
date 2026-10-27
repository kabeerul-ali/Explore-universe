export const spaceImages = [
  // PLANETS
  {
    category: "planets",
    name: "Mercury",
    url: "https://images-assets.nasa.gov/image/PIA15162/PIA15162~orig.jpg"
  },
  {
    category: "planets",
    name: "Venus",
    url: "https://images-assets.nasa.gov/image/PIA00271/PIA00271~orig.jpg"
  },
  {
    category: "planets",
    name: "Earth",
    url: "https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg"
  },
  {
    category: "planets",
    name: "Mars",
    url: "https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg"
  },
  {
    category: "planets",
    name: "Jupiter",
    url: "https://images-assets.nasa.gov/image/PIA22946/PIA22946~orig.jpg"
  },
  {
    category: "planets",
    name: "Saturn",
    url: "https://images-assets.nasa.gov/image/PIA01364/PIA01364~orig.jpg"
  },
  {
    category: "planets",
    name: "Uranus",
    url: "https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg"
  },
  {
    category: "planets",
    name: "Neptune",
    url: "https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg"
  },

  // MOONS
  {
    category: "moons",
    name: "Moon",
    url: "https://images-assets.nasa.gov/image/PIA00405/PIA00405~orig.jpg"
  },
  {
    category: "moons",
    name: "Europa",
    url: "https://images-assets.nasa.gov/image/PIA19048/PIA19048~orig.jpg"
  },
  {
    category: "moons",
    name: "Titan",
    url: "https://images-assets.nasa.gov/image/PIA06228/PIA06228~orig.jpg"
  },

  // STARS
  {
    category: "stars",
    name: "Sun",
    url: "https://images-assets.nasa.gov/image/PIA03149/PIA03149~orig.jpg"
  },

  // GALAXIES
  {
    category: "galaxies",
    name: "Andromeda Galaxy",
    url: "https://images-assets.nasa.gov/image/PIA15416/PIA15416~orig.jpg"
  },


  
  {
    category: "nebulae",
    name: "Eagle Nebula",
    url: "https://images-assets.nasa.gov/image/PIA03606/PIA03606~orig.jpg"
  },

  // BLACK HOLES
  {
    category: "black-holes",
    name: "Black Hole",
    url: "https://res.cloudinary.com/dfjttwg1q/image/upload/f_auto/q_auto/Cinematic_Black_Hole_Accretion_Portal_mptxr3.png"},

  // DEEP SPACE
  {
    category: "deep-space",
    name: "Pillars of Creation",
    url: "https://images-assets.nasa.gov/image/PIA20068/PIA20068~orig.jpg"
  },
  {
    category: "deep-space",
    name: "Crab Nebula",
    url: "https://images-assets.nasa.gov/image/PIA17563/PIA17563~orig.jpg"
  },
  
];


export function getimage(name) {
    let find=false;
    for (const i of spaceImages) {
      if (i.name==name) {
        find=true;   
        return i.url;   
          
      }
    }
    if (!find) {
        return "not found";        
    }        
}