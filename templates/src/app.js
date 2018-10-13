<% if (!webpack) {%>
import "babel-polyfill";
<% } %>
import Vue from "vue";
import App from "./app.vue";

<% if (router) {%>
import router from "./router"
<% } %>


<%if (prerender) {%>
export default {
    el: "#app",
    data() {
        const app = new Vue({
            <% if (router) {%>
            router,
            <% } %>
            render: h => h(App)
        });
        return {
            app<% if(router) {%>,
            router
            <% } %>
        }
    }
}
<% } else {%>

const app = new Vue({
    el: "#app",
    <% if (router) {%>
    router,
    <% } %>
    render: h => h(App)
});

export default {
    app,
    <% if (router) {%>
    router
    <% } %>
};
<%}%>