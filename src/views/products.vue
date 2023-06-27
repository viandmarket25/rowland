<template>
    <div class="home-container">
      <div class="home-navbar">
        <header data-thq="thq-navbar" class="home-navbar-interactive">
          <div class="home-branding">
            <span class="home-text">Rowland</span>
          </div>
          <div data-thq="thq-navbar-nav" data-role="Nav" class="home-desktop-menu">
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" class="home-nav">
              
            
              
              <div class="home-right">
                <nav-links></nav-links>
                <div class="home-button">
                 
                
                </div>
  
  
  
  
  
  
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" class="home-burger-menu">
            <MobileNavigation />
          </div>
          <div data-thq="thq-mobile-menu" class="home-mobile-menu">
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" class="home-nav1">
              <div class="home-top">
                <div class="home-branding1">
                  <span class="home-text003">Rowland</span>
                </div>
                <div data-thq="thq-close-menu" class="home-menu-close">
                  <svg viewBox="0 0 1024 1024" class="home-icon">
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    ></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                class="home-middle"
              >
                <div class="home-links">
                  <span class="navLink">work</span>
                  <span class="navLink">services</span>
                  <span class="navLink">contact</span>
                </div>
                <button class="home-work-with-us2 button">
                  <span class="home-text004">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
  
  
    
      <div class="home-hero">
     
      
  
   
  
  

        <div class="product-grid">
            <div  v-for="(product,pindex) in products" :key="pindex"  class="product-item">
                <img :src="product.src" alt="Product 1" class="product-image">
                <div class="product-title">{{product.title}}</div>
            </div>
       
        <!-- Add more product items as needed -->
        </div>

       
     
      </div>
      
 
  
  
  
      
      <footer class="home-footer">
        <div class="home-header4">
          <span class="home-branding2">Rowland International (Yantai) co.,ltd</span>
          <div class="home-socials">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link03"
            >
              <img alt="image" src="/facebook%20-%20negative.svg" class="social" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link04"
            >
              <img alt="image" src="/twitter%20-%20negative.svg" class="social" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link05"
            >
              <img alt="image" src="/dribbble%20-%20negative.svg" class="social" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link06"
            >
              <img alt="image" src="/instagram%20-%20negative.svg" class="social" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link07"
            >
              <img alt="image" src="/linkedin%20-%20negative.svg" class="social" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link08"
            >
              <img alt="image" src="/youtube%20-%20negative.svg" class="social" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link09"
            >
              <img alt="image" src="/telegram%20-%20negative.svg" class="social" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link10"
            >
              <img alt="image" src="/medium%20-%20negative.svg" class="social" />
            </a>
          </div>
        </div>
    
        <div class="home-locations">
        
        
          <div class="home-location3">
           
            <span class="home-details10">
              <span>Whatsapp: +8617664096970</span>
              <br />
              <span>Rowland@vip.163.com</span>
              <br />
             
            </span>
          </div>
        </div>
        <div class="home-socials1">
          <div class="home-row4">
            <a href="https://example.com" target="_blank" rel="noreferrer noopener">
              <img alt="image" src="/facebook%20-%20negative.svg" class="social" />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer noopener">
              <img alt="image" src="/twitter%20-%20negative.svg" class="social" />
            </a>
           
          </div>
          <div class="home-row5">
            <a href="https://example.com" target="_blank" rel="noreferrer noopener">
              <img alt="image" src="/linkedin%20-%20negative.svg" class="social" />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer noopener">
              <img alt="image" src="/youtube%20-%20negative.svg" class="social" />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer noopener">
              <img alt="image" src="/telegram%20-%20negative.svg" class="social" />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer noopener">
              <img alt="image" src="/medium%20-%20negative.svg" class="social" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import DangerousHTML from 'dangerous-html/vue'
  import NavLinks from '../components/nav-links'
  import AppTestimonial from '../components/testimonial'
  import MobileNavigation from '../components/mobileNav.vue';
  
  import { Carousel, Slide } from 'vue-carousel';
  
  
  export default {
    name: 'Home',
    components: {
      MobileNavigation,
      NavLinks,
      DangerousHTML,
      AppTestimonial,
      Carousel,Slide,
    },
    mounted() {
      setInterval(this.showNextImage, 3000);
    },
    methods: {
      showNextImage() {
        const currentIndex = this.currentIndex;
        const index = this.images.findIndex(image => image.src === currentIndex);
        this.currentIndex = this.images[(index + 1) % this.images.length].src;
      }
    },
    metaInfo: {
      title: 'Hola template',
      meta: [
        {
          property: 'og:title',
          content: 'Hola template',
        },
      ],
    },
    data(){
      return{
        currentIndex: 0,
        images: [
          { src: '/assets/images/JET-1800-24A.png', alt: 'Banner 1' },
          { src: '/assets/images/JET-2500_kogn.png', alt: 'Banner 1' },
         
          { src: '/assets/images/JET-2500.png', alt: 'Banner 1' },
         
        ],
        products:[
        { src: '/assets/images/JET-2500.png',
         alt: 'Banner 1',
            title:"Corrugated_Box_Inkjet_Printer"    
        },
        { src: '/assets/images/JET-2500_kogn.png',
         alt: 'Banner 1',
            title:"Corrugated_Carton_Digital_Printing_Machine"    
        },
        { src: '/assets/images/JET-1800-24A.png',
         alt: 'Banner 1',
            title:"corrugated-box-digital-printer"    
        },
        { src: '/assets/images/JET-2500.png',
         alt: 'Banner 1',
            title:"Digital_Inkjet_Printing_Machine"    
        },
        ],
      }
    },
  }
  </script>
  
  
  
  
  <style scoped>
  .product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.product-item {
  text-align: center;
  
  padding:20px;
  border-radius:5px;
}

.product-image {
  width: 100%;
  height: auto;
}

.product-title {
    margin-top: 10px;
  font-size: 13px;
  word-wrap: break-word;
  text-align:left;
  
}

/* Media queries for responsive design */


/* Media query for smaller screens (mobile) */
@media (max-width: 767px) {
  .product-item {
    flex-basis: calc(50% - 10px);
  }
}

  .banner-carousel {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  
  .banner-image {
    width: 100%;
    height: auto;
    display: block;
  }
  
  @media (min-width: 768px) {
    .banner-image {
      width: 100%;
      height: auto;
    }
  }
  
  @media (min-width: 992px) {
    .banner-image {
      width: 100%;
      height: auto;
    }
  }
  
  .home-container {
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
  }
  .home-navbar {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .home-navbar-interactive {
    width: 100%;
    display: flex;
    position: relative;
    max-width: var(--dl-size-size-maxwidth);
    align-items: center;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: row;
    justify-content: space-between;
  }
  .home-branding {
    flex: 1;
    display: flex;
    max-width: 640px;
    align-items: flex-start;
    border-color: #61616B;
    flex-direction: row;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: flex-start;
    border-bottom-width: 1px;
  }
  .home-text {
    color: #27272D;
    font-size: 30px;
    font-family: Inter;
  }
  .home-desktop-menu {
    display: flex;
  }
  .home-nav {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .home-right {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-button {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-work-with-us {
    cursor: pointer;
    transition: 0.3s;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-oneandhalfunits);
    border-radius: 70px;
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-unit);
    background-color: rgb(229, 254, 88);
  }
  .home-work-with-us:hover {
    opacity: 0.5;
  }
  .home-text001 {
    display: flex;
    font-size: 24px;
  }
  .home-image {
    width: 100px;
    display: none;
    object-fit: cover;
  }
  .home-burger-menu {
    display: none;
    align-items: center;
    justify-content: center;
  }
  .home-work-with-us1 {
    cursor: pointer;
    transition: 0.3s;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-oneandhalfunits);
    border-radius: 70px;
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-unit);
    background-color: rgb(229, 254, 88);
  }
  .home-work-with-us1:hover {
    opacity: 0.5;
  }
  .home-text002 {
    display: flex;
    font-size: 24px;
  }
  .home-image01 {
    width: 100px;
    display: none;
    object-fit: cover;
  }
  .home-mobile-menu {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 32px;
    z-index: 100;
    position: fixed;
    transform: translateX(100%);
    transition: 0.5s;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
  }
  .home-nav1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: var(--dl-space-space-threeunits);
    justify-content: space-between;
  }
  .home-branding1 {
    flex: 1;
    display: flex;
    max-width: 640px;
    align-items: flex-start;
    border-color: #61616B;
    flex-direction: row;
    justify-content: flex-start;
    border-bottom-width: 1px;
  }
  .home-text003 {
    color: #27272D;
    font-size: 30px;
    font-family: Inter;
  }
  .home-menu-close {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-icon {
    width: var(--dl-size-size-xsmall);
    height: var(--dl-size-size-xsmall);
  }
  .home-middle {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-links {
    gap: var(--dl-space-space-twounits);
    display: flex;
    position: relative;
    align-items: flex-start;
    margin-bottom: var(--dl-space-space-twounits);
    flex-direction: column;
    justify-content: center;
  }
  .home-work-with-us2 {
    cursor: pointer;
    transition: 0.3s;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-oneandhalfunits);
    border-radius: 70px;
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-unit);
    background-color: rgb(229, 254, 88);
  }
  .home-work-with-us2:hover {
    opacity: 0.5;
  }
  .home-text004 {
    display: flex;
    font-size: 24px;
  }
  .home-hero {
    gap: 120px;
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-items: flex-start;
    padding-top: 140px;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    padding-bottom: 160px;
  }
  .home-header {
    gap: var(--dl-space-space-twounits);
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text005 {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    max-width: 1000px;
    font-style: normal;
    font-weight: 400;
  }
  .home-image02 {
    width: 24px;
    height: 40px;
    display: flex;
    object-fit: cover;
  }
  .home-hero-image {
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding-top: var(--dl-space-space-threeunits);
    padding-left: 180px;
    padding-right: 180px;
    flex-direction: column;
    padding-bottom: var(--dl-space-space-threeunits);
    justify-content: center;
    background-color: #E5FE58;
  }
  .home-image03 {
    width: 640px;
    height: 540px;
    object-fit: cover;
  }
  .home-who {
    gap: 120px;
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-items: center;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    padding-bottom: 320px;
  }
  .home-header1 {
    gap: var(--dl-space-space-threeunits);
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-left: 170px;
    padding-right: 170px;
    flex-direction: column;
  }
  .home-heading {
    gap: var(--dl-space-space-threeunits);
    display: flex;
    flex-direction: column;
  }
  .home-text006 {
    width: 100%;
    font-size: 54px;
    max-width: 800px;
    font-style: normal;
    font-weight: 400;
  }
  .home-text007 {
    color: #27272D;
    width: 100%;
    font-size: 24px;
    max-width: 800px;
    line-height: 43px;
  }
  .home-button1 {
    font-size: 24px;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-oneandhalfunits);
    border-radius: 70px;
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-unit);
    background-color: rgb(229, 254, 88);
  }
  .home-preview {
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    padding-left: 170px;
    padding-right: 170px;
    flex-direction: row;
  }
  .home-image04 {
    width: 100%;
    display: flex;
    position: relative;
    max-width: 527px;
    align-items: flex-start;
    flex-direction: column;
    background-color: #E5FE58;
  }
  .home-image05 {
    object-fit: cover;
    margin-left: -160px;
  }
  .home-video {
    top: 0px;
    right: 0px;
    width: 646px;
    display: flex;
    position: absolute;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-video1 {
    width: 100%;
    cursor: pointer;
    margin-top: 77px;
  }
  .home-information {
    gap: var(--dl-space-space-fiveunits);
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-items: flex-start;
    padding-top: 120px;
    border-color: var(--dl-color-gray-black);
    border-width: 0px;
    padding-left: 170px;
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    padding-bottom: 140px;
    border-top-width: 1px;
  }
  .home-purpose {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-caption {
    color: #27272D;
    letter-spacing: 5%;
    text-transform: uppercase;
  }
  .home-description {
    color: #27272D;
    width: 100%;
    font-size: 30px;
    max-width: 900px;
    line-height: 54px;
  }
  .home-industries {
    gap: var(--dl-space-space-twounits);
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-caption1 {
    color: rgb(39, 39, 45);
    letter-spacing: 5%;
    text-transform: uppercase;
  }
  .home-list {
    width: 100%;
    display: grid;
    grid-gap: 80px;
    align-items: flex-start;
    flex-direction: column;
    grid-template-columns: auto auto auto;
  }
  .home-accordion {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text008 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text009 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text010 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text011 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text012 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-item {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title01 {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text013 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text014 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text015 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text016 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text017 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-item1 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-trigger2 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title02 {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text018 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text019 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text020 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text021 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text022 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-item2 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-trigger3 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title03 {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text023 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text024 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text025 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text026 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text027 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-item3 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-trigger4 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title04 {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text028 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text029 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text030 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text031 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text032 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-item4 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-trigger5 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title05 {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text033 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text034 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text035 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text036 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text037 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-item5 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-trigger6 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title06 {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text038 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text039 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text040 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text041 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text042 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-item6 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-trigger7 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title07 {
    color: rgb(39, 39, 45);
    width: 100%;
    font-size: 54px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-text043 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text044 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text045 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text046 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-text047 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 18px;
  }
  .home-section {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 135px;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    padding-bottom: 135px;
    background-color: #27272D;
  }
  .home-case-studies {
    gap: var(--dl-space-space-fiveunits);
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-items: flex-start;
    border-color: #ffffff;
    flex-direction: column;
    padding-bottom: 130px;
    border-bottom-width: 1px;
  }
  .home-caption2 {
    gap: var(--dl-space-space-threeunits);
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    flex-direction: row;
  }
  .home-text048 {
    color: #ffffff;
    letter-spacing: 5%;
    text-transform: uppercase;
  }
  .home-date-range {
    gap: var(--dl-space-space-unit);
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
  .home-text049 {
    color: rgb(255, 255, 255);
  }
  .home-text050 {
    color: rgb(255, 255, 255);
    font-style: normal;
    font-weight: 300;
  }
  .home-text051 {
    color: rgb(255, 255, 255);
  }
  .home-gallery {
    gap: var(--dl-space-space-fiveunits);
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-row {
    gap: var(--dl-space-space-fiveunits);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .home-case {
    gap: var(--dl-space-space-twounits);
    display: flex;
    margin-top: var(--dl-space-space-threeunits);
    align-items: flex-start;
    flex-direction: column;
  }
  .home-image06 {
    width: 560px;
    height: 416px;
    object-fit: cover;
  }
  .home-heading1 {
    gap: var(--dl-space-space-unit);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text052 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 36px;
  }
  .home-text053 {
    color: rgb(255, 255, 255);
    font-size: 18px;
  }
  .home-case1 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-image07 {
    width: 640px;
    height: 545px;
    object-fit: cover;
  }
  .home-heading2 {
    gap: var(--dl-space-space-unit);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text054 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 36px;
  }
  .home-text055 {
    color: rgb(255, 255, 255);
    font-size: 18px;
  }
  .home-row1 {
    gap: var(--dl-space-space-fiveunits);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }
  .home-case2 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-image08 {
    width: 640px;
    height: 545px;
    object-fit: cover;
  }
  .home-heading3 {
    gap: var(--dl-space-space-unit);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text056 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 36px;
  }
  .home-text057 {
    color: rgb(255, 255, 255);
    font-size: 18px;
  }
  .home-case3 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    padding-top: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .home-image09 {
    width: 560px;
    height: 628px;
    object-fit: cover;
  }
  .home-heading4 {
    gap: var(--dl-space-space-unit);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text058 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 36px;
  }
  .home-text059 {
    color: rgb(255, 255, 255);
    font-size: 18px;
  }
  .home-row2 {
    gap: var(--dl-space-space-fiveunits);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }
  .home-case4 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    padding-top: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .home-image10 {
    width: 560px;
    height: 628px;
    object-fit: cover;
  }
  .home-heading5 {
    gap: var(--dl-space-space-unit);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text060 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 36px;
  }
  .home-text061 {
    color: rgb(255, 255, 255);
    font-size: 18px;
  }
  .home-case5 {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-image11 {
    width: 640px;
    height: 545px;
    object-fit: cover;
  }
  .home-heading6 {
    gap: var(--dl-space-space-unit);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text062 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 36px;
  }
  .home-text063 {
    color: rgb(255, 255, 255);
    font-size: 18px;
  }
  .home-testimonials {
    gap: var(--dl-space-space-fiveunits);
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-items: flex-start;
    padding-top: 120px;
    flex-direction: column;
  }
  .home-header2 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
  .home-caption3 {
    color: #ffffff;
    letter-spacing: 5%;
    text-transform: uppercase;
  }
  .home-controls {
    gap: var(--dl-space-space-halfunit);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  .home-icon2 {
    fill: #61616B;
    width: 24px;
    cursor: pointer;
    height: 24px;
  }
  .home-text064 {
    color: #ffffff;
    font-style: normal;
    font-weight: 300;
  }
  .home-icon4 {
    fill: #ffffff;
    width: 24px;
    cursor: pointer;
    height: 24px;
  }
  .home-row3 {
    gap: var(--dl-space-space-oneandhalfunits);
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: flex-start;
    flex-direction: row;
  }
  .home-quote1 {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
  .home-gradiant {
    top: 0px;
    right: 0px;
    width: 100px;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: flex-start;
    flex-direction: row;
    background-image: linear-gradient(90deg, rgba(39, 39, 45, 0) 3.00%,rgba(39, 39, 45, 0.5) 33.00%,rgb(39, 39, 45) 100.00%);
  }
  .home-book {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: var(--dl-space-space-fiveunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-fiveunits);
    background-color: #E5FE58;
  }
  .home-content1 {
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
  .home-left {
    gap: var(--dl-space-space-threeunits);
    display: flex;
    max-width: 810px;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text065 {
    font-size: 54px;
    font-weight: initial;
    line-height: 65px;
  }
  .home-button2 {
    color: rgb(255, 255, 255);
    font-size: 24px;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-oneandhalfunits);
    border-radius: 70px;
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-unit);
    text-transform: lowercase;
    background-color: rgb(0, 0, 0);
  }
  .home-image12 {
    height: 400px;
    object-fit: cover;
  }
  .home-section1 {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 120px;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    padding-bottom: 120px;
    background-color: #244444;
  }
  .home-about-us {
    gap: var(--dl-space-space-fiveunits);
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-items: flex-start;
    flex-direction: column;
  }
  .home-header3 {
    gap: var(--dl-space-space-threeunits);
    width: 100%;
    display: flex;
    max-width: 1000px;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-caption4 {
    color: #ffffff;
    letter-spacing: 5%;
    text-transform: uppercase;
  }
  .home-description1 {
    color: rgb(255, 255, 255);
    font-size: 54px;
    font-style: normal;
    font-weight: 400;
    line-height: 65px;
  }
  .home-statistics {
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: var(--dl-space-space-threeunits);
    border-color: #ffffff;
    flex-direction: row;
    padding-bottom: var(--dl-space-space-threeunits);
    justify-content: space-between;
    border-top-width: 1px;
    border-bottom-width: 1px;
  }
  .home-statistic {
    gap: var(--dl-space-space-unit);
    width: 272px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-text067 {
    color: rgb(255, 255, 255);
    font-size: 54px;
    line-height: 65px;
  }
  .home-text068 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    text-align: center;
    line-height: 27px;
  }
  .home-statistic1 {
    gap: var(--dl-space-space-unit);
    width: 272px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-text069 {
    color: rgb(255, 255, 255);
    font-size: 54px;
    line-height: 65px;
  }
  .home-text070 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    text-align: center;
    line-height: 27px;
  }
  .home-statistic2 {
    gap: var(--dl-space-space-unit);
    width: 272px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-text071 {
    color: rgb(255, 255, 255);
    font-size: 54px;
    line-height: 65px;
  }
  .home-text072 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    text-align: center;
    line-height: 27px;
  }
  .home-statistic3 {
    gap: var(--dl-space-space-unit);
    width: 272px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-text073 {
    color: rgb(255, 255, 255);
    font-size: 54px;
    line-height: 65px;
  }
  .home-text074 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    text-align: center;
    line-height: 27px;
  }
  .home-dna {
    gap: var(--dl-space-space-threeunits);
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: var(--dl-space-space-threeunits);
    padding-left: 140px;
    flex-direction: column;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-caption5 {
    color: rgb(255, 255, 255);
    letter-spacing: 5%;
    text-transform: uppercase;
  }
  .home-description2 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 54px;
  }
  .home-description3 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 54px;
  }
  .home-gallery1 {
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-end;
    flex-direction: row;
    padding-bottom: 120px;
  }
  .home-image13 {
    width: 640px;
    z-index: 10;
    object-fit: cover;
  }
  .home-image14 {
    top: 370px;
    right: 0px;
    width: 760px;
    bottom: 0px;
    position: absolute;
    object-fit: cover;
  }
  .home-recruit {
    gap: var(--dl-space-space-fiveunits);
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .home-text075 {
    color: #ffffff;
    font-size: 54px;
    max-width: 1000px;
    font-style: normal;
    font-weight: 400;
    line-height: 65px;
  }
  .home-sections {
    gap: var(--dl-space-space-threeunits);
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
  .home-section2 {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text076 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    max-width: 1000px;
    line-height: 36px;
  }
  .home-text077 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    max-width: 1000px;
    line-height: 27px;
  }
  .home-section3 {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text078 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    max-width: 1000px;
    line-height: 36px;
  }
  .home-text079 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    max-width: 1000px;
    line-height: 27px;
  }
  .home-section4 {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text080 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    max-width: 1000px;
    line-height: 36px;
  }
  .home-text081 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    max-width: 1000px;
    line-height: 27px;
  }
  .home-section5 {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-text082 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    max-width: 1000px;
    line-height: 36px;
  }
  .home-text083 {
    color: rgb(255, 255, 255);
    font-size: 18px;
    max-width: 1000px;
    line-height: 27px;
  }
  .home-button3 {
    color: rgb(39, 39, 45);
    font-size: 24px;
    line-height: 30px;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-oneandhalfunits);
    border-radius: 70px;
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-unit);
    text-transform: lowercase;
    background-color: rgb(229, 254, 88);
  }
  .home-footer {
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-items: flex-start;
    padding-top: var(--dl-space-space-fiveunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-fiveunits);
  }
  .home-header4 {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: var(--dl-space-space-threeunits);
    border-color: #61616B;
    flex-direction: row;
    padding-bottom: var(--dl-space-space-threeunits);
    justify-content: space-between;
    border-bottom-width: 1px;
  }
  .home-branding2 {
    color: rgb(39, 39, 45);
    font-size: 30px;
  }
  .home-socials {
    gap: var(--dl-space-space-twounits);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  .home-link03 {
    display: contents;
  }
  .home-link04 {
    display: contents;
  }
  .home-link05 {
    display: contents;
  }
  .home-link06 {
    display: contents;
  }
  .home-link07 {
    display: contents;
  }
  .home-link08 {
    display: contents;
  }
  .home-link09 {
    display: contents;
  }
  .home-link10 {
    display: contents;
  }
  .home-content2 {
    gap: var(--dl-space-space-fiveunits);
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: var(--dl-space-space-fiveunits);
    border-color: #61616B;
    flex-direction: row;
    padding-bottom: var(--dl-space-space-fiveunits);
    justify-content: flex-start;
    border-bottom-width: 1px;
  }
  .home-contact {
    gap: var(--dl-space-space-unit);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-email {
    color: rgb(39, 39, 45);
    font-size: 30px;
  }
  .home-number {
    color: rgb(39, 39, 45);
    font-size: 30px;
  }
  .home-links-row {
    gap: 128px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
  }
  .home-links-column {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-link11 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link11:hover {
    opacity: 0.7;
  }
  .home-link12 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link12:hover {
    opacity: 0.7;
  }
  .home-link13 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link13:hover {
    opacity: 0.7;
  }
  .home-link14 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link14:hover {
    opacity: 0.7;
  }
  .home-links-column1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-link15 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link15:hover {
    opacity: 0.7;
  }
  .home-link16 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link16:hover {
    opacity: 0.7;
  }
  .home-link17 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link17:hover {
    opacity: 0.7;
  }
  .home-link18 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link18:hover {
    opacity: 0.7;
  }
  .home-link19 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link19:hover {
    opacity: 0.7;
  }
  .home-link20 {
    color: rgb(39, 39, 45);
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
    line-height: 32px;
  }
  .home-link20:hover {
    opacity: 0.7;
  }
  .home-locations {
    gap: var(--dl-space-space-threeunits);
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: var(--dl-space-space-fiveunits);
    flex-direction: row;
  }
  .home-location {
    gap: var(--dl-space-space-oneandhalfunits);
    flex: 1;
    display: flex;
    max-width: 270px;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title08 {
    color: rgb(39, 39, 45);
    font-size: 30px;
  }
  .home-details07 {
    color: rgb(39, 39, 45);
    font-size: 16px;
    line-height: 24px;
  }
  .home-location1 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex: 1;
    display: flex;
    max-width: 270px;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title09 {
    color: rgb(39, 39, 45);
    font-size: 30px;
  }
  .home-details08 {
    color: rgb(39, 39, 45);
    font-size: 16px;
    line-height: 24px;
  }
  .home-location2 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex: 1;
    display: flex;
    max-width: 270px;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title10 {
    color: rgb(39, 39, 45);
    font-size: 30px;
  }
  .home-details09 {
    color: rgb(39, 39, 45);
    font-size: 16px;
    line-height: 24px;
  }
  .home-location3 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex: 1;
    display: flex;
    max-width: 270px;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-title11 {
    color: rgb(39, 39, 45);
    font-size: 30px;
  }
  .home-details10 {
    color: rgb(39, 39, 45);
    font-size: 16px;
    line-height: 24px;
  }
  .home-socials1 {
    gap: var(--dl-space-space-twounits);
    display: none;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  @media(max-width: 991px) {
    .home-navbar-interactive {
      gap: var(--dl-space-space-fourunits);
      justify-content: center;
    }
    .home-text001 {
      line-height: 30px;
    }
    .home-text002 {
      line-height: 30px;
    }
    .home-text004 {
      line-height: 30px;
    }
    .home-hero {
      gap: var(--dl-space-space-fourunits);
      padding-top: var(--dl-space-space-threeunits);
      padding-bottom: var(--dl-space-space-threeunits);
    }
    .home-text005 {
      font-size: 32px;
    }
    .home-image02 {
      display: none;
    }
    .home-hero-image {
      padding-top: var(--dl-space-space-unit);
      padding-left: var(--dl-space-space-threeunits);
      padding-right: var(--dl-space-space-threeunits);
      padding-bottom: var(--dl-space-space-unit);
    }
    .home-who {
      gap: var(--dl-space-space-fourunits);
      margin-bottom: 750px;
      padding-bottom: 0px;
    }
    .home-header1 {
      gap: var(--dl-space-space-oneandhalfunits);
      padding-left: var(--dl-space-space-oneandhalfunits);
      padding-right: var(--dl-space-space-oneandhalfunits);
    }
    .home-heading {
      gap: var(--dl-space-space-unit);
    }
    .home-text006 {
      font-size: 32px;
    }
    .home-text007 {
      font-size: 16px;
      line-height: 28px;
    }
    .home-button1 {
      font-size: 16px;
    }
    .home-preview {
      align-items: flex-end;
      padding-left: var(--dl-space-space-oneandhalfunits);
      padding-right: var(--dl-space-space-oneandhalfunits);
      flex-direction: column;
    }
    .home-image04 {
      width: 80%;
      height: 100%;
    }
    .home-image05 {
      width: 100%;
    }
    .home-video {
      top: auto;
      left: 24px;
      right: auto;
      bottom: -729px;
    }
    .home-information {
      gap: var(--dl-space-space-threeunits);
      padding-top: var(--dl-space-space-fourunits);
      padding-left: var(--dl-space-space-oneandhalfunits);
      padding-right: var(--dl-space-space-oneandhalfunits);
      padding-bottom: var(--dl-space-space-fourunits);
      border-top-width: 0px;
    }
    .home-purpose {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-caption {
      font-size: 12px;
    }
    .home-description {
      font-size: 16px;
      line-height: 28px;
    }
    .home-caption1 {
      font-size: 12px;
    }
    .home-list {
      grid-gap: 16px;
      grid-template-columns: auto;
    }
    .home-accordion {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-title {
      font-size: 32px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-text008 {
      font-size: 16px;
    }
    .home-text009 {
      font-size: 16px;
    }
    .home-text010 {
      font-size: 16px;
    }
    .home-text011 {
      font-size: 16px;
    }
    .home-text012 {
      font-size: 16px;
    }
    .home-item {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-title01 {
      font-size: 32px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-text013 {
      font-size: 16px;
    }
    .home-text014 {
      font-size: 16px;
    }
    .home-text015 {
      font-size: 16px;
    }
    .home-text016 {
      font-size: 16px;
    }
    .home-text017 {
      font-size: 16px;
    }
    .home-item1 {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-title02 {
      font-size: 32px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-text018 {
      font-size: 16px;
    }
    .home-text019 {
      font-size: 16px;
    }
    .home-text020 {
      font-size: 16px;
    }
    .home-text021 {
      font-size: 16px;
    }
    .home-text022 {
      font-size: 16px;
    }
    .home-item2 {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-title03 {
      font-size: 32px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-text023 {
      font-size: 16px;
    }
    .home-text024 {
      font-size: 16px;
    }
    .home-text025 {
      font-size: 16px;
    }
    .home-text026 {
      font-size: 16px;
    }
    .home-text027 {
      font-size: 16px;
    }
    .home-item3 {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-title04 {
      font-size: 32px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-text028 {
      font-size: 16px;
    }
    .home-text029 {
      font-size: 16px;
    }
    .home-text030 {
      font-size: 16px;
    }
    .home-text031 {
      font-size: 16px;
    }
    .home-text032 {
      font-size: 16px;
    }
    .home-item4 {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-title05 {
      font-size: 32px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-text033 {
      font-size: 16px;
    }
    .home-text034 {
      font-size: 16px;
    }
    .home-text035 {
      font-size: 16px;
    }
    .home-text036 {
      font-size: 16px;
    }
    .home-text037 {
      font-size: 16px;
    }
    .home-item5 {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-title06 {
      font-size: 32px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-text038 {
      font-size: 16px;
    }
    .home-text039 {
      font-size: 16px;
    }
    .home-text040 {
      font-size: 16px;
    }
    .home-text041 {
      font-size: 16px;
    }
    .home-text042 {
      font-size: 16px;
    }
    .home-item6 {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-title07 {
      font-size: 32px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-text043 {
      font-size: 16px;
    }
    .home-text044 {
      font-size: 16px;
    }
    .home-text045 {
      font-size: 16px;
    }
    .home-text046 {
      font-size: 16px;
    }
    .home-text047 {
      font-size: 16px;
    }
    .home-section {
      padding-top: var(--dl-space-space-fourunits);
      padding-bottom: var(--dl-space-space-fourunits);
    }
    .home-case-studies {
      gap: var(--dl-space-space-threeunits);
      padding-bottom: var(--dl-space-space-fourunits);
    }
    .home-caption2 {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-text048 {
      font-size: 12px;
    }
    .home-date-range {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text049 {
      font-size: 12px;
    }
    .home-text050 {
      font-size: 12px;
    }
    .home-text051 {
      font-size: 12px;
    }
    .home-gallery {
      gap: var(--dl-space-space-threeunits);
    }
    .home-row {
      gap: var(--dl-space-space-threeunits);
      width: 100%;
      flex-direction: column;
    }
    .home-case {
      gap: var(--dl-space-space-unit);
      width: 100%;
      margin-top: 0px;
    }
    .home-image06 {
      width: 100%;
      height: 210px;
    }
    .home-heading1 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text052 {
      font-size: 24px;
      line-height: 30px;
    }
    .home-text053 {
      font-size: 16px;
    }
    .home-case1 {
      gap: var(--dl-space-space-unit);
    }
    .home-image07 {
      width: 100%;
      height: 210px;
    }
    .home-heading2 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text054 {
      font-size: 24px;
    }
    .home-text055 {
      font-size: 16px;
    }
    .home-row1 {
      gap: var(--dl-space-space-threeunits);
      width: 100%;
      flex-direction: column;
    }
    .home-case2 {
      gap: var(--dl-space-space-unit);
      width: 100%;
    }
    .home-image08 {
      width: 100%;
      height: 210px;
    }
    .home-heading3 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text056 {
      font-size: 24px;
    }
    .home-text057 {
      font-size: 16px;
    }
    .home-case3 {
      gap: var(--dl-space-space-unit);
      width: 100%;
      padding-top: 0px;
    }
    .home-image09 {
      width: 100%;
      height: 210px;
    }
    .home-heading4 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text058 {
      font-size: 24px;
    }
    .home-text059 {
      font-size: 16px;
    }
    .home-row2 {
      gap: var(--dl-space-space-threeunits);
      width: 100%;
      flex-direction: column;
    }
    .home-case4 {
      gap: var(--dl-space-space-unit);
      width: 100%;
      padding-top: 0px;
    }
    .home-image10 {
      width: 100%;
      height: 210px;
    }
    .home-heading5 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text060 {
      font-size: 24px;
    }
    .home-text061 {
      font-size: 16px;
    }
    .home-case5 {
      gap: var(--dl-space-space-unit);
      width: 100%;
    }
    .home-image11 {
      width: 100%;
      height: 210px;
    }
    .home-heading6 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text062 {
      font-size: 24px;
    }
    .home-text063 {
      font-size: 16px;
    }
    .home-testimonials {
      gap: var(--dl-space-space-threeunits);
      padding-top: var(--dl-space-space-fourunits);
    }
    .home-controls {
      display: none;
    }
    .home-row3 {
      gap: var(--dl-space-space-threeunits);
      flex-direction: column;
    }
    .home-book {
      padding-top: var(--dl-space-space-threeunits);
      padding-bottom: var(--dl-space-space-fourunits);
    }
    .home-content1 {
      gap: var(--dl-space-space-oneandhalfunits);
      flex-direction: column-reverse;
      justify-content: center;
    }
    .home-left {
      gap: var(--dl-space-space-oneandhalfunits);
      align-items: center;
    }
    .home-text065 {
      font-size: 32px;
      text-align: center;
      line-height: 38px;
    }
    .home-text066 {
      font-size: 16px;
    }
    .home-image12 {
      height: 220px;
    }
    .home-section1 {
      padding-top: var(--dl-space-space-fourunits);
      padding-left: var(--dl-space-space-oneandhalfunits);
      padding-right: var(--dl-space-space-oneandhalfunits);
      padding-bottom: var(--dl-space-space-fourunits);
    }
    .home-about-us {
      gap: var(--dl-space-space-threeunits);
    }
    .home-header3 {
      gap: var(--dl-space-space-oneandhalfunits);
    }
    .home-caption4 {
      font-size: 12px;
    }
    .home-description1 {
      font-size: 32px;
      line-height: 38px;
    }
    .home-statistics {
      gap: var(--dl-space-space-threeunits);
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .home-text067 {
      font-size: 32px;
      line-height: 38px;
    }
    .home-text068 {
      font-size: 16px;
      line-height: 24px;
    }
    .home-text069 {
      font-size: 32px;
      line-height: 38px;
    }
    .home-text070 {
      font-size: 16px;
      line-height: 24px;
    }
    .home-text071 {
      font-size: 32px;
      line-height: 38px;
    }
    .home-text072 {
      font-size: 16px;
      line-height: 24px;
    }
    .home-text073 {
      font-size: 32px;
      line-height: 38px;
    }
    .home-text074 {
      font-size: 16px;
      line-height: 24px;
    }
    .home-dna {
      gap: var(--dl-space-space-oneandhalfunits);
      padding-top: 0px;
      padding-left: 0px;
      padding-bottom: 0px;
    }
    .home-caption5 {
      font-size: 12px;
    }
    .home-description2 {
      font-size: 16px;
      line-height: 28px;
    }
    .home-description3 {
      font-size: 16px;
      line-height: 28px;
    }
    .home-recruit {
      gap: var(--dl-space-space-threeunits);
      padding-top: 0px;
    }
    .home-text075 {
      font-size: 32px;
      line-height: 38px;
    }
    .home-sections {
      gap: var(--dl-space-space-oneandhalfunits);
      flex-direction: column;
    }
    .home-section2 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text076 {
      font-size: 24px;
      line-height: 30px;
    }
    .home-text077 {
      font-size: 16px;
      line-height: 24px;
    }
    .home-section3 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text078 {
      font-size: 24px;
      line-height: 30px;
    }
    .home-text079 {
      font-size: 16px;
      line-height: 24px;
    }
    .home-section4 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text080 {
      font-size: 24px;
      line-height: 30px;
    }
    .home-text081 {
      font-size: 16px;
      line-height: 24px;
    }
    .home-section5 {
      gap: var(--dl-space-space-halfunit);
    }
    .home-text082 {
      font-size: 24px;
      line-height: 30px;
    }
    .home-text083 {
      font-size: 16px;
      line-height: 24px;
    }
    .home-text084 {
      font-size: 16px;
      line-height: 20px;
    }
    .home-footer {
      padding-top: var(--dl-space-space-fourunits);
      padding-left: var(--dl-space-space-oneandhalfunits);
      padding-right: var(--dl-space-space-oneandhalfunits);
      padding-bottom: var(--dl-space-space-threeunits);
    }
    .home-header4 {
      padding-top: 0px;
      padding-bottom: var(--dl-space-space-halfunit);
    }
    .home-branding2 {
      font-size: 18px;
    }
    .home-socials {
      display: none;
    }
    .home-content2 {
      gap: var(--dl-space-space-threeunits);
      align-items: flex-start;
      padding-top: var(--dl-space-space-threeunits);
      flex-direction: column;
      padding-bottom: var(--dl-space-space-threeunits);
    }
    .home-email {
      font-size: 24px;
    }
    .home-number {
      font-size: 24px;
    }
    .home-links-row {
      gap: var(--dl-space-space-oneandhalfunits);
      flex-direction: column;
    }
    .home-locations {
      padding-top: var(--dl-space-space-threeunits);
      border-color: var(--dl-color-gray-black);
      flex-direction: column;
      padding-bottom: var(--dl-space-space-threeunits);
      border-bottom-width: 1px;
    }
    .home-title08 {
      font-size: 24px;
    }
    .home-title09 {
      font-size: 24px;
    }
    .home-title10 {
      font-size: 24px;
    }
    .home-title11 {
      font-size: 24px;
    }
    .home-socials1 {
      width: 100%;
      display: flex;
      padding-top: var(--dl-space-space-threeunits);
      flex-direction: column;
    }
    .home-row4 {
      gap: var(--dl-space-space-fourunits);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .home-row5 {
      gap: var(--dl-space-space-fourunits);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media(max-width: 767px) {
    .home-navbar-interactive {
      padding-top: var(--dl-space-space-twounits);
      justify-content: space-between;
    }
    .home-desktop-menu {
      display: none;
    }
    .home-work-with-us {
      padding-left: var(--dl-space-space-unit);
      padding-right: var(--dl-space-space-unit);
    }
    .home-text001 {
      display: none;
    }
    .home-image {
      width: 16px;
      height: 14px;
      display: flex;
    }
    .home-burger-menu {
      display: flex;
      align-self: flex-start;
    }
    .home-work-with-us1 {
      padding-left: var(--dl-space-space-unit);
      padding-right: var(--dl-space-space-unit);
    }
    .home-text002 {
      display: none;
    }
    .home-image01 {
      width: 16px;
      height: 14px;
      display: flex;
    }
    .home-branding1 {
      max-width: 80%;
    }
    .home-work-with-us2 {
      padding-left: var(--dl-space-space-unit);
      padding-right: var(--dl-space-space-unit);
    }
    .home-image03 {
      width: auto;
      height: 220px;
    }
    .home-who {
      margin-bottom: 0px;
    }
    .home-video {
      width: 85%;
      bottom: -500px;
      z-index: 100;
      position: static;
      align-self: center;
      margin-top: -48px;
    }
    .home-video1 {
      margin-top: 0px;
    }
    .home-image13 {
      width: 350px;
    }
    .home-image14 {
      width: 350px;
    }
  }
  @media(max-width: 479px) {
    .home-mobile-menu {
      padding: 16px;
    }
    .home-image05 {
      margin-left: -120px;
    }
    .home-video {
      bottom: -419px;
    }
    .home-image13 {
      width: 240px;
    }
    .home-image14 {
      top: 250px;
      width: 240px;
    }
  }
  </style>
  