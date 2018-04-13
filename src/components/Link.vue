<template>
  <span class="button" v-bind:style="{fontSize: fontSize + 'px'}" v-bind:class="{ white: isWhite }">
    <a class="buttonText" v-on:click="click" >{{text}} </a>
  </span>
</template>

<script>
    export default {
        props: ["text","link_ref","fontSize","color"],
        data: function() {
            let data={}
            data.isWhite=this.color=="white"
            //If ref is a number, it is interpreted as a vue route
            if(!isNaN(this.link_ref) || /^\/\.*/.test(this.link_ref) ){
                data.ref="";
                return data
            }
            data.ref=this.link_ref;
            return data
        },
        methods:{
            click(){
                if(!isNaN(this.link_ref) ){//If number, go that many pages (back if <0)
                    this.$router.go(parseInt(this.link_ref));
                }
                else if(/^\/\.*/.test(this.link_ref)){//If local url
                    this.$router.push(this.link_ref.slice(1))
                }
                else{//If external URL
                    window.location.href=(this.link_ref);
                }
            },
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/vars";
    .button {
        cursor: pointer;    
        background-color: rgba(106, 161, 244, .5);
        display: inline-block;
        box-sizing: border-box;
        height: calc(1em + 1px);
        vertical-align: text-top;
        color: #0c120c;
        padding-left: 2px;
        padding-right: 2px;
        transition: background .15s, padding .05s;
        text-decoration: none;
    }
    .button:hover {
        background-color: #6aa1f4;
        padding-top: 2px;
    }
    .white{
        background-color: #adcaf5;
    }
    .white:hover{
        background-color: $pale-grey;
    }
    .buttonText {
        text-decoration: none;
    }
</style>
