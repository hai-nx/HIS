<script setup lang="ts">
    import { defineEmits, defineProps, PropType } from "vue"

    const emit = defineEmits<{
        (e: "click", p: any): void
    }>()
    const props = defineProps({
        as: {
            type: String as PropType<"button" | "reset" | "submit">,
            default: "button"
        },
        type: {
            type: String as PropType<"default" | "primary" | "info" | "text" | "link">,
            default: "default"
        },
        size: {
            type: String as PropType<"small" | "large" | "default">,
            default: "default"
        },
        disabled: { type: Boolean }
    })

    function onClick(p: any) {
        emit("click", p)
    }
</script>

<template>
    <button :type="as" :disabled="disabled" @click="onClick">
        <slot></slot>
    </button>
</template>

<style>
    .ant-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        position: relative;
        padding: 0 12px;
    }

    .ant-button:hover {
        background-color: #00446D;
    }
</style>