import { LocalStorage, extend } from "quasar";

import { setDarkModeEnabled } from "./mutations";

export const SITE_SETTINGS_STORAGE_KEY = "feedbrie-website_site-settings";
export const SITE_SETTINGS_STORAGE_API_VERSION = 1;
export const SITE_SETTINGS_STORAGE_API_VERSION_KEY = "apiVersion";

const SITE_SETTINGS_DEFAULTS = {
  apiVersion: SITE_SETTINGS_STORAGE_API_VERSION,
  settings: {
    enableDarkMode: true
  }
};

function loadSiteSettingsFromLocalStorage() {
  if (LocalStorage.has(SITE_SETTINGS_STORAGE_KEY)) {
    return LocalStorage.getItem(SITE_SETTINGS_STORAGE_KEY);
  }

  return null;
}

function initializeSiteSettings() {
  const localSettings = loadSiteSettingsFromLocalStorage();

  if (localSettings == null) {
    return SITE_SETTINGS_DEFAULTS; // If non set, use defaults.
  } else if (
    localSettings[SITE_SETTINGS_STORAGE_API_VERSION_KEY] ==
    SITE_SETTINGS_STORAGE_API_VERSION
  ) {
    return localSettings; // If is set, return local settings.
  }

  // If all else fails, update API version...
  localSettings[
    SITE_SETTINGS_STORAGE_API_VERSION_KEY
  ] = SITE_SETTINGS_STORAGE_API_VERSION;

  // ...and add new default values.
  return extend(true, SITE_SETTINGS_DEFAULTS, localSettings);
}

export default function() {
  const siteSettings = initializeSiteSettings();

  setDarkModeEnabled(siteSettings, siteSettings.settings.enableDarkMode);

  return siteSettings;
}
