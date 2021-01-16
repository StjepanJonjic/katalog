<template >
  <nav>
      <div class="topnav">
          <a><router-link class="active" to="/" exact>Home</router-link></a>

  <div class="topnav-right">
      <a><router-link to="/login" exact>Log in</router-link></a>
      <a><router-link to="/register" exact>Register</router-link></a>
    
  </div>
  </div>





    
  </nav>
</template>

<script>

export default{

}

</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}


</style>