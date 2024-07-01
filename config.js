var config = {
    style: 'mapbox://styles/mapbox/light-v11',
    accessToken: 'pk.eyJ1IjoibWFyaWV0YW0xNyIsImEiOiJjbGJvMXc1aXMwMXR5M3BzNXdhdmNibThuIn0.Zhz04sNiYxjsfDsjn2x49A',
    showMarkers: true,
    markerColor: 'grey',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'From coast to coast: Key constituencies where Conservatives face biggest defeats',
    subtitle: 'The political landscape has dramatically shifted since 2019, but some voter sentiments have changed more than others',
    byline: 'By Marieta Marinova',
    footer: 'Source: created by Marieta Marinova  <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
    
        {
            id: 'first-marker',
            alignment: 'left',
            hidden: false,
            title: 'Labour has a 21-point lead over Conservatives, The Times data team suggests',
            description: 'According to YouGov latest MRP poll, Labour is projected to secure 425 seats, resulting in a majority of 200, while the Conservatives are predicted to win only 108 seats.',
            location: {
                center: [-1.457539, 52.662458],
                zoom: 5,
                pitch: 6,
                bearing: 4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    
        {
            id: 'second-marker',
            alignment: 'right',
            hidden: false,
            title: 'South West - St Ives',
            image: 'https://i.imgur.com/77rSHBm.png',
            description: 'Lib Dem gain from Conservatives',
            location: {
                center: [-5.61722, 50.08141],
                zoom: 8,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-marker',
            alignment: 'left',
            hidden: false,
            title: 'South East - Eastbourne',
            image: 'https://i.imgur.com/XQ9WPkp.png',
            description: 'Lib Dem gain from Conservatives',
            location: {
                center: [0.258516, 50.77387],
                zoom: 6,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-marker',
            alignment: 'right',
            hidden: false,
            title: 'London - Carshalton and Wallington',
            image: 'https://i.imgur.com/AHiw28a.png',
            description: 'Lib Dem gain from Conservatives',
            location: {
                center: [-0.15891, 51.35631],
                zoom: 12,
                pitch: 8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

       {
    id: 'fifth-marker',
    alignment: 'left',
    hidden: false,
    title: 'East of England - Norwich North',
    image: 'https://i.imgur.com/9OvXak8.png',
    description: 'Labour gain from Conservatives',
    location: {
        center: [1.296274, 52.66252],
        zoom: 8,
        pitch: 40,
        bearing: 3
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
       },
    


{
    id: 'sixth-marker',
    alignment: 'right',
    hidden: false,
    title: 'East Midlands - High Peak',
    image: 'https://i.imgur.com/bN55UEt.png',
    description: 'Labour gain from Conservatives',
    location: {
        center: [-1.844, 53.38563],
        zoom: 10,
        pitch: 60,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},

{
    id: 'seventh-marker',
    alignment: 'left',
    hidden: false,
    title: 'West Midlands - North Shropshire',
    image: 'https://i.imgur.com/bjaIy2c.png',
    description: 'Lib Dem gain from Conservatives',
    location: {
        center: [-2.89372, 52.86487],
        zoom: 5,
        pitch: 35,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},

{
    id: 'eight-marker',
    alignment: 'right',
    hidden: false,
    title: 'Wales - Vale of Glamorgan',
    image: 'https://i.imgur.com/LsPAcTv.png',
    description: 'Labour gain from Conservatives',
    location: {
        center: [-3.42173, 51.44807],
        zoom: 6,
        pitch: 9,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},

{
id: 'ninth-marker',
alignment: 'left',
hidden: false,
title: 'North West - Westmorland and Lonsdale',
image: 'https://i.imgur.com/MFo35sm.png',
description: 'Lib Dem gain from Conservatives',
location: {
    center: [-2.71306, 54.4406],
    zoom: 7,
    pitch: 9,
    bearing: 0
},
mapAnimation: 'flyTo',
rotateAnimation: false,
callback: '',
onChapterEnter: [],
onChapterExit: []
},

{
id: 'tenth-marker',
alignment: 'right',
hidden: false,
title: 'Yorkshire and the Humber - Kingston upon Hull West and Haltermprice',
image: 'https://i.imgur.com/UNnBKev.png',
description: 'Labour gain from Conservatives',
location: {
    center: [-0.4024, 53.74201],
    zoom: 9,
    pitch: 9,
    bearing: 0
},
mapAnimation: 'flyTo',
rotateAnimation: false,
callback: '',
onChapterEnter: [],
onChapterExit: []
},

{
    id: 'eleventh-marker',
    alignment: 'left',
    hidden: false,
    title: 'North East - Newton Aycliffe and Spennymoor',
    image: 'https://i.imgur.com/NgmkSP2.png',
    description: 'Labour gain from Conservatives',
    location: {
        center: [-1.5048, 54.67207],
        zoom: 7,
        pitch: 9,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
    },

    {
        id: 'twelfth-marker',
        alignment: 'right',
        hidden: false,
        title: 'Scotland - West Aberdeenshire and Kincardine',
        image: 'https://i.imgur.com/5JspQ5o.png',
        description: 'SNP gain from Conservatives',
        location: {
            center: [-2.9473, 57.02113],
            zoom: 6,
            pitch: 9,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
    },
]
}
    