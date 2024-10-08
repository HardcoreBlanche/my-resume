import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "../components/AboutMe.vue";
import PersonalInfo from "../components/PersonalInfo.vue";
import EducationInfo from "../components/EducationInfo.vue";
import Projects from "../components/Projects.vue";
import InternshipExperience from "../components/InternshipExperience.vue";
import SkillList from "../components/SkillList.vue";

const routes = [
  { path: "/", component: AboutMe },
  { path: "/info", component: PersonalInfo },
  { path: "/education", component: EducationInfo },
  { path: "/projects", component: Projects },
  { path: "/internship", component: InternshipExperience },
  { path: "/skills", component: SkillList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
