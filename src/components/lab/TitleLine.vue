<template>
    <div class="titleTextContainer">
          <div class="title"><slot name="title"></slot></div>
          <div class="hoverContent">
            <div class="hoverContentI" v-bind:class="[titlePositioning+'Content']">      
                <slot name="hoverContent"></slot>
            </div>
          </div>
          
    </div>
</template>
<script>
export default {
    props:{
        titlePositioning: {
            type: String,
            default: 'develop'
        }
    },
    data:()=> {return {hovered:false}}
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
.titleTextContainer{
    margin:0.5em 5% 0 5%;

}
.titleTextContainer:hover .hoverContent{
    visibility:visible;
}
.title{
  color: white;
  font-size: 14em;
  line-height:1em;
  font-family:'SpaceMono';
  
}
.hoverContent{
    position:absolute;
    width: 90%;
    left:5%;
    height: 15em;
    margin-top:7em;
    visibility:hidden;
    pointer-events:none;
}

.hoverContentI{
    position:absolute;
    width:33%;
    background-color:white;
    color:black;
}
.designContent{
    left:0;
    top:-5em;

}
.developContent{
    right:0;
    top:-35em;
}
.createContent{
    top:-50em;
    right:50%;
    transform:translateX(50%)

}
@media (min-width: $tablet) and (max-width: $desktop) {
  .title {
    font-size: 10em;
  }
}
@media (min-width: 0px) and (max-width: $tablet) {
    .title{
        font-size:5rem;
    }
}
</style>
