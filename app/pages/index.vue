<script setup lang="ts">
import GitHubLogo from '~/assets/github_logo.svg'
import GoogleLogo from '~/assets/google_logo.svg'
import { useSupabase } from '~/composables/useSupabase'

const { hasUser, login, logout } = useSupabase()
</script>

<template>
  <div>
    <div class="title">
      <button @click="!hasUser ? login('github') : logout">
        <GitHubLogo />
      </button>
      <button @click="!hasUser ? login('google') : logout">
        <GoogleLogo />
      </button>
    </div>
  </div>
</template>

<style>
svg {
  width: 60px;
  height: 60px;
}
</style>
