<template>
    <div class="flex items-center justify-center">
        <Icon :icon="icon" class="w-6 h-6" />
    </div>
</template>

<script setup>
    import { Icon } from '@iconify/vue'

    const props = defineProps({
        icon: String,
    })
</script>

<style lang="scss" scoped>

</style>