<template>
    <i class="v-icon" :class="icon"></i>
</template>

<script setup lang="ts">
    import { defineProps, PropType } from "vue"

    const props = defineProps({
        icon: { type: String },
        size: {
            type: String as PropType<"small" | "default" | "large" | "xlarge">,
            default: "default"
        }
    })
</script>