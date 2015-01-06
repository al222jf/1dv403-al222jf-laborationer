"use strict";

require.config({
	paths: {
	}
});

require(["lib/modules/desktop"], function(desktop){
	desktop.init();
});