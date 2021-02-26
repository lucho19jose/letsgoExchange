<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
    <div>
      <router-link to="/aboutdev">Go about dev</router-link>
    </div>
  </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable'
import api from '@/api.js'/* llamar a la api */

export default {
  name:"Home",
  components: { PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: []
    }
  },

  created() {
    this.isLoading = true
    api.getAssets().then(assets => (this.assets = assets))/* asignacion a assets con la api */
      .finally(() => this.isLoading = false)
  }
}
</script>