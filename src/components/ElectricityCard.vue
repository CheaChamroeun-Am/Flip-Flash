<template>
  <SideBar></SideBar>
  <h3 class="title-subject fw-bold">Electricity</h3>
  <Carousel :items-to-show="1" class="position">
    <Slide v-for="e in electricity" :key="e.e_id">
      <div class="carousel__item">
        <div>
          <div class="flip-container">
            <div
              class="card"
              @click="
                cardOne === 'start'
                  ? (cardOne = 'flipped')
                  : (cardOne = 'start')
              "
              v-bind:class="{ flipCard: cardOne == 'flipped' }"
            >
              <div class="front text-white text-xl">
                <div class="frontCardTop">
                  <p>Front</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                    />
                  </svg>
                </div>

                <div class="frontCardMiddle">
                  <p>{{ e.front }}</p>
                </div>

                <div class="frontCardBottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-arrow-left-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </div>
              </div>
              <div class="back text-white">
                <div class="backCardTop">
                  <p>Back</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                    />
                  </svg>
                </div>

                <div class="backCardMiddle">
                  <p>{{ e.back }}</p>
                </div>

                <div class="backCardBottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-arrow-left-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "@vue/reactivity";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SideBar,
  },
  setup() {
    const electricity = ref([
      {
        e_id: 1,
        front: "a circuit with objects connected in a single path",
        back: "series circuit",
      },
      {
        e_id: 2,
        front: "a circuit in which current has a separate path for each object",
        back: "parallel circuit",
      },
      {
        e_id: 3,
        front: "An item where electricity easily passes through it",
        back: "conductor",
      },
      {
        e_id: 4,
        front: "A current can only flow through what type of circuit?",
        back: "Closed circuit",
      },
      {
        e_id: 5,
        front: "Air, rubber, glass and plastic are good examples of what?",
        back: "insulators",
      },
    ]);

    const cardOne = ref("start");

    return { electricity, cardOne };
  },
};
</script>

<style scoped>
.title-subject {
  margin-left: 18%;
}
.flipCard {
  transform: rotateY(-180deg);
}

.frontCardTop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.frontCardMiddle {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.frontCardBottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.frontCardBottom svg:hover {
  border-radius: 2rem;
  background-color: #907ce3;
}

.backCardTop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.backCardMiddle {
  display: flex;
  justify-content: center;
  font-size: 2rem;
}

.backCardBottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.backCardBottom svg:hover {
  border-radius: 2rem;
  background-color: #907ce3;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card {
  width: 740px;
  height: 420px;
  transition: all 700ms ease-in-out;
  transform-style: preserve-3d;
  border: none;
}
.front,
.back {
  width: 740px;
  height: 420px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 25px;
}

.front {
  background: #5f3dc4;
}
.back {
  background: #5f3dc4;
  transform: rotateY(-180deg);
}
.position {
  margin-top: 6%;
}

/* .carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: purple;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
} */
</style>
