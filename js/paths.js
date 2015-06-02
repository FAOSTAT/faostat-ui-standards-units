define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_STANDARDS_UNITS: 'faostat-ui-standards-units',
            faostat_ui_standards_units: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});