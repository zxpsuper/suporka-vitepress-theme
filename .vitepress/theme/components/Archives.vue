<template>
  <div v-for="yearList in data">
      <div class="year">
          {{ yearList[0].frontMatter.date.split('-')[0] }}
      </div>
      <a :href="withBase(article.regularPath)" v-for="(article, index) in yearList" :key="index" class="posts">
          <div class="post-container">
              <div class="post-dot"></div>
              {{ article.frontMatter.title }}
          </div>
          <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
      </a>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed, onMounted } from 'vue'
import { useYearSort } from '../functions'

const { theme } = useData()
const data = computed(() => {
  const dd = useYearSort(theme.value.posts)
  console.log('dd', dd)
  return dd
})
onMounted(() => {
  console.log('data', data)
})
</script>

<style scoped>
.year {
  padding: 14px 0 8px 0;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--date-font-family),serif;
}
</style>