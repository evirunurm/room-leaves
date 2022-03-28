<template>
  <div class="container">

    <div id="carouselWrapper" class="wrapper">
      <div v-for="ad in ads" class="img"></div>
    </div>
    <div class="controller">
      <button @click="clearSlideTimer(); setSlideTimer(); this.selected = ad.img;" v-for="ad in ads">{{ ad.img }}</button>
    </div>
  </div>
</template>

<script>

let interval;

export default {
  name: 'ImageCarousel',
  data() {
    return {
      selected: 1,
      ads: [
        {
          img: "1",
          href: ""
        },
        {
          img: "2",
          href: ""
        },
        {
          img: "3",
          href: ""
        },
        {
          img: "4",
          href: ""
        }
      ]
    }
  },
  methods: {
    nextSlide(slide) {
      this.selected = slide;
      console.log(this.selected)
      document.getElementById("carouselWrapper").style.left=`-${ (this.selected - 1) * 100 }%`;
    },
    setSlideTimer() {
      interval = setInterval(this.nextSlide((this.selected < this.ads ? this.selected + 1 : 1)), 4000);
    },
    clearSlideTimer() {
      this.nextSlide();
      clearInterval(interval);
    },
  },
  mounted() {
    this.setSlideTimer();
  }
}
</script>

<style scoped>
.container {
  height: 250px;
  width: calc(100% - (var(--general-margin) * 2));
  background: red;
  position: relative;
  overflow: hidden;
}

.wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
  transition: 0.5s ease-in-out;
}

.img {
  height: 200px;
  min-width: 100%;
}


.img:nth-child(1) {
  background: green;
}
.img:nth-child(2) {
  background: blue;
}
.img:nth-child(3) {
  background: yellow;
}
.img:nth-child(4) {
  background: brown;
}

.controller {
  position: absolute;
  bottom: 0.5em;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.controller > button {
  border-radius: 50%;
  border: 2px solid white;
  background: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  box-shadow: 0 5px 8px 0px rgba(0,0,0, 0.5);
}

</style>
