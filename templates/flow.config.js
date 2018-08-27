const VueHook = require("flow-vue-hook");

module.exports = {
    entry: {
        // entry
        app: "./src/app.js"
    },

    dev: {
        port: 8080,
    },

    build: {
        assetsSubDirectory: "static",
        publicPath: "" // should be your cdn path
    },

    // html config
    html: {
        template: {
            filename: "index.html",
            path: "./src/index.html"
        }
    },

    plugins: {
        npm: true
    },

    // vue/react/multiple/spa
    mode: <%if (prerender) {%>"vue-prerender"<% } else {%>"vue"<%}%>,

    hooks: [new VueHook()]
};
