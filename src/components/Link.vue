<template>
  <span class="button" v-bind:style="{fontSize: fontSize + 'px' }">
    <a class="buttonText" v-on:click="click">{{text}} </a>
  </span>
</template>

<script>
    export default {
        props: ["text","link_ref","fontSize"],
        data: function() {
            //If ref is a number, it is interpreted as a vue route
            console.log(/^\/\.*/.test(this.link_ref))
            if(!isNaN(this.link_ref) || /^\/\.*/.test(this.link_ref) ){
                return { ref:""};
            }
            return {ref:this.link_ref};
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
        transition: background-color 0.3s ease;
        background:linear-gradient(left, #adcaf5,#adcaf5) ;
        background-repeat: no-repeat;
        color: $onyx;
    }
    .button:hover {
        background-color: $dodger-blue;
    }
    .buttonText {
        text-decoration: none;
        transition: top 0.3s ease;
        position: relative;
        top: 0.2em;
    }
    .button:hover .buttonText {
        top: 0.4em;
    }
</style>
