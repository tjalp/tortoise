<template>
  <div>
    <h1>🗺️Map</h1>
    <h2 class="undertitle">you can view the current minecraft server map here</h2>
    <h2>
      to view the full-screen version of this map, please visit
      <a href="https://map.tjalp.net/" target="_blank"><SpicyButton text="map.tjalp.net" /></a>!
    </h2>
    <p class="warning">⚠️please note that this may be offline for some time while there is no server</p>
    <iframe src="https://map.tjalp.net/" height="600px" width="100%" style="border:none" />
  </div>
</template>

<script>
import { setTitle } from '~/middleware/app';

export default {
  mounted() {
    setTitle('map');
  }
}
</script>