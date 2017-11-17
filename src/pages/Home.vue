<template>
    <div>
        <section class="jumbotron">
            <p>This space will have something really cool here eventually!</p>
        </section>
        <section class="four-cols" style="margin-top:80px">
            <div class="col" style="position: relative; top: -80px">
                <p>Welcome to ⬚² [squared] labs. Together with UConn’s very best students, we build cutting-edge websites that support UConn’s world-class research infrastructure. View our history, purpose, and space on the lab page.</p>
            </div>
            <div class="col project" style="background: url('../images/ip.png') center/150% no-repeat">
                <h3>Innovation Portal</h3>
            </div>
            <div class="col project" style="background: url('../images/lincus.png') center/150% no-repeat">
                <h3>Lincus</h3>
            </div>
            <div class="col project" style="background: url('../images/huskytrails.png') center/150% no-repeat">
                <h3>GrantTrails</h3>
            </div>
        </section>
        <section class="four-cols">
          <div class="three-col workshop">
            <p>???</p>
          </div>
          <div class="col">
            <p>Learning from others and sharing what we know is central to the ⬚² labs philosophy.  We see workshops as an opportunity to do both (in addition to getting to know the UConn web development community). Our workshops are open to all members of the UConn community, for free. </p>
          </div>
        </section>
    </div>
</template>

<script>
import IP from "../images/projects/ip.png";
import Lincus from "../images/projects/lincus.png";
import GrantTrails from "../images/projects/huskytrails.png";

export default {};
</script>

<style scoped lang="scss">
@import "../styles/vars";

section {
  margin-bottom: 80px;
}

.jumbotron {
  display: flex;
  font-size: 2em;
  align-items: center;
  justify-content: center;
  height: 500px;
  border: 1px black dashed;
}

.four-cols {
  display: flex;
}

.four-cols > .col {
  flex-basis: 25%;
  flex-grow: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.project {
  background-color: orange;
  height: 20vw;
  position: relative;
}

.project:before {
  background-color: black;
  height: 100%;
  width: 100%;
  content: "";
  opacity: 0.2;
  position: absolute;
  display: block;
  transition: opacity 0.3s ease;
}

.project > h3 {
  margin: 0;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: white;
  color: #0c120c;
  font-size: 25px;
  line-height: 1.24;
  max-width: 55%;
  padding: 10px;
  transition: color 0.3s ease;
}

.three-col {
  flex-basis: 75%;
}

.workshop {
  position: relative;
  left: -20px;
  background: $solid-blue;
}

// Mobile & Tablet
@media (max-width: $desktop) {
  .four-cols {
    flex-wrap: wrap;
  }

  .four-cols > .col {
    flex-basis: 100%;
  }
}
</style>