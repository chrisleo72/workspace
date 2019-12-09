/**
 * Variablen und Scopes erforschen
 * Karte Nr. 2/3
 *
 * @desc Variablen und Scopes erforschen
 * @package Webapplication
 * @module Transfer (Javascript Grundlagen)
 * @author Christine Leonhard
 * @version v1.0.1
 * @since 2019-12-09
 * @copyright (c) 2019 Christine Leonhard, Baunatal
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
     * Liefert den Typ einer Variablen zurück
     * @param {any} variable - Variable deren Typ bestimmt werden soll
     * @returns {string} - Typ der Variable
     */
    function _getType(variable) {

        try {

            // Sonderfall Array
            if (Array.isArray(variable)) {
                return 'array';
            }

            return typeof (variable)

        } catch (error) {
            console.log(error);
            return error;
        }
    };


    /**
    * Liefert den Wert einer Variablen zurück
    *  @param {any} variable - Variable deren Wert bestimmt werden soll
    *  @returns {string} - Typ der Variable
    * */
    function _getValue(variable) {

        let value = "";

        try {
            // Sonderfall Array
            if (Array.isArray(variable)) {
                for (let i = 0; i < variable.length; i++) {
                    value = value + ', ' + variable[i];
                }
                value = value.substring(2, value.length);
            }

            // Sonderfall Object
            else if (typeof (variable) === 'object') {
                for (let key in variable) {
                    value = value + ', ' + variable[key];
                }
                value = value.substring(2, value.length);
            }

            // alle anderen
            else value = variable;

            // Rückgabe der Werte
            return value;

        } catch (error) {
            console.log(error);
            return error;
        }
    };

    /**
    * Ausgabe von VariablenName, Typ und Wert in der Console
    * @param {string} name - Name der Variablen 
    * @param {any} variable - übergebene Variable
    * */
    function _log(name, variable) {

        try {

            // Ausgabe
            console.log(name + ' {' + _getType(variable) + '}: ' + _getValue(variable));

        } catch (error) {
            console.log(error);
        }
    };


    /**
    * Hauptklasse
    */
    function _main() {

        // Module und Funktionen global bekanntmachen
        window.tools = {} || window.tools;
        window.tools.log = _log;

    }

    //---------------------
    // CONTROL 
    //---------------------
    _main();


    //------------------------------------------
})()


window.onload = function () {

    'use strict';

    // Variablen deklarieren und vorbesetzen
    let
        myNumber = 42,
        myString = 'Lorem ipsum dolor sit.',
        myBoolean = false,
        myArray = [1, 2, 3, 4],
        myObject = {
            key1: 'value1',
            key2: 'value2',
        },
        myFunction = function (param1) {
            return param1;
        }


    // Funktion zur Ausgabe von VariablenName, Typ und Wert in der Console aufrufen
    window.tools.log('myNumber', myNumber);
    window.tools.log('myString', myString);
    window.tools.log('myBoolean', myBoolean);
    window.tools.log('myArray', myArray);
    window.tools.log('myObject', myObject);
    window.tools.log('myFunction', myFunction('Hallo'));




}
