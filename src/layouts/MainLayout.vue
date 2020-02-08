<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Feed Brie!
        </q-toolbar-title>

        <div>Built with Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar>
        <q-btn
          type="a"
          icon="ion-logo-twitch"
          href="https://www.twitch.tv/bobberwcc"
          target="_blank"
        >
          <q-tooltip>twitch.tv/BobberWCC</q-tooltip>
        </q-btn>
        <q-btn
          type="a"
          icon="img:statics/icons/discordapp.svg"
          href="https://discord.gg/bobberwcc"
          target="_blank"
        >
          <q-tooltip class="text-h7">Join the discord!</q-tooltip>
        </q-btn>
        <q-btn
          type="a"
          icon="ion-logo-github"
          href="https://github.com/everything-moe/feedbrie-website"
          target="_blank"
        >
          <q-tooltip class="text-h7">View on Github</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>
