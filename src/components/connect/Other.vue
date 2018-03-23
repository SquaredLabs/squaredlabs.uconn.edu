<template>
    <div id="container">
        Other Placeholder
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
<<<<<<< fcac807601d87d3b1fbe2aa2004a69f2aaac0ffe
    @import "../../styles/vars";
    #container{
        position: relative;
        top:-50px;
        padding-top:50px;
        background-color: $dodger-blue;
    }
=======
  #container{

  }
>>>>>>> Create selector
</style>
