<template>
  <div class="Loading">
    <div class="Loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style lang="scss" scoped>
.Loading {
  $width: 500px;
  $height: 250px;
  position: absolute;
  top: calc(50% - $height / 2);
  left: calc(50% - $width / 2);
  width: $width;
  height: $height;

  background-color: rgba(122, 122, 122, 0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  .Loader {
    $width: 40px;
    $height: 40px;
    position: absolute;
    top: calc(50% - $height / 2);
    left: calc(50% - $width / 2);
    width: $width;
    height: $height;
    border: 4px solid #4F1CA3;
    border-top-color: white;
    border-radius: 50%;
    animation: rolling 1.5s infinite;

    @keyframes rolling {
      from {
        rotate: 0deg;
      }
      to {
        rotate: 359deg
      }
    }
  }
}
</style>