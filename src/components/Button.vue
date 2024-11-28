<template>
    <button :class="['harmony-button', size, variant]" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "HarmonyButton",
    props: {
        size: {
            type: String,
            default: "medium",
            validator: (value) => ["small", "medium", "large"].includes(value),
        },
        variant: {
            type: String,
            default: "primary",
            validator: (value) => ["primary", "secondary", "danger"].includes(value),
        },
    },
    methods: {
        handleClick() {
            this.$emit("click");
        },
    },
};
</script>

<style>
.harmony-button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.harmony-button.primary {
    background-color: #007bff;
    color: white;
}

.harmony-button.secondary {
    background-color: #6c757d;
    color: white;
}

.harmony-button.danger {
    background-color: #dc3545;
    color: white;
}

.harmony-button.small {
    font-size: 12px;
    padding: 4px 8px;
}

.harmony-button.large {
    font-size: 20px;
    padding: 12px 24px;
}
</style>
