function _getFormat(value) {
    try {
        if (value < 10) {
            value = "0" + value;

            return value;
        } else {
            return value;
        }
    } catch (error) {
        throw error;
    }
}

let _dateObject = new Date();

let _dayUTC = _getFormat(_dateObject.getUTCDate());
let _monthUTC = _getFormat(_dateObject.getUTCMonth() + 1);
let _yearUTC = _getFormat(_dateObject.getUTCFullYear());

let _hoursUTC = _getFormat(_dateObject.getUTCHours());
let _minutesUTC = _getFormat(_dateObject.getUTCMinutes());
let _secondsUTC = _getFormat(_dateObject.getUTCSeconds());

const utc = {
    /**
     * To get global date
     * @returns Format: 00.00.0000
     */
    getDate: function() {
        try {
            return _dayUTC + "." + _monthUTC + "." + _yearUTC;
        } catch (error) {
            throw error;
        }
    },   
    /**
     * To get global time
     * @returns Format: 00:00:00
     */
    getTime: function() {
        try {
            return _hoursUTC + ":" + _minutesUTC + ":" + _secondsUTC;
        } catch (error) {
            throw error;
        }
    },
    /**
     * To get global date and time
     * @returns Format: 00.00.0000 00:00:00
     */
    getDateTime: function() {
        try {
            return _dayUTC + "." + _monthUTC + "." + _yearUTC + " " + _hoursUTC + ":" + _minutesUTC + ":" + _secondsUTC;
        } catch (error) {
            throw error;
        }
    }
}

exports = module.exports = utc;