<template>
  <q-page class="bg-yellow-5 column">
    <div class="row q-pa-sm dg-primary">
      <q-input
        @keyup.enter="addTask"
        class="q-pa-lg col"
        filled
        square
        bg-color="white"
        v-model="newTask"
        placeholder="Write"
        :dense="dense"
      >
        <template v-slot:append>
          <q-btn
            :disabled="!newTask"
            @click="addTask"
            round
            dense
            flat
            icon="add"
          />
        </template>
      </q-input>
    </div>
    <q-list separator bordered>
      <q-item
        clickable
        :class="{ 'done bg-blue-1': task.done }"
        v-for="(task, index) in tasks"
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
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            dense
            class="glossy"
            round
            color="pink-3"
            icon="delete_forever"
          />
        </q-item-section>
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
      newTask: "",
      tasks: [
        {
          title: "poke",
          done: true,
        },
        {
          title: "You can poke at me too",
          done: false,
        },
        {
          title: "Okay, okay poke",
          done: false,
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.$q
        .dialog({
          dark: true,
          title: "Delete",
          message: "Are you sure you want to delete?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify({
            message: "Okay, well delete it.",
            color: "pink-3",
            icon: "directions_run",
          });
          this.$q.notify({
            message: "Took a picture.",
            color: "red",
            icon: "linked_camera",
          });
        });
    },
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          done: false,
        });
        this.newTask = "";
      }
    },
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
