<template>
  <div class="container">
    <section class="section">
      <div class="section__category">
        <div class="title">
          <h2 class="font1 font1--category">Category</h2>
        </div>
        <div class="arrow">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="section__slider">
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
          :slides-per-view="5"
          :loop="true"
          :autoplay="{
            delay: 8000,
          }"
          :pagination="{
            el: '.swiper-pagination',
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <SwiperSlide v-for="(item, index) in categories" :key="index">
            <Category
              key="slide"
              :category="item.category"
              :img-c="item.imgC"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section class="section2">
      <h2 class="bnm mb-[50px]"><span>Other Products</span></h2>
      <div class="section2__card">
        <Card
          p1="Beef-Primary Cuts"
          productname="Product name"
          p2="Aliqua id fugiat nostrud irure ."
          img="21.png"
          price-n="$3.99"
          price="$5.99"
        />
        <Card
          p1="Beef-Primary Cuts"
          productname="Product name"
          p2="Aliqua id fugiat nostrud irure ."
          img="22.png"
          price-n="$3.99"
          price="$5.99"
        />
        <Card
          p1="Beef-Primary Cuts"
          productname="Product name"
          p2="Aliqua id fugiat nostrud irure ."
          img="23.png"
          price-n="$3.99"
          price="$5.99"
        />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const categories = ref([
  {
    category: 'ALL PRODUCT',
    imgC: '1.png',
  },
  {
    category: 'DOI TUNG PORK',
    imgC: '2.png',
  },
  {
    category: 'BEEF',
    imgC: '3.png',
  },
  {
    category: 'PORK',
    imgC: '4.png',
  },
  {
    category: 'SAUSAGE & BURGERS',
    imgC: '5.png',
  },
  {
    category: 'ALL PRODUCT',
    imgC: '1.png',
  },
  {
    category: 'DOI TUNG PORK',
    imgC: '2.png',
  },
  {
    category: 'BEEF',
    imgC: '3.png',
  },
  {
    category: 'PORK',
    imgC: '4.png',
  },
  {
    category: 'SAUSAGE & BURGERS',
    imgC: '5.png',
  },
]);
</script>
