<template>
  <q-layout view="hhr LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      <div  class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h5">Cheburashka</div>
        <div class="text-subtitle">{{ todaysDate }}</div>
      </div>
      <q-img class="header-img absolute-top" src="../assets/img/heart.png" />
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="height: calc(100% - 167px); border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> Todo </q-item-section>
          </q-item>

          <q-item to="/help" exact active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="live_help" />
            </q-item-section>

            <q-item-section> Help </q-item-section>
          </q-item>

          <q-item to="/about" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fingerprint" />
            </q-item-section>

            <q-item-section> About us </q-item-section>
          </q-item>

          <q-item to="/contacts" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="contacts" />
            </q-item-section>

            <q-item-section> Contacts </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <!-- drawer content -->
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      elevated
      :width="250"
      :breakpoint="900"
    >
      <q-img class="absolute-top image" style="height: 167px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="100px" class="q-mb-sm">
            <img class="imgAvatar" src="../assets/img/Merida.avif" />
          </q-avatar>
          <div class="text-weight-bold">Tvopi</div>
          <div>payko-v@bk.ru</div>
        </div>
      </q-img>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Ninja</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { date } from "quasar";


export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd D MMMM H:m");
    },
  },
};
</script>

<style lang="scss">
.header-img {
  height: 100%;
  z-index: -1;
  opacity: 0.5;

}

.image {
  background-color: $primary;
}

.imgAvatar{
  object-fit: cover;
}

</style>
