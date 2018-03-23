<template>
    <div class="back-button" :style="`left:${x}; top:${y};`" v-on:click="nav">
        <span id="arrow">{{arrow}}</span>
    </div>
</template>

<script>
    export default {
        props: ["x", "y", "direction"],
        data: function(){
            return{
                arrow: (this.direction == "forward" ? '→' : '←'),
            }
        },
        methods: {
            nav(){
                this.$router.go(this.direction == "forward" ? 1 : -1);
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import "../../styles/vars";
    .back-button{
        width:45px;
        height: 20px;
        position: absolute;
        background-color:$dodger-blue-50;
        cursor: pointer;
        transition: background-color 0.3s ease;
        color:$onyx;
        margin-top:5px;
    }
    .back-button:hover{
        background-color:$dodger-blue;
    }
    #arrow{
        top:8px;
        left:5px;
        position: relative;
        font-family: "SpaceMono";
        font-size:45px;
        transition: top 0.3s ease;
    }
    #arrow:hover{
        top:12px;
    }
</style>
