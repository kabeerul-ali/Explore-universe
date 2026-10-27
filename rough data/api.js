const nasaAPIs = [
  // 1. NASA IMAGE SEARCH API
  {
    id: 1,
    name: "NASA Image Search",
    masterLink: "https://images-api.nasa.gov/search?q={objectName}",
    description:
      "Planet, moon, galaxy aur space se related images, videos aur metadata search karne ke liye.",

    objects: {
      sun: {
        name: "Sun",
        url: "https://images-api.nasa.gov/search?q=sun",
        description: "Sun ki images aur videos."
      },

      mercury: {
        name: "Mercury",
        url: "https://images-api.nasa.gov/search?q=mercury",
        description: "Mercury planet ki images aur videos."
      },

      venus: {
        name: "Venus",
        url: "https://images-api.nasa.gov/search?q=venus",
        description: "Venus planet ki images aur videos."
      },

      earth: {
        name: "Earth",
        url: "https://images-api.nasa.gov/search?q=earth",
        description: "Earth, satellite images aur planet se related media."
      },

      moon: {
        name: "Moon",
        url: "https://images-api.nasa.gov/search?q=moon",
        description: "Moon ki images, videos aur lunar missions."
      },

      mars: {
        name: "Mars",
        url: "https://images-api.nasa.gov/search?q=mars",
        description: "Mars, rovers aur Mars missions ki images aur videos."
      },

      jupiter: {
        name: "Jupiter",
        url: "https://images-api.nasa.gov/search?q=jupiter",
        description: "Jupiter planet aur uske moons ka media."
      },

      saturn: {
        name: "Saturn",
        url: "https://images-api.nasa.gov/search?q=saturn",
        description: "Saturn, uske rings aur moons ka media."
      },

      uranus: {
        name: "Uranus",
        url: "https://images-api.nasa.gov/search?q=uranus",
        description: "Uranus planet ki images aur videos."
      },

      neptune: {
        name: "Neptune",
        url: "https://images-api.nasa.gov/search?q=neptune",
        description: "Neptune planet ki images aur videos."
      },

      pluto: {
        name: "Pluto",
        url: "https://images-api.nasa.gov/search?q=pluto",
        description: "Pluto aur New Horizons mission ka media."
      },

      galaxies: {
        name: "Galaxies",
        url: "https://images-api.nasa.gov/search?q=galaxy",
        description: "Galaxies aur deep-space objects ka media."
      },

      blackHoles: {
        name: "Black Holes",
        url: "https://images-api.nasa.gov/search?q=black%20hole",
        description: "Black holes aur unse related space media."
      },

      nebula: {
        name: "Nebula",
        url: "https://images-api.nasa.gov/search?q=nebula",
        description: "Nebulae aur star-forming regions ki images."
      },

      asteroids: {
        name: "Asteroids",
        url: "https://images-api.nasa.gov/search?q=asteroid",
        description: "Asteroids aur unse related missions ka media."
      },

      comets: {
        name: "Comets",
        url: "https://images-api.nasa.gov/search?q=comet",
        description: "Comets aur unke observation missions ka media."
      }
    }
  },

  // 2. NASA ASTRONOMY PICTURE OF THE DAY
  {
    id: 2,
    name: "NASA APOD",
    masterLink:
      "https://science.nasa.gov/wp-json/wp/v2/apod-basic/",
    description:
      "Astronomy Picture of the Day ki images, titles, explanations aur metadata lene ke liye.",

    endpoints: {
      today: {
        url: "https://science.nasa.gov/wp-json/wp/v2/apod-basic/",
        description: "Default taur par aaj ki astronomy picture ka data."
      },

      randomPictures: {
        url: "https://science.nasa.gov/wp-json/wp/v2/apod-basic/?count=10",
        description: "10 randomly selected astronomy pictures."
      },

      specificDate: {
        url: "https://science.nasa.gov/wp-json/wp/v2/apod-basic/?date=2026-10-20",
        description: "Specific date ki astronomy picture."
      },

      dateRange: {
        url: "https://science.nasa.gov/wp-json/wp/v2/apod-basic/?start_date=2026-10-01&end_date=2026-10-10",
        description: "Do dates ke beech ki astronomy pictures."
      }
    }
  },

  // 3. NASA MEDIA ASSETS API
  {
    id: 3,
    name: "NASA Media Assets",
    masterLink: "https://images-api.nasa.gov/asset/{nasa_id}",
    description:
      "NASA Image Search se mile kisi specific media item ki available asset files retrieve karne ke liye.",

    endpoints: {
      assetById: {
        url: "https://images-api.nasa.gov/asset/{nasa_id}",
        description:
          "Actual NASA ID se replace karke us item ki available media files ki listing lena."
      }
    }
  },

  // 4. NASA EXOPLANET ARCHIVE API
  {
    id: 4,
    name: "NASA Exoplanet Archive",
    masterLink:
      "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query={query}&format=json",
    description:
      "Solar System ke bahar doosre stars ke around orbit karne wale planets ka scientific data query karne ke liye.",

    endpoints: {
      confirmedPlanets: {
        url: "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name+from+ps&format=json",
        description: "Confirmed exoplanets ke names retrieve karne ke liye."
      },

      planetDetails: {
        url: "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps&format=json",
        description: "Confirmed exoplanets ke available database fields retrieve karne ke liye."
      }
    }
  },

  // 5. NASA EPIC API
  {
    id: 5,
    name: "NASA EPIC",
    masterLink: "https://api.nasa.gov/EPIC/api/{type}?api_key=DEMO_KEY",
    description:
      "Earth ki DSCOVR satellite se capture ki gayi natural-color aur enhanced images ka metadata lene ke liye.",

    endpoints: {
      latestNatural: {
        url: "https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY",
        description: "Available natural-color Earth images ka metadata."
      },

      naturalByDate: {
        url: "https://api.nasa.gov/EPIC/api/natural/date/{YYYY-MM-DD}?api_key=DEMO_KEY",
        description: "Specific date ki natural-color Earth images ka metadata."
      },

      latestEnhanced: {
        url: "https://api.nasa.gov/EPIC/api/enhanced/images?api_key=DEMO_KEY",
        description: "Available enhanced-color Earth images ka metadata."
      }
    }
  },

  // 6. NASA ASTEROID API
  {
    id: 6,
    name: "NASA NeoWs",
    masterLink:
      "https://api.nasa.gov/neo/rest/v1/{endpoint}?api_key=DEMO_KEY",
    description:
      "Near-Earth asteroids ki details, close-approach information aur orbital data retrieve karne ke liye.",

    endpoints: {
      asteroidFeed: {
        url: "https://api.nasa.gov/neo/rest/v1/feed?start_date={YYYY-MM-DD}&end_date={YYYY-MM-DD}&api_key=DEMO_KEY",
        description: "Specified date range mein Earth ke paas aane wale asteroids."
      },

      asteroidDetails: {
        url: "https://api.nasa.gov/neo/rest/v1/neo/{asteroid_id}?api_key=DEMO_KEY",
        description: "Specific asteroid ki details uski ID se retrieve karne ke liye."
      },

      browseAsteroids: {
        url: "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY",
        description: "Asteroid dataset ko browse karne ke liye."
      }
    }
  }
];