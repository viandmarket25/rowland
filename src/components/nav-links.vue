<template>
  <div class="nav-links-links">
    <router-link v-for="item in menuItems" :key="item.id" :to="item.path">
    <span class="navLink" >{{ item.label }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
  data() {
    return {
      menuItems: [
        { id: 1, label: 'home',path:"/" },
        { id: 2, label: 'about us',path:"/about" },
        { id: 3, label: 'news',path:"/news" },
        { id: 4, label: 'products',path:"/products" },
        { id: 5, label: 'contact',path:"/contact" }
      ]
    };
  },
  
  

  
}
</script>

<style scoped>
.nav-links-links {
  gap: var(--dl-space-space-twounits);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

@media(max-width: 767px) {
  .nav-links-links {
    display: none;
  }
}

.nav-links-links {
  /* Styles for both mobile and web */
  display: flex;
  justify-content: flex-end;
}

/* Styles for mobile devices */
@media (max-width: 767px) {
  .nav-links-links {
    margin-top:40px;
    flex-direction: column;
    align-items: flex-start;
    padding-left:26px;
   
  }
  .navLink {
  
    font-size:17px;
  }
}

/* Styles for web devices */
@media (min-width: 768px) {
  .nav-links-links {
    flex-direction: row;
  }

  .navLink {
    margin-left: 10px;
    font-size:17px;
  }
}
</style>




