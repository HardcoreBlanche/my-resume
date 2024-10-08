<template>
  <div id="app">
    <header>
      <h1>My Resume</h1>
      <nav>
        <ul>
          <li><router-link to="/">About Me</router-link></li>
          <li><router-link to="/info">PersonalInfo</router-link></li>
          <li><router-link to="/education">EducationInfo</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li>
            <router-link to="/internship">InternshipExperience</router-link>
          </li>
          <li><router-link to="/skills">SkillList</router-link></li>
        </ul>
      </nav>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
  color: #333;
}
header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}
h1,
h2 {
  margin-bottom: 10px;
}
section {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  background-color: #f4f4f4;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 4px;
}
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
}
nav ul li {
  display: inline;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
