<template>
    <div>
        
        <input data-test="messageText" v-model="msg" type="text">
        <button 
        data-test="saveButton"
        type="button"
        @click="saveItem"
        >
        Save</button>


    </div>
</template>

<script>
export default {
    name: 'InputEntry',
    data: function(){
        return{
            msg: ""
        }
    },

    methods: {
            saveItem: function(){

            console.log()
            //save
            this.$emit('savedItem', this.msg)

            //clear input
            this.msg=""

        }
    }
}
</script>