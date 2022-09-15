<script setup lang="ts">
useHead({
  title: 'Hello World',
})
</script>

<template>
  <main>
    <h1 class="text-3xl font-black text-white">Hi 👋</h1>
    <p class="mt-4">Welcome to the Homepage.</p>
    <p class="mt-4">
      I'm going to play around with Nuxt here. This app uses Supabase for Authentication Nuxt's Content Module.
    </p>
    <div class="flex gap-4 mt-8">
      <NuxtLink to="/login" class="px-4 py-2 rounded bg-charcoal-600 hover:bg-charcoal-500">
        Check your profile
      </NuxtLink>
    </div>
  </main>
</template>
