<template>
  <div class="main-container" :style="{ backgroundColor: currentColor }">
    
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
  name: "HomePage",
  data() {
    return {
      currentColor: "red",
    };
  },
  async mounted() {
    await this.listenToColorChange();
  },
  methods: {
    async listenToColorChange() {
      await FirebaseRealtimeDatabaseController.listenToColor((snapshot) => {
        // console.log(snapshot.val());
        const data = snapshot.val();

        if (snapshot.exists()) {
          if (data.color) {
            this.currentColor = data.color;
          }
        }
      });
    }
  },
}
</script>
