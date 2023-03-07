<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'

const props = withDefaults(
  defineProps<{
    size?: number
    variant?: 'default' | 'full' | 'ship' | 'text'
  }>(),
  {
    variant: 'default',
  },
)

const imgPath = () => new URL(`../../../assets/img/logo_${props.variant}.svg`, import.meta.url).href
</script>

<template>
  <InlineSvg :src="imgPath()" :height="size" />
</template>

<style scoped>
svg {
  display: block;
}
</style>
