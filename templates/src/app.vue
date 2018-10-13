<template>
    <div id="app">
        <h1>Hello world</h1>
        <img src='@/assets/img/dog.png'>

        <h4>Users:</h4>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                <div>
                    id: , first_name: , phone:
                </div>
            </li>
        </ul>

        <% if (router) {%>
        <router-view/>
        <% } %>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        };
    },

    async mounted() {
        this.users = [
            {
                id: 1,
                first_name: "fedor",
                last_name: "jia",
                phone: "13472416292"
            },
            {
                id: 2,
                first_name: "raymond",
                last_name: "li",
                phone: "13842418144"
            }
        ];
    }
};
</script>

<style>
h1 {
    color: orangered;
}
</style>
