<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
  import { ref } from 'vue'

  const dialog = ref(false)
</script>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
