/**
 * Variablen und Scopes erforschen
 * Karte Nr. 2
 *
 * @package Webapplication
 * @module Transfer (Javascript Grundlagen)
 * @author Christine Leonhard
 * @version v1.0.0
 * @since 2019-12-01
 */


!(function () {
    'use strict';
    //------------------------------------------

    //---------------------
    // DECLARATION 
    //---------------------
    let
        myNumber,
        myString,
        myBoolean,
        myArray,
        myObject,
        myFunction = function (param1) {
            return param1;
        };


    //---------------------
    // FUNKTIONS 
    //---------------------

    // Ausgabe von VariablenName, Typ und Wert in der Console
    function _log(name, variable) {

        let wert = "";

        try {
            // Sonderfall Array
            if (typeof (variable) === 'array') {
                console.log('Array');

                for (let i = 0; i < variable.length; i++) {
                    wert = wert + ', ' + variable[i];
                }
                wert = wert.substring(2
                    , wert.length);
            }

            // Sonderfall Object
            else if (typeof (variable) === 'object') {
                for (let key in variable) {
                    wert = wert + ', ' + variable[key];
                }
                wert = wert.substring(2, wert.length);
            }

            // alle anderen
            else wert = variable;

            // Ausgabe
            console.log(name + ' {' + typeof (variable) + '}: ' + wert);

        } catch (error) {
            console.log(error);
        }
    };

    function _main() {
        // publish module and a function
        window.global = {} || window.global;
        window.global.log = _log;

        // Variablen vorbesetzen
        myNumber = 42;
        myString = 'Lorem ipsum dolor sit.';
        myBoolean = false;
        myArray = [1, 2, 3, 4];
        myObject = {
            key1: 'value1',
            key2: 'value2',
        };


        // ausgeben der Variablendaten
        _log("myNumber", myNumber);
        _log("myString", myString);
        _log("myBoolean", myBoolean);
        _log("myArray", myArray);
        _log("myObject", myObject);
        _log("myFunction", myFunction('Hallo'));
    }

    //---------------------
    // CONTROL 
    //---------------------
    _main();

    //------------------------------------------
})()
