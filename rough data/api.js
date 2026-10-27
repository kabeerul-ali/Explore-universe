const spaceAPIs = [
    {
        name: "NASA Astronomy Picture of the Day (APOD)",
        description: "NASA ki daily astronomy images aur videos.",
        url: `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${options}`,
        options: [
            "",
            "?count=10",
            "?date=2026-10-20",
            "?start_date=2026-10-01&end_date=2026-10-10"
        ]
    },

    {
        name: "NASA Image Search",
        description: "NASA ki images aur videos search karne ke liye.",
        url: `https://images-api.nasa.gov/search?q=${options}`,
        options: [
            "space",
            "planets",
            "mars",
            "jupiter",
            "earth",
            "sun",
            "moon",
            "mercury",
            "venus",
            "saturn",
            "uranus",
            "neptune",
            "pluto",
            "galaxy",
            "milky way",
            "black hole",
            "nebula",
            "stars",
            "asteroids",
            "comets",
            "solar system",
            "universe",
            "astronaut",
            "space station",
            "rocket",
            "NASA",
            "space exploration",
            "exoplanets",
            "supernova",
            "eclipse",
            "meteor",
            "mars rover",
            "earth from space",
            "space telescope",
            "hubble telescope",
            "james webb telescope"
        ]
    },

    {
        name: "NASA Media Assets",
        description: "NASA media ki files aur assets.",
        url: `https://images-api.nasa.gov/asset/${options}`,
        options: [
            "NASA_ID"
        ]
    },

    {
        name: "NASA Exoplanet Archive",
        description: "Solar System ke bahar planets ka data.",
        url: `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=${options}&format=json`,
        options: [
            "select+top+20+pl_name,hostname,discoverymethod+from+ps"
        ]
    },

    {
        name: "NASA EPIC",
        description: "Earth ki images aur metadata.",
        url: `https://api.nasa.gov/EPIC/api/natural/${options}?api_key=DEMO_KEY`,
        options: [
            "images",
            "all"
        ]
    },

    {
        name: "NASA NeoWs",
        description: "Earth ke paas se guzarne wale asteroids ka data.",
        url: `https://api.nasa.gov/neo/rest/v1/${options}?api_key=DEMO_KEY`,
        options: [
            "feed",
            "neo/browse"
        ]
    }
];