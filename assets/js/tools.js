/**
 * Tool fuer die Webapplikation
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


    /**
    * Erzeugen einer Navigation
    * 
    * <nav><ul><li><a href="link">text</a></li> ... </ul></nav>
    */
    function _addNavigation(data) {

        try {

            // 'äußere' Elemente anlegen
            let header = document.createElement('header');
            let nav = document.createElement('nav');
            let ui = document.createElement('ul');

            // Link anlegen und an die 'äußeren' Elemente binden
            for (let index = 0; index < data.length; index++) {

                let li = document.createElement('li');
                let a = document.createElement('a');
                let txt = document.createTextNode(data[index].text);
                a.setAttribute('href', data[index].link);

                a.appendChild(txt);
                li.appendChild(a);
                ui.appendChild(li);
            }

            //  'äußere' Elemente ins DOM anhängen
            nav.appendChild(ui);
            header.appendChild(nav);
            document.body.appendChild(header);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    /**
     * Hauptklasse
     */
    function _main() {
        // publish module and a function
        window.tools = {} || window.tools;
        window.tools.addNavigation = _addNavigation;
    }

    // - - - - -
    // CONTROL
    // - - - - -
    _main();



    //------------------------------------------
})()
