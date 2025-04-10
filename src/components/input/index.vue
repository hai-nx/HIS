<template>
    <div class="v-input">
        <div v-if="$slots.prefix" class="v-input-prefix">
            <slot name="prefix"></slot>
        </div>
        <input class="v-input-inner" v-model="model" :id="id" :name="name" :type="type" :placeholder="placeholder"
            :maxlength="maxlength" :readonly="readonly" :disabled="disabled" @blur="onBlur" @change="onChange">
        <div v-if="$slots.suffix" class="v-input-suffix">
            <slot name="suffix"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineModel, defineEmits, defineProps, PropType } from "vue"

    const emit = defineEmits<{
        (e: "blur", p: any): void,
        (e: "change", p: any): void
    }>()

    const model = defineModel()

    const props = defineProps({
        type: {
            type: String as PropType<"text" | "password" | "date">,
            default: "text"
        },
        id: { type: String },
        name: { type: String },
        maxlength: { type: Number },
        placeholder: { type: String },
        readonly: { type: Boolean },
        disabled: { type: Boolean }
    })

    function onBlur(p: any) {
        emit("blur", p)
    }

    function onChange(p: any) {
        emit("change", p)
    }
</script>