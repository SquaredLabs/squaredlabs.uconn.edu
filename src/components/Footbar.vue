<template>
    <div class="footbar">    
      <a class="footbar__link" href="https://uconn.edu" target="_blank">©2018 UConn</a>
      <a class="footbar__link" href="https://core.uconn.edu" target="_blank">UConn COR²E</a>
      <a class="footbar__link" onclick="alert('CONTACT!');">UConn COR²E</a>
      <a class="footbar__link">Link 1</a>
      <a class="footbar__link">Link 2</a>
      <figure class="footbar__brand">
        <img src="../images/wordmark.png" /> 
      </figure>
      <span class="footbar__signature">
        Designed & developed by
        <br />
        <span class="footbar__signature-bold">[squared labs]</span>
        <br />
        at UCONN
      </span>
    </div>
</template>
<style scoped lang="scss">
@import "../styles/vars";

.footbar {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.footbar__brand {
  flex-basis: calc(100% / 8 * 2);
  flex-grow: 0;
  min-width: 0;
  margin: 0;
}

.footbar__brand > img {
  max-width: 60%;
}

.footbar__link {
  flex-basis: calc(100% / 8);
  position: relative;
  color: $onyx;
  font-family: SpaceMono;
  transition: all 0.15s ease;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    display: block;
    height: 1em;
    left: 20px;
    right: 20px;
    background-color: $dodger-blue-50;
    transition: background-color 0.3s ease;
    z-index: -1;
  }

  &:hover,
  .router-link-exact-active {
    bottom: -2px;
  }

  &:hover:before,
  .router-link-exact-active:before {
    background-color: $dodger-blue;
    top: -2px;
  }
}

.footbar__signature {
  flex-basis: 100%;
  padding-top: 23px;
  color: $dodger-blue;
  line-height: 1.5;
}

.footbar__signature-bold {
  font-size: 26px;
  font-weight: bold;
}
</style>