<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea></textarea>
  </div>
</template>

<script>
export default {
  name: 'textareaComp',
  data () {
    return {
      error: '入力は必須です'
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>


