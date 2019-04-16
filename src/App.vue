<template>
  <v-app id="sandbox" :dark="dark">
    <v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>
      <v-toolbar-title>Image Builder</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs10>
            <v-card>
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-switch v-model="dark" primary label="Dark"></v-switch>
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="10"
                      label="First name"
                      required
                  ></v-text-field>
                  </v-flex>
                 
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat color="primary">Submit</v-btn>
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
                  <img class="chart-img" src="./chart.png"></img>
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
                  <img class="calledby-img" src="./calledby.png"/>
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
  export default {
    data: () => ({
      dark: true,
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
