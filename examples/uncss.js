var uncss = require('uncss');
uncss('https://goog.com.ua', function (error, clearCSS) {
    console.log(clearCSS);
});
