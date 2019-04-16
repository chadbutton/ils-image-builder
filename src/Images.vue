<template>
  <v-app id="sandbox" :dark="dark">
    <v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>
        <v-toolbar-title>Image Builder</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
         <v-switch v-model="dark" primary label="Dark"></v-switch>
        <v-layout align-center justify-center>
          <v-flex xs10>
           HELLO
          </v-flex>
        </v-layout>
      </v-container>
      
    </v-content>
    <v-footer :inset="footer.inset" app>
      <span class="px-3">&copy; {{ 'iluvstocks ' + new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  
  
  export default {
    
    data: () => ({
      dark: true,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        inset: false
      }
    })
  }
</script>
