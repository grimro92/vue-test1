<template>
  <v-app>

    <v-app-bar app height="100" color="#102E5D">
      <v-toolbar-title>
        <v-img class="nav-logo" :src="logoJaJpg" cover position="center"></v-img>
      </v-toolbar-title>
      <div class="d-none d-md-flex">
        <v-btn class="font-style" to="/about">自己紹介</v-btn>
        <v-btn class="font-style" to="/work">仕事</v-btn> <v-btn class="font-style" to="/hobby">趣味</v-btn> <v-btn
          class="font-style" to="/overseas">海外について</v-btn> <v-btn class="font-style" to="/likes">好きなこと</v-btn> <v-btn
          class="font-style" to="/links">各種リンク</v-btn> <v-btn class="font-style" to="/contact">連絡</v-btn>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary right>
      <v-list>
        <v-list-item @click="drawer = false" to="/about">自己紹介</v-list-item>
        <v-list-item @click="drawer = false" to="/work">仕事</v-list-item> <v-list-item @click="drawer = false"
          to="/hobby">趣味</v-list-item> <v-list-item @click="drawer = false" to="/overseas">海外について</v-list-item>
        <v-list-item @click="drawer = false" to="/likes">好きなこと</v-list-item> <v-list-item @click="drawer = false"
          to="/links">各種リンク</v-list-item> <v-list-item @click="drawer = false" to="/contact">連絡</v-list-item> </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="text-center d-flex flex-column">
      <v-btn to="/"> ^ トップに戻る </v-btn>
      <div class="pad-12"></div>
      <div class="pt-0">2025 Takato Aihara / 無断転載を禁じます</div>
    </v-footer>

  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
// HomeView の直接インポートは不要になります
// import HomeView from "@/views/HomeView.vue";
import logoJaJpg from "@/assets/jpg/logo_ja.png";

const drawer = ref(false);
</script>

<style scoped>
.nav-logo {
  height: 100px;
  width: 200px;
}

.font-style {
  font-size: 19px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.pad-12 {
  padding: 12px;
}
</style>