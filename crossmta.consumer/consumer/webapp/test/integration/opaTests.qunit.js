/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"crossmta/consumer/consumer/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});