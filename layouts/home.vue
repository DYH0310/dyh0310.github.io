<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isPage = computed(() => route.path.startsWith('/page'))
</script>

<template>
  <YunLayoutWrapper :no-margin="!isPage">
    <div class="w-full flex flex-col items-center pb-4">
      <template v-if="!isPage">
        <div class="hero-stage w-full relative">
          <div id="yun-banner-placeholder" class="w-full h-[var(--banner-container-height,100vh)]" />
          <div class="absolute top-0 left-5 right-5 bottom-0 flex-center">
            <YunPrologueSquare class="z-1" />
          </div>
          <YunPrologue class="absolute left-0 top-0 right-0 bottom-0" />
          <YunGoDown />
        </div>
      </template>

      <slot name="board" />

      <slot>
        <RouterView />
      </slot>
    </div>
  </YunLayoutWrapper>
</template>

<style scoped lang="scss">
.hero-stage {
  min-height: 100vh;
}
</style>
