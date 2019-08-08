<template>
  <div>
    <div>{{ error.statusCode }}</div>
    <div>{{ error.message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
