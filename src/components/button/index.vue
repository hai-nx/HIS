<template>
    <button class="v-button" :class="cls" :type="htmlType" :title="title" :disabled="disabled || loading"
        @click="onClick">
        <slot v-if="loading" name="loadingicon">
            <span class="v-button-loadingicon"></span>
        </slot>
        <slot v-else name="icon">
            <i v-if="icon" class="v-button-icon" :class="icon"></i>
        </slot>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    import { computed, defineEmits, defineProps, PropType } from "vue"

    const emit = defineEmits<{
        (e: "click", p: any): void
    }>()

    const props = defineProps({
        htmlType: {
            type: String as PropType<"button" | "reset" | "submit">,
            default: "button"
        },
        type: {
            type: String as PropType<"default" | "primary" | "info" | "success" | "warning" | "danger" | "text">,
            default: "default"
        },
        icon: { type: String },
        size: {
            type: String as PropType<"small" | "default" | "large">,
            default: "default"
        },
        loading: { type: Boolean },
        disabled: { type: Boolean },
        title: { type: String }
    })

    const cls = computed(() => {
        return {
            "v-button-primary": props.type === "primary",
            "v-button-info": props.type === "info",
            "v-button-success": props.type === "success",
            "v-button-warning": props.type === "warning",
            "v-button-danger": props.type === "danger",
            "v-button-text": props.type === "text"
        }
    })

    function onClick(p: any) {
        emit("click", p)
    }
</script>

<style>
    :root {
        --v-button-background-color: red;
        --v-button-gap: 0.25rem;
    }

    .v-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        background-color: var(--v-button-background-color);
        font-family: inherit;
        font-size: 1rem;
        outline-color: transparent;
        gap: var(--v-button-gap);
    }
</style>