


const { createApp } = Vue

createApp({
  data() {
    return {
      currentMail:"",
     mailList:[],

    }
  },

  methods: {
    newMail() {
      axios.get( "https://flynn.boolean.careers/exercises/api/random/mail" )
      .then((response)=> {
       this.currentMail = response.data.response;
   
       this.mailList.push(this.currentMail);
   
       console.log(this.mailList);
   
      })
    }
  
},

mounted() {

  for (let i = 0; i < 10; i++) {
    this.newMail();
  }
  
},

  
}).mount('#app')
