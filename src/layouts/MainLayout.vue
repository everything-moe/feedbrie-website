<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Feed Brie!
        </q-toolbar-title>

        <div>
          <q-item>
            <q-item-section>
              <q-toggle
                v-model="enableDarkMode"
                checked-icon="nights_stay"
                unchecked-icon="wb_sunny"
              />
            </q-item-section>
          </q-item>
        </div>
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
  name: "MainLayout",
  computed: {
    enableDarkMode: {
      set(enabled) {
        this.$store.commit("siteSettings/setDarkModeEnabled", enabled);
      },
      get() {
        return this.$store.getters["siteSettings/settings"].enableDarkMode;
      }
    }
  }
};
</script>

<style lang="sass">
.body--light
  .navigation-drawer
    background: radial-gradient(circle at bottom right, rgba($secondary, 0.1) 0, rgba($secondary, 0.05) 40%, $blue-grey-1 80%)

    &--active-navigation-group
      &--header
        background: scale-color($primary, $lightness: 85%)

    &--dot
      background-color: $secondary

    &--footer
      background-color: white
      color: $primary

    &--search-toolbar
      background-color: $accent

  .site
    &--navigation
      &--header
        background: linear-gradient(135deg, $secondary 40%, scale-color($secondary, $lightness: -20%) 100%)

      &--footer
        background: linear-gradient(135deg, $accent 40%, scale-color($accent, $lightness: -15%) 100%)

.body--dark
  .navigation-drawer
    background: radial-gradient(circle at top right, scale-color($dark, $lightness: 10%) 0, scale-color($dark, $lightness: 5%) 40%, $dark 80%)

    &--active-navigation-group
      &--header
        background: rgba(255, 255, 255, 0.1)

    &--dot
      background-color: $secondary

    &--footer
      background-color: scale-color($dark, $lightness: 15%, $saturation: -42%)

    &--search-toolbar
      background-color: scale-color($dark, $lightness: 15%, $saturation: -42%)
</style>
