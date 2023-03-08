<template>
  <q-page class="bg-yellow-5 column">
    <q-list separator bordered>
      <q-item
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-blue-1': task.done }"
        v-for="task in tasks"
        :key="task.title"
        tag="label"
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            class="no-pointer-events"
            v-model="task.done"
            val="teal"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side> x </q-item-section>
      </q-item>
    </q-list>
    <div class="flex flex-center">
      <img
        alt="Cheburashka"
        src="../assets/img/stich.png"
        style="width: 200px; height: 200px"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          title: "Cheburashka",
          done: true,
        },
        {
          title: "Cheburashka2",
          done: false,
        },
        {
          title: "Cheburashka3",
          done: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: pink;
  }
}
</style>
