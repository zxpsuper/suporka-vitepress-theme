<script lang="ts" setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import { useData } from 'vitepress'
const giscus = ref()
const { theme, isDark } = useData()
onMounted(() => {
    nextTick(() => {
        let { repo, repoId, category, categoryId, mapping = 'pathname', themes, themesDark, themesLight, lang } = theme.value.comment
        if (repo) {
            let utterances = document.createElement('script')
            utterances.async = true
            utterances.setAttribute('src', 'https://giscus.app/client.js')
            utterances.setAttribute('data-repo', repo)
            utterances.setAttribute('data-repo-id', repoId)
            utterances.setAttribute('data-category', category)
            utterances.setAttribute('data-category-id', categoryId)
            utterances.setAttribute('data-mapping', mapping)
            utterances.setAttribute('data-strict', '0')
            utterances.setAttribute('data-reactions-enabled', '1')
            utterances.setAttribute('data-lang', lang)
            utterances.setAttribute('data-theme', themes ? themes : isDark.value ? themesDark : themesLight)
            utterances.setAttribute('crossorigin', 'anonymous')
            giscus.value.appendChild(utterances)
        }
        //hack method to change utterances theme when change site theme
        watch(isDark, (newVal, oldVal) => {
            if (newVal !== oldVal) location.replace(location.href)
        })
    })
})
</script>

<template>
    <div class="giscus" ref="giscus"></div>
</template>

<style>
/*global  style*/
.utterances {
    max-width: inherit !important;
}
</style>