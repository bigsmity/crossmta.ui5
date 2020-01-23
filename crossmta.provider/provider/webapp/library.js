sap.ui.define([], function() {
    "use strict";

    jQuery.sap.declare("crossmta.provider");
    
    /**
     * @alias crossmta.provider
     */
    sap.ui.getCore().initLibrary({

        name: "crossmta.provider",
        version: "1.0.0",
        dependencies: ["sap.ui.core"],
        types: [],
        interfaces: [],
        controls: [],
        elements: [],
        noLibraryCSS: true
    });
    
	console.log("crossmta.provider. Loaded.");

    return crossmta.provider;

}, false);
