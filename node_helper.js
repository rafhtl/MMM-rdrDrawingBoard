/* Magic Mirror
 *
 * Module: MMM-rdrDrawingBoard
 *
 * By rdr - MIT Licensed
 *
 */

const NodeHelper = require('node_helper');
const request = require('request');


module.exports = NodeHelper.create({

    start: function() {
        
    },

    

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET') {
            
        }
        
    }
});
