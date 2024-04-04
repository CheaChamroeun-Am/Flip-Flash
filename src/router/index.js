import { createRouter, createWebHistory } from "vue-router";
import StartView from "../views/StartView";
import HomeView from "../views/HomeView.vue";
import ImportantView from "../views/ImportantView.vue";
import LibraryView from "../views/LibraryView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignupView.vue";
import TodoView from "../views/TodoView.vue";
import FlashCard from "../components/FlashCard.vue";
import CreateCard from "../views/CreateCard.vue";
import MathCard from '@/components/MathCard'
import EnglishCard from '@/components/EnglishCard'
import ScienceCard from '@/components/ScienceCard'
import ElectricityCard from '@/components/ElectricityCard'

const routes = [
  {
    path: "/",
    name: "StartView",
    component: StartView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "SignUpView",
    component: SignUpView,
  },
  {
    path: "/home",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/important",
    name: "ImportantView",
    component: ImportantView,
  },
  {
    path: "/library",
    name: "LibraryView",
    component: LibraryView,
  },
  {
    path: "/todo",
    name: "TodoView ",
    component: TodoView,
  },
  {
    path: "/card",
    name: "FlashCard",
    component: FlashCard,
  },
  {
    path: "/card/math",
    name: "MathCard",
    component: MathCard,
  },
  {
    path: "/card/english",
    name: "EnglishCard",
    component: EnglishCard,
  },
  {
    path: "/card/science",
    name: "ScienceCard",
    component: ScienceCard,
  },
  {
    path: "/card/electricity",
    name: "ElectricityCard",
    component: ElectricityCard,
  },
  {
    path: "/home/create",
    name: "CreateCard",
    component: CreateCard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
