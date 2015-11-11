module.exports = {
    book: {
        assets: "./book",
        js: [
            "http://cdn.staticfile.org/jquery/2.1.1-rc2/jquery.min.js",
            "http://cdn.staticfile.org/underscore.js/1.7.0/underscore-min.js",
            "http://cdn.staticfile.org/js-sequence-diagrams/1.0.4/sequence-diagram-min.js",
            "plugin.js"
        ],
        css: [
          "styles.css"
        ],
        html: {
            "head:end": function() {
                // Required to including this way because raphael is non-AMD compliant
                return "<script src='//cdn.staticfile.org/raphael/2.1.2/raphael-min.js'></script>";
            }
        }
    }
};
