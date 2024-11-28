<template>
    <div class="harmony-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "HarmonyCard",
};
</script>

<style>
.harmony-card {
    color: black;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: white;
}
</style>
