<script setup>

</script>

<template>
    <main>
        <nav>
            <RouterLink to="/">Login</RouterLink>
            <RouterLink to="/create-user">Create user v2</RouterLink>
            <RouterLink to="/users">List of users</RouterLink>
        </nav>
        <router-view></router-view>
    </main>
</template>

<style scoped>
nav{
    display : flex;
    gap : 30px
}
main{
    display : flex;
    flex-direction: column;
    gap : 50px
}
</style>
