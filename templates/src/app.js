<% if (!meta.webpack) {%>
import "babel-polyfill";
<% } %>
import Vue from "vue";
import App from "./app.vue";

<% if (meta.router) {%>
import router from "./router"
<% } %>


<%if (meta.prerender) {%>
export default {
    el: "#app",
    data() {
        const app = new Vue({
            <% if (meta.router) {%>
            router,
            <% } %>
            render: h => h(App)
        });
        return {
            app<% if(meta.router) {%>,
            router
            <% } %>
        }
    }
}
<% } else {%>

const app = new Vue({
    el: "#app",
    <% if (meta.router) {%>
    router,
    <% } %>
    render: h => h(App)
});

export default {
    app,
    <% if (meta.router) {%>
    router
    <% } %>
};
<%}%>