
var app = new Vue({
    el: '#app',
    data: {
      input:"",
      source:"./assets/happy-face.svg",
      mood:null,
    },
    methods:{
        fetchMood:function(){
            if(this.input.length > 10){
                axios.post('https://sentim-api.herokuapp.com/api/v1/',
                {"text":this.input},
                {headers:{Accept: "application/json", "Content-Type": "application/json" }}
                ).then((res =>{
                    if(res.status === 200){
                        this.mood = res.data.result.type
                        switch (this.mood) {
                            case "positive":
                                this.source = './assets/happy-face.svg'
                                break;
                            case 'negative':
                                this.source = './assets/angry-face.svg'
                            break;

                            default:
                                this.source = './assets/neutral.svg'
                            break;
                        }
                    }
                    console.log(res)
                })).catch(err => {console.log(err)})
            }
        }
    }
  })