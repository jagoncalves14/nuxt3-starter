<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
</script>

<template>
  <header class="container flex items-center w-full h-16 py-8">
    <a href="/" class="flex items-center hover:opacity-80">
      <img src="/logo-dark.svg" class="h-[24px] mr-2" />
    </a>

    <nav class="ml-auto mr-0 text-sm font-medium">
      <NuxtLink to="/blog"
        class="px-2 py-1 ml-auto mr-1 text-sm font-medium rounded hover:bg-charcoal-600 hover:text-white">
        Demo Blog
      </NuxtLink>

      <NuxtLink to="/notes"
        class="px-2 py-1 ml-auto text-sm font-medium rounded hover:bg-charcoal-600 hover:text-white">
        Profile
      </NuxtLink>

      <button v-if="user" @click="client.auth.signOut()"
        class="px-2 py-1 text-sm font-medium rounded hover:bg-charcoal-600 underline">
        Log out
      </button>
    </nav>
  </header>
</template>
