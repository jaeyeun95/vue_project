<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/checkbox">checkbox</router-link> |
      <router-link to="/excel">Excel</router-link> |
      <router-link to="/js">JS</router-link> |
      <router-link to="/set">$set</router-link> |
      <router-link to="/spinner">Spinner</router-link> |
      <router-link to="/axios">Axios</router-link> |
      <router-link to="/error">Error</router-link> |
      <router-link to="/audio">Audio</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
