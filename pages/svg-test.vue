<template>
	<div>
    <svg-icon icon-class="user" />
    <svg id="svg" width="500" height="300"></svg>
  </div>
</template>

<script>
  export default {
    mounted(){
      let s = Snap("#svg")
      let bigCircle = s.circle(150, 150, 100)
      bigCircle.attr({
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5
      })
      let smallCircle = s.circle(100, 150, 70)
      let discs = s.group(smallCircle, s.circle(200, 150, 70))
      discs.attr({
        fill: "#fff"
      })
      bigCircle.attr({
        mask: discs
      })
      smallCircle.animate({r: 50}, 1000)
      discs.select("circle:nth-child(2)").animate({r: 50}, 1000)
      let p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 5
      })
      p = p.pattern(0, 0, 10, 10)
      bigCircle.attr({
        fill: p
      })
      discs.attr({fill: "r()#fff-#000"})
      discs.attr({fill: "R(150, 150, 100)#fff-#000"})

      bigCircle.mouseover(function () {
        bigCircle.animate({r: 70}, 400)
      }).mouseout(function () {
        bigCircle.animate({r: 50}, 400)
      })
    }
  }
</script>
