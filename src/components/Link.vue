<template>
  <div class="button" v-bind:style="{fontSize: fontSize + 'px' }">
    <a class="buttonText" v-on:click="click" :href="ref">{{text}} </a>
  </div>
</template>

<script>
    export default {
        props: ["text","link_ref","fontSize"],
        data: function() {
            //If ref is a number, it is interpreted as a vue route
            if(!isNaN(this.link_ref)  ){
                return { ref:""};
            }
            return {ref:this.link_ref};
        },
        methods:{
            click(){
                if(!isNaN(this.link_ref) ){
                    this.$router.go(parseInt(this.link_ref));
                }
            },
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/vars";
    .button {
        cursor: pointer;
        transition: background-color 0.3s ease;
        background-color: $dodger-blue-50;
        color: $onyx;
        margin-left: 10px;
        position: absolute;
        top: 60vh;
        padding-top: 0.4em;
    }
    .button:hover {
        background-color: $dodger-blue;
    }
    .buttonText {
        text-decoration: none;
        font-family: "SpaceMono";
        transition: top 0.3s ease;
        position: relative;
        top: 0.1em;
    }
    .button:hover .buttonText {
        top: 0.3em;
    }
</style>
