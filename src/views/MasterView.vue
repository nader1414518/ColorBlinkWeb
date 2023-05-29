<template>
    <div class="main-container" :style="{ backgroundColor: currentColor }" @click="onColorChange">

    </div>
</template>

<style scoped>
.main-container {
    width: 100vw;
    height: 100vh;
}
</style>

<script>
import FirebaseRealtimeDatabaseController from '@/controllers/FirebaseRealtimeDatabaseController';

export default {
    name: "MasterView",
    data() {
        return {
            currentColor: "red",
            colors: [
                "red",
                "orange",
                "green",
            ],
        };
    },
    async mounted() {
        // await this.changeColor();
    },
    methods: {
        // async changeColor() {
        //     await FirebaseRealtimeDatabaseController.changeColor(this.currentColor);
        // },
        async onColorChange() {
            let index = this.colors.indexOf(this.currentColor);
            index++;
            if (index >= this.colors.length) {
                index = 0;
            }

            this.currentColor = this.colors[index];

            await FirebaseRealtimeDatabaseController.changeColor(this.currentColor);
        }
    },
}
</script>