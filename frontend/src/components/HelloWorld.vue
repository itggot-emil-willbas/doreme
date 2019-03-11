<template>
  <v-container>
    <v-layout text-xs-center wrap justify-center>
      <v-flex xs6 my-3 mb-3>
        <h1 class="display-1 font-weight-light mb-3">1. Where were you born?</h1>

        <v-text-field label="Town..."></v-text-field>
      </v-flex>
      <v-flex xs12>
        <h1 class="display-1 font-weight-light mb-4">2. When?</h1>
        <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
        <v-layout xs5 wrap justify-center>
          <v-flex xs12 sm3 mb-1>
            <v-checkbox v-model="landscape" hide-details label="Landscape"></v-checkbox>
          </v-flex>
          <!--<v-flex xs12 sm2 mb-3>
            <v-checkbox v-model="reactive" hide-details label="Reactive"></v-checkbox>
          </v-flex>-->
        </v-layout>
      </v-flex>

      <v-flex xs8 my-5>
        <h1 class="display-1 font-weight-light mb-5">This happend on your birthday:</h1>
        <v-btn color="primary" @click="getdata">Hämta dagens info</v-btn>
        <p v-if="data" class="subheading font-weight-regular">Something 1: {{data.data.Events[1].text}}</p>
        <p v-if="data" class="subheading font-weight-regular">Something 1: {{data.date[1].text}}</p>
        <p v-if="data" class="subheading font-weight-regular">Interesting fact: In {{data.data.Events[0].year}}, this happend: {{data.data.Events[0].text}}</p>
        <p class="subheading font-weight-regular">Something 2: {{picker}}</p>
        <p class="subheading font-weight-regular">Something 3: {{getYear}}, {{getMonth}}, {{getDay}}</p>
      </v-flex>

      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-2">Welcome to Vuetify</h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
      data: null,
      events: null,
      baseURL: "https://history.muffinlabs.com/date",
      api: 'http://localhost:4000/muffins/today'
    };
  },
  methods: {
    fetchDateInfo: function () {
      const api =  //HÄR! Skicka req till 4000 ('/getDate') istället, låt server hämta datum
      this.$http.get(api) //Ta bort Lundholms ful-header
      .then((result)=>{
        console.log(result)
        //this.info = result.data
      })
    },
    async getdata(){
      console.log("Nu kör en request till ", this.api)
      let resp = await this.$http.get(this.api);
      console.log(resp)
      this.data = resp.data
      //this.events = resp.data.data.Events[0]
      
    }
  },
  computed:{
    getYear ()  {
      return  this.picker.substr(0, 4);
    },
    getMonth ()  {
      return  this.picker.substr(5, 2);
    },
    getDay ()  {
      return  this.picker.substr(8, 2);
    }
  } 
};
</script>

<style>
</style>
