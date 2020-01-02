/**
 * Aufruf der Funktionen aus Tools
 *
 * @package Webapplication
 * @module 
 * @author Christine Leonhard
 * @version v1.0.0
 * @since 2019-12-13
 */


!(function () {
    'use strict';
    //------------------------------------------

    //---------------------
    // DECLARATION 
    //---------------------


    //---------------------
    // FUNKTIONS 
    //---------------------


    //---------------------
    // CONTROL 
    //---------------------



    //---------------------
    // CONTROL 
    //---------------------


    //------------------------------------------
})()

// Aufruf beim Laden von app.js
window.onload = function () {

    'use strict';

    // Datenobjekt für die Navigation 
    let context = 'header',
        data = [{
                text: 'Home',
                link: 'index.html'
            },
            {
                text: 'Work',
                link: 'work.html'
            },
            {
                text: 'Contact',
                link: 'contact.html'
            },
            {
                text: 'Imprint',
                link: 'imprint.html'
            },
        ];

    // Navigation erzeugen anhand des Datenobjektes
    window.tools.addNavigation(data, context);
}