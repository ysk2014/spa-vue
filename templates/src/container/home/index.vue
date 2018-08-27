<template>
    <div>
        {{name}} page
    </div>
</template>

<script>
    export default {
        <% if (prerender) {%>
        asyncData() {
            return Promise.resolve({
                name: "async home"
            })
        },
        <%}%>
        data() {
            return {
                name: "home"
            }
        }
    }
</script>

<style scoped>

</style>