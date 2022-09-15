<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
</script>

<template>
  <header class="container flex items-center w-full h-16 py-8">
    <a href="/" class="flex items-center hover:opacity-80">
      <img src="/logo-dark.svg" class="h-[24px] mr-2" />
      <span class="text-lg font-extrabold text-white"> Learn</span>
      <span class="mr-2 text-lg font-extrabold text-green">Vue</span>
    </a>
    <nav class="ml-4 text-sm font-medium">
      <NuxtLink
        to="/blog"
        class="px-2 py-1 ml-auto mr-1 text-sm font-medium rounded hover:bg-charcoal-600 hover:text-white"
        >Demo Blog</NuxtLink
      >
    </nav>
    <NuxtLink
      to="https://learnvue.co"
      target="_blank"
      class="px-2 py-1 ml-auto text-sm font-medium rounded hover:bg-charcoal-600 hover:text-white"
      >Main Site</NuxtLink
    >
    <button
      v-if="user"
      @click="client.auth.signOut()"
      class="px-2 py-1 text-sm font-medium rounded hover:bg-charcoal-600"
    >
      Log out
    </button>
  </header>
</template>
