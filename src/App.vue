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
            <v-card>
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs12 md2 style="padding:10px">
                    <v-text-field
                      v-model="stock.ticker"
                      label="Ticker"
                      required
                      ></v-text-field>
                      <v-text-field
                      v-model="stock.date"
                      label="Date"
                      required
                      ></v-text-field>
                      <v-text-field
                      v-model="stock.time"
                      label="Time"
                      required
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md2 style="padding:10px">
                      <v-text-field
                      v-model="stock.price"
                      label="Idea Price"
                      required
                      ></v-text-field>
                      <v-text-field
                      v-model="stock.high"
                      label="Price High"
                      required
                      ></v-text-field>
                      <v-text-field
                      v-model="stock.sector"
                      label="Sector"
                      ></v-text-field>
                      </v-flex>
                  <v-flex xs12 md2 style="padding:10px">
                      <v-text-field
                      v-model="stock.volume"
                      label="Volume"
                      required
                      ></v-text-field>
                      <v-text-field
                      v-model="stock.calledby"
                      label="Called By"
                      required
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md2 style="padding:10px">
                     <upload-btn :uniqueId="'btnUploadChart'" :fileChangedCallback="chartFileChanged" :title="chartUploadButtonTitle"
                      ></upload-btn>
                     <upload-btn :uniqueId="'btnUploadIdea'" :fileChangedCallback="ideaFileChanged" :title="ideaUploadButtonTitle"
                      ></upload-btn>
                  </v-flex>
                 
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs10>
            <v-card>
              <v-card-text>
                <div class="content">
                  <img class="logo" src="./ilslogo.png">
                  <img class="chart-img" :src="chartFile.url"/>
                  <div class="stock-box">
                          <h3>PLAY OF THE DAY</h3>
                          <h1>{{stock.ticker}}</h1>
                          <h3>{{stock.date}}</h3>
                  </div>
                  <table cellpadding=0 cellspacing=0 class="stock-stats">
                      <tr>
                          <th class="idea">IDEA:</th>
                          <th class="high" >HIGH:</th> 
                          <th>SECTOR:</th>
                          <th>VOLUME:</th>
                          <th>CALLED BY:</th>
                          <th>TIME:</th>
                          <th>MAX RETURN</th>
                      </tr>
                      <tr>
                          <td class="idea-value">{{stock.price}}</td>
                          <td class="high-value">{{stock.high}}</td> 
                          <td>{{stock.sector}}</td>
                          <td>{{stock.volume}}</td>
                          <td>{{stock.calledby}}</td>
                          <td>{{stock.time}}</td>
                          <td class="stock-return">{{stock.maxreturn}}%</td>
                      </tr>
                  </table>
                  <img class="calledby-img" :src="ideaFile.url"/>
              </div>
              </v-card-text>
            </v-card>
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
  import UploadButton from 'vuetify-upload-button'

  export default {
    methods: {
      chartFileChanged (file) {
        
        if(file !== undefined) {
          this.chartFile.name = file.name
          if(this.chartFile.name.lastIndexOf('.') <= 0) {
            return
          }

          console.log(file)
          const fr = new FileReader ()
          fr.readAsDataURL(file)
          fr.addEventListener('load', () => {
            this.chartFile.url = fr.result
            this.chartFile.file = file // this is an image file that can be sent to server...
          })
        } else {
          console.log('file was undefined')
          this.chartFile.name = ''
          this.chartFile.file = ''
          this.chartFile.url = ''
        }
      },
      ideaFileChanged (file) {
        
        console.log(file)

        if(file !== undefined) {
          this.ideaFile.name = file.name
          if(this.ideaFile.name.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader ()
          fr.readAsDataURL(file)
          fr.addEventListener('load', () => {
            this.ideaFile.url = fr.result
            this.ideaFile.file = file // this is an image file that can be sent to server...
          })
        } else {
          console.log('file was undefined')
          
          this.ideaFile.name = ''
          this.ideaFile.file = ''
          this.ideaFile.url = ''
        }
      }
    },
    components: {
      'upload-btn': UploadButton
    },
    data: () => ({
      dark: true,
      chartUploadButtonTitle: 'Add Chart File',
      ideaUploadButtonTitle: 'Add Idea File',
      stock: {
        ticker: 'ZSAN',
        date: '02/21/19',
        time: '9:30 am',
        price: 2.89,
        high: 6.69,
        sector: 'Pharma',
        volume: '39.9k',
        calledby: 'Vegas',
        maxreturn: 130
      },
      ideaFile: {
        name: '',
        file: '',
        url: ''
      },
      chartFile: {
        name: '',
        file: '',
        url: ''
      },
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
