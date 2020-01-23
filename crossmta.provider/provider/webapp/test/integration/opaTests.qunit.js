/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"crossmta/provider/provider/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});