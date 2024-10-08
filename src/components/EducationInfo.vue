<template>
  <div>
    <h1>EducationInfo</h1>
    <ul>
      <li>
        <strong>University Name</strong><br />
        Bachelor of Science in Computer Science<br />
        September 2018 - June 2022
      </li>
      <li>
        <strong>High School Name</strong><br />
        High School Diploma<br />
        September 2014 - June 2018
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EducationInfo",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 15px;
}
</style>
