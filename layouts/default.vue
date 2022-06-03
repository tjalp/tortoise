<template>
    <div id="wrapper">
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
            <div style="flex: 1">
                <h1><NuxtLink to="/">tortoise</NuxtLink></h1>
            </div>
            <nav>
                <ul>
                    <li><NuxtLink to="/"><SpicyButton text="/home" /></NuxtLink></li>
                    <li><NuxtLink to="/about"><SpicyButton text="/about" /></NuxtLink></li>
                    <li><NuxtLink to="/downloads"><SpicyButton text="/downloads" /></NuxtLink></li>
                    <li><NuxtLink to="/map"><SpicyButton text="/map" /></NuxtLink></li>
                    <li><NuxtLink to="/dashboard"><SpicyButton text="/dashboard" /></NuxtLink></li>
                    <li><NuxtLink to="/auth"><SpicyButton text="/auth" /></NuxtLink></li>
                    <li><NuxtLink to="/404"><SpicyButton text="/404...?" /></NuxtLink></li>
                </ul>
            </nav>
            <div style="flex: 1"></div>
        </div>
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

body {
    font-family: 'Rubik', sans-serif;
    background-color: #202020;
    color: #ffffff;
    overflow-x: hidden;
}

::selection {
    background-color: #606060;
    color: #ffffff;
}

main {
    text-align: center;
}

#wrapper {
    /* border: 5px solid #000;
    border-color: #404040;
    border-radius: 10px; */
    max-width: 1200px;
    margin: auto;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

nav li {
  margin: 0 0.4rem;
  font-size: 1.4rem;
  font-weight: bold;
}

nav a.nuxt-link-exact-active {
    color: #34d399;
}

a, a:visited {
    text-decoration: none;
    color: inherit;
    transition: 150ms;
}

a:hover {
    color: #b2cccc;
    transition: 150ms;
}

.warning {
    color: #ff6961;
}

.undertitle {
    color: #cccccc;
}
</style>