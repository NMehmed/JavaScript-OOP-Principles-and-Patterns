/*
* @Local Storage Manager
*/

var SoftUni = SoftUni || {};
SoftUni.Storage = SoftUni.Storage || {};

/*
   @Object constructor
*/
SoftUni.Storage.LocalStorage = function () {
    SoftUni.Storage.LocalStorage.base.constructor.apply(this, arguments);

    this.storage = window.localStorage;
}

extend(SoftUni.Storage.LocalStorage, SoftUni.Storage);


SoftUni.Storage.LocalStorage.prototype = {

    setContext: function (context) {
        this.context = context;
    },

    _setRecord: function (key, value) {
        try {
            this.storage.setItem(this.context + key, value);
        } catch (e) {
            return false;
        }

        return true;
    },

    _getRecord: function (key) {
        return this.storage.getItem(this.context + key);
    },

    _removeRecord: function (key) {
        try {
            this.storage.removeItem(this.context + key);
        } catch (e) {
            return false;
        }

        return true;
    },

    add: function (key, value) {
        if (typeof key === "undefined" || typeof value === "undefined") {
            throw "Key or Value are not defined";
        }

        return this._setRecord(key, value);
    },

    update: function (key, value) {
        return this.add(key, value);
    },

    get: function (key) {
        if (typeof key === "undefined") {
            throw "Key not defined";
        }

        return this._getRecord(key);
    },

    remove: function (key) {
        if (typeof key === "undefined") {
            throw "Key not defined";
        }

        return this._removeRecord(key);
    },

    addObj: function (key, jsonObj) {
        if (typeof key === "undefined" || typeof jsonObj === "undefined") {
            throw "Key or Value are not defined";
        }

        var objFromStorage = this._getRecord(key);

        try {
            if (objFromStorage == null || typeof objFromStorage === "undefined") {
                this._setRecord(key, JSON.stringify(jsonObj));
            } else {
                objFromStorage = JSON.parse(objFromStorage);

                for (var propKey in jsonObj) {
                    if (jsonObj[propKey]) {
                        objFromStorage[propKey] = jsonObj[propKey];
                    }
                }

                this._setRecord(key, JSON.stringify(objFromStorage));
            }
        } catch (err) {
            return false;
        }

        return true;
    },

    getObj: function (key) {
        if (typeof key === "undefined") {
            throw "Key not defined";
        }

        var objStringFromStorage = this._getRecord(key);
        var obj = JSON.parse(objStringFromStorage);

        return obj;
    },

    removeObj: function (key) {
        if (typeof key === "undefined") {
            throw "Key not defined";
        }

        return this._removeRecord(key);
    },

    updateObj: function (key, jsonObj) {
        return this.addObj(key, jsonObj);
    }
}