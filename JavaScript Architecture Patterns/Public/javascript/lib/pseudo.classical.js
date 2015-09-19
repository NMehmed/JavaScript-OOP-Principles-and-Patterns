/*
*
* Sample pseudo classical OOP implementation
*
*/

function inherit(proto) {
    function F() { }
    F.prototype = proto
    return new F
}

function extend(Class, Base) {
    Class.prototype = inherit(Base.prototype)
    Class.prototype.constructor = Class
    Class.base = Base.prototype
}