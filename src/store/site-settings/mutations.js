import { Dark, LocalStorage } from "quasar";

import { SITE_SETTINGS_STORAGE_KEY } from "./state";

export function saveSiteSettingsToLocalStorage(state) {
  LocalStorage.set(SITE_SETTINGS_STORAGE_KEY, state);
}

export function setDarkModeEnabled(state, enabled) {
  state.settings.enableDarkMode = enabled;
  Dark.set(enabled);

  saveSiteSettingsToLocalStorage(state);
}
