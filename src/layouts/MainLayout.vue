<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Feed Brie!
        </q-toolbar-title>

        <div>Built with Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Links</q-item-label>
        <Links v-for="link in links" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Links from "components/Links";

export default {
  name: "MainLayout",

  components: {
    Links
  },

  data() {
    return {
      leftDrawerOpen: false,
      links: [
        {
          title: "Twitch",
          caption: "Watch Bobber's stream",
          icon: "ion-logo-twitch",
          link: "https://twitch.tv/bobberwcc"
        },
        {
          title: "Discord",
          caption: "Come chat!",
          icon: "chat",
          link: "https://discord.gg/bobberwcc"
        }
      ]
    };
  }
};
</script>
