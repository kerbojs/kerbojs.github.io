<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'

const props = withDefaults(
  defineProps<{
    badge?: boolean
    size?: number
    variant?: 'full' | 'name' | 'shuttle' | 'slogan'
  }>(),
  {
    badge: false,
    variant: 'full',
  },
)

const imgPath = () =>
  new URL(
    `../../../assets/logo/logo_${props.badge ? 'badge' : 'default'}_${props.variant}.svg`,
    import.meta.url,
  ).href
</script>

<template>
  <InlineSvg :src="imgPath()" :height="size" />
</template>

<style scoped>
svg {
  display: block;
}
</style>
