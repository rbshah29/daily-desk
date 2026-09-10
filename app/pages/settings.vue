<script setup lang="ts">
useHead({ title: 'Settings · Daily Desk' })

const { preferences } = useDeskPreferences()
</script>

<template>
  <div class="page settings-page">
    <header class="page-heading">
      <div><span class="eyebrow">Daily Desk</span><h2>Settings</h2><p>Make Daily Desk work the way you prefer.</p></div>
    </header>

    <CommonDeskCard>
      <div class="setting-row"><div><strong>Appearance</strong><p>Choose how Daily Desk looks.</p></div><select v-model="preferences.theme" class="desk-select"><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select></div>
    </CommonDeskCard>

    <CommonDeskCard>
      <div class="setting-row"><div><strong>Clock format</strong><p>Choose your preferred time format.</p></div><select v-model="preferences.clockFormat" class="desk-select"><option value="12">12-hour</option><option value="24">24-hour</option></select></div>
    </CommonDeskCard>

    <CommonDeskCard>
      <div class="setting-row"><div><strong>Temperature</strong><p>Choose your weather unit.</p></div><select v-model="preferences.temperatureUnit" class="desk-select"><option value="celsius">Celsius</option><option value="fahrenheit">Fahrenheit</option></select></div>
    </CommonDeskCard>

    <CommonDeskCard>
      <div class="setting-row"><div><strong>Daily Desk data</strong><p>Export, restore or clear your local data.</p></div><button class="secondary-button">Manage data</button></div>
    </CommonDeskCard>
  </div>
</template>
