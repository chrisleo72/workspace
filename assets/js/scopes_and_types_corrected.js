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
    // FUNCTIONS 
    //---------------------
    /**
     * readout of a variables name, type and value via console.log()
     * @param {string} name 
     * @param {*} variable 
     */
    function _log(name, variable) {

        let value = '';

        try {
            // ! special case array
            if (Array.isArray(variable)) {
                console.log('Array');

                for (let i = 0; i < variable.length; i++) {
                    value = value + ', ' + variable[i];
                }
                value = value.substring(2, value.length);
            }

            // ! special case object
            else if (typeof (variable) === 'object') {
                for (let key in variable) {
                    value = value + ', ' + variable[key];
                }
                value = value.substring(2, value.length);
            }

            // ! other types
            else value = variable;

            // readout
            console.log(name + ' {' + typeof (variable) + '}: ' + value);

        } catch (error) {
            console.log(error);
        }
    };

    /**
     * The main call
     */
    function _main() {
        // publish module and a function
        window.tools = {} || window.tools;
        window.tools.log = _log;

        // Initialize variables
        myNumber = 42;
        myString = 'Lorem ipsum dolor sit.';
        myBoolean = false;
        myArray = [1, 2, 3, 4];
        myObject = {
            key1: 'value1',
            key2: 'value2',
        };

        // readout of the variable data
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
    window.onload = function () {
        _main();
    };

    //------------------------------------------
})()