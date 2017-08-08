(function (window) {
    'use strict';

    function define_library() {
        var Library = {};
        var name = 'Timmy';
        Library.greet = function () {
            alert('This is ' + name + ' library.');
        }
        return Library;
    }


    if (typeof (Library) === 'undefined') {
        window.Library = define_library();
    } else {
        console.log('Library is already defined.');
    }
})(window);