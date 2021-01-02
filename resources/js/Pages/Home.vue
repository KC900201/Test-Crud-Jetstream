<template>
    <div style="margin: 0 auto; max-width:850px">
        <!--Hello Message-->
        <Navbar />
        <div class="level">
            <p>Hello! Welcome to your first Laravel Jetstream webpage!</p>
        </div>
        <!--Main Content-->
    </div>
</template>
<script>
    import Navbar from './Shared/Navbar';

    export default {
        mounted() {
            console.log("Component mounted.");
        },
        data() {
            return {
                markers: []
            }
        },
        components: {
            Navbar
        }
    };
</script>
