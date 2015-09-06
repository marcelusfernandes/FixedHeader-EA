/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'materia3',
                            type: 'image',
                            rect: ['0px', '140px', '1400px', '2409px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"materia.png",'0px','0px']
                        },
                        {
                            id: 'buttonscroll2',
                            symbolName: 'buttonscroll2',
                            type: 'rect',
                            rect: ['102px', '292px', '39', '39', 'auto', 'auto']
                        },
                        {
                            id: 'buttonscroll1',
                            symbolName: 'buttonscroll1',
                            type: 'rect',
                            rect: ['102px', '351px', '39', '39', 'auto', 'auto']
                        },
                        {
                            id: 'bannerfull2',
                            type: 'image',
                            rect: ['0px', '0px', '1400px', '141px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bannerfull.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1400px', '2000px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "top",
                            4000,
                            2499,
                            "linear",
                            "${materia3}",
                            '140px',
                            '-920px'
                        ],
                        [
                            "eid44",
                            "top",
                            6499,
                            1501,
                            "linear",
                            "${materia3}",
                            '-920px',
                            '140px'
                        ]
                    ]
                }
            },
            "buttonscroll2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bscroll1',
                            type: 'image',
                            rect: ['0px', '0px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bscroll1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '39px', '39px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "buttonscroll1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bscroll2',
                            type: 'image',
                            rect: ['0px', '0px', '39px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bscroll2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '39px', '39px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("scroll-materia_edgeActions.js");
})("EDGE-127331680");
