<template>
    <div id="container">
        Developer Placeholder
        <div v-on:click="back">Back</div>
    </div>
    
</template>

<script>
    export default {
        props: ["back_to_select"],
        data:function(){
            return{
            }
        },
        methods:{
            back(){
                this.back_to_select();
            }
        }
    };
</script>

<style lang="scss" scoped>
  #container{

  }
</style>
