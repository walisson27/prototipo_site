<template>
  <Page>
    <router-view />
  </Page>
</template>

<script>
import Page from "@/shared/components/Page/Page.vue";

export default {
  components: { Page },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
</style>
