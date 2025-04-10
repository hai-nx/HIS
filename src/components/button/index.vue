<template>
    <button class="btn" :class="cls" :type="htmlType" :title="title" :disabled="disabled || loading" @click="onClick">
        <slot v-if="loading" name="loadingicon">
            <span class="btn-loadingicon"></span>
        </slot>
        <slot v-else name="icon">
            <i v-if="icon" class="btn-icon" :class="icon"></i>
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
            "btn-primary": props.type === "primary",
            "btn-info": props.type === "info",
            "btn-success": props.type === "success",
            "btn-warning": props.type === "warning",
            "btn-danger": props.type === "danger",
            "btn-text": props.type === "text"
        }
    })

    function onClick(p: any) {
        emit("click", p)
    }
</script>