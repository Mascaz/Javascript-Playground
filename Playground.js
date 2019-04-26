var myMusic =
    [
        {
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats":
            [
                "CD",
                "8T",
                "LP"
            ],
            "gold": true
        },
        {
            "artist": "Beau Carnes",
            "title": "Cereal Man",
            "release_year": "2003",
            "formats": ["video"]
        }
    ];

var musicFormat = myMusic[0].formats;
console.log(musicFormat);

var LPFormat = myMusic[0].formats[2];
console.log(LPFormat);

//making copies of objects
var musicCollectionCopy = JSON.parse(JSON.stringify(myMusic));