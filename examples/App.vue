<template>
  <div id="app">
    <ht-kind-editor edit-id="editor" :config="config"></ht-kind-editor>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      config: {
        uploadJson: 'http://192.168.0.121/service_api/api_v2/wang.php?ac=upload',
        fileManagerJson: 'http://192.168.0.121/service_api/api_v2/wang.php?ac=image',
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
