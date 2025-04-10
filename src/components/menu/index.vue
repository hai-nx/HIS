<template>
    <ul class="v-menu">
        <li></li>
    </ul>
</template>

<script setup lang="ts">
    import { defineEmits, defineProps, PropType } from "vue"
    import { MenuItem } from "../menuitem"

    const emit = defineEmits<{
        (e: "click", p: any): void
    }>()

    const props = defineProps({
        items: {
            type: Array as PropType<MenuItem[]>
        }
    })

    function onClick(p: any) {
        emit("click", p)
    }
</script>