<script setup lang="ts">
    import { defineEmits, defineModel, defineProps, PropType } from "vue"

    const model = defineModel()
    const props = defineProps({
        id: { type: String },
        name: { type: String },
        type: {
            type: String as PropType<"text" | "password">,
            default: "text"
        }
    })
</script>

<template>
    <template v-if="$slots.prefix || $slots.suffix">
        <div class="ant-input-affix-wrapper">
            <div class="ant-input-preffix">
                <slot name="prefix"></slot>
            </div>
            <input class="ant-input-inner" v-model="model" :type="type" :id="id" :name="name">
            <div class="ant-input-suffix">
                <slot name="suffix"></slot>
            </div>
        </div>
    </template>
    <template v-else>
        <input class="ant-input" v-model="model" :type="type" :id="id" :name="name">
    </template>
</template>