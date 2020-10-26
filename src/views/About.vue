<template>
  <div class="about">
    <h1>This is an about page!</h1>
     <InputEntry
     @savedItem="updateDb"
     ></InputEntry>
    <div>{{dbMsg}}</div>
  </div>
</template>


<script>
import InputEntry from '@/components/InputEntry.vue'

export default {
  
components: {
  InputEntry
},
data: function(){

  return{

    dbMsg: ""

  }

},

methods: {
  updateDb: function(msg){
    this.dbMsg = msg
  }

}

}
</script>