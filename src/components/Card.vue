<script setup lang="ts">
defineProps({
    description: {
        type: String,
        required: true,
        default: 'Patient Description'
    }    
})
</script>

<template>
    <div class="bg-green-500">
        <h1>Patient Card</h1>
        <div>
            {{ description }}
        </div>
    </div>
</template>
