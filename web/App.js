var App = {};

/**
 * ============================================================================
 *	App state
 * ============================================================================
 */
 
App.state = {
	filenav_open: false
};

/**
 * ============================================================================
 *	Utils function
 * ============================================================================
 */
 
App.utils = {};

/**
 * ============================================================================
 *	Render functions
 * ============================================================================
 */

App.render = function(section) {
	var sections = ['section_projectButtons', 'section_filenav'];
	for (var i = 0; i < sections.length; i++) {
		if (!section || section.indexOf(sections[i]) > -1) {
			try {
				App.renders[sections[i]]();
			} catch(err) {
				console.error("Please define the App.renders." + sections[i] + " function.");
			}
		}
	}
};

App.renders = {};

App.renders.section_projectButtons = function() {
	$('#btn_newProject').off('click');
	$('#btn_loadProject').off('click');
	
	$('#btn_newProject').on('click', function() {
		App.state.filenav_open = true;
		App.render(['section_filenav']);
	});
	$('#btn_loadProject').on('click', function() {
		App.state.filenav_open = true;
		App.render(['section_filenav']);
	});
}

App.renders.section_filenav = function() {
	App.state.filenav_open ? $('#section_filenav').show() : $('#section_filenav').hide();
}

App.render();