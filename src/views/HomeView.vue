<template>
  <div>
    <side-bar />

    <div class="main">
      <a @click="handleLogout" class="logout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="logouticon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        Log out</a
      >

      <a @click="handleNewCard" class="flashcard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="flashlogo"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
        New Flash Card
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="plusicon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </a>

      <div class="row cards-template">
        <h5 class="fw-bold">Explore FlipFlash templates</h5>
        <div
          class="col-lg-3 col-md-6 mt-4 gap-4"
        >
          <div class="card" @click="handleMath">
              <img src="@/assets/Math.jpg" class="card-img-top" alt="..." />
              <div>
                <h6 class="card-title text-center mt-2">Math</h6>
              </div>
          </div>
      </div>

      <div
          class="col-lg-3 col-md-6 mt-4 gap-4"
        >
          <div class="card" @click="handleScience">
              <img src="@/assets/Science.jpg" class="card-img-top" alt="..." />
              <div>
                <h6 class="card-title text-center mt-2">Science</h6>
              </div>
          </div>
      </div>

      <div
          class="col-lg-3 col-md-6 mt-4 gap-4"
        >
          <div class="card" @click="handleEnglish">
              <img src="@/assets/English.jpg" class="card-img-top" alt="..." />
              <div>
                <h6 class="card-title text-center mt-2">English</h6>
              </div>
          </div>
      </div>

      <div
          class="col-lg-3 col-md-6 mt-4 gap-4"
        >
          <div class="card" @click="handleElectricity">
              <img src="@/assets/Electricity.jpg" class="card-img-top" alt="..." />
              <div>
                <h6 class="card-title text-center mt-2">Electricity</h6>
              </div>
          </div>
      </div>
    </div>
      
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  components: { SideBar },

  setup() {
    const router = useRouter();

    const handleNewCard = () => {
      router.push('/home/create')
    }

    const handleLogout = () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      router.push("/");
    };

    const handleMath = () => {
      router.push('/card/math')
    }

    const handleScience = () =>{
      router.push("/card/science")
    }

    const handleEnglish = () => {
      router.push('/card/english')
    }

    const handleElectricity = () => {
      router.push('/card/electricity')
    }

    return {handleLogout, handleMath, handleScience, handleEnglish, handleElectricity, handleNewCard};
  },
};
</script>

<style scoped>
.main {
  flex-direction: columns;
}
.logout {
  flex-direction: row;
  float: right;
  text-decoration: none;
  color: black;
  margin-right: 36px;
  margin-top: -48px;
  font-size: 12px;
  cursor: pointer;
}
.logouticon {
  color: black;
  width: 24px;
  height: 24px;
}
.flashlogo {
  width: 48px;
  height: 48px;
  color: #907ce3;
  margin-right: 8px;
}
.flashcard {
  margin-left: 18%;
  border-radius: 25px;
  padding: 28px;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid black;
}
.plusicon {
  width: 24px;
  height: 24px;
  margin-left: 64px;
  color: #907ce3;
}
/* .flower {
  flex-direction: column;
  margin-left: 50%;
  margin-right: 35%;
  margin-top: 10%;
  width: auto;
  height: auto;
}
.flowerpot {
  color: #907ce3;
  width: 300px;
  height: 300px;
  margin-top: 8%;
  opacity: 40%;
}
.clicktext {
  margin-left: 50%;
  font-size: 14px;
  opacity: 80%;
} */

.cards-template {
  margin-left: 18%;
  margin-top: 80px;
}
.card {
  width: 300px;
  cursor: pointer;
}
.card img {
  object-fit: cover;
  width: 300px;
  height: 150px;
}
.row {
  --bs-gutter-x: 0;
}
</style>
