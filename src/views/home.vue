<template>
    <div id="app" align="center">
        <img src="../assets/images/logo.svg" alt="logo" class="logo">
    </div>
</template>
<script>
    export default {
        // name:'app',
        data(){
            return {
                msg: 'hello madge'
            }
        },
        mounted() {
            setTimeout(() => {
                this.$router.push({path:'/index'})
            }, 3000);
        }
        
    }
</script>
