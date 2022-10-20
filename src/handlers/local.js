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

let _dayLocal = _getFormat(_dateObject.getDate());
let _monthLocal = _getFormat(_dateObject.getMonth() + 1);
let _yearLocal = _getFormat(_dateObject.getFullYear());

let _hoursLocal = _getFormat(_dateObject.getHours());
let _minutesLocal = _getFormat(_dateObject.getMinutes());
let _secondsLocal = _getFormat(_dateObject.getSeconds());

const local = {
    /**
     * To get local date
     * @returns Format: 00.00.0000
     */
    getDate: function() {
        try {
            return _dayLocal + "." + _monthLocal + "." + _yearLocal;
        } catch (error) {
            throw error;
        }
    },   
    /**
     * To get local time
     * @returns Format: 00:00:00
     */
    getTime: function() {
        try {
            return _hoursLocal + ":" + _minutesLocal + ":" + _secondsLocal;
        } catch (error) {
            throw error;
        }
    },
    /**
     * To get local date and time
     * @returns Format: 00.00.0000 00:00:00
     */
    getDateTime: function() {
        try {
            return _dayLocal + "." + _monthLocal + "." + _yearLocal + " " + _hoursLocal + ":" + _minutesLocal + ":" + _secondsLocal;
        } catch (error) {
            throw error;
        }
    }
}

exports = module.exports = local;