<template>
    <div id="container">
        Company Placeholder
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
    @import "../../styles/vars";
    #container{
        position: relative;
        top:-50px;
        padding-top:50px;
        background-color: $dodger-blue;
    }
</style>
