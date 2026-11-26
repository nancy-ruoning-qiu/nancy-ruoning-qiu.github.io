---
layout: page
title: Personal
permalink: /personal/
description: Fun facts about me :)	
nav: true
nav_order: 5
---

Outside of my academic work, I enjoy doing hands-on hobbies such as origami folding, journaling, and drawing. I start learning how to watercolor painting lately and taking photos of landscapes whenever I have the chance.

### :jigsaw: Origami Folding

Here are three of my favorite origami designs. I folded them myself, based on the following models:

<style>
  .origami-overlay-container {
    position: relative;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .origami-overlay-image {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }
  .origami-overlay-container:hover .origami-overlay-image {
    transform: scale(1.02); /* lightly enlarged */
  }
  .origami-overlay-caption {
    position: absolute;
    bottom: 0;
    background: rgba(0, 139, 139, 0.7); /* mint blue + half transparent */
    color: white;
    width: 100%;
    padding: 0.3em 0.5em;
    font-size: 0.75em;
    text-align: center;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .origami-overlay-container:hover .origami-overlay-caption {
    opacity: 1;
  }
</style>

<div style="display: flex; gap: 1.5em; justify-content: center; flex-wrap: wrap;">
  <div class="origami-overlay-container" style="width: 220px;">
    <img class="origami-overlay-image" src="/assets/img/personal/origami2_I_heart_cat.jpg" alt="I Heart Cat">
    <div class="origami-overlay-caption">
      Model: I Heart Cat<br>Designer: Michelle Fung
    </div>
  </div>
  <div class="origami-overlay-container" style="width: 220px;">
    <img class="origami-overlay-image" src="/assets/img/personal/origami3_wintertale.jpg" alt="Winter Tale">
    <div class="origami-overlay-caption">
      Model: Winter Tale<br>Designer: Valentina Minayeva
    </div>
  </div>
  <div class="origami-overlay-container" style="width: 220px;">
    <img class="origami-overlay-image" src="/assets/img/personal/origami1_anise.jpg" alt="Anise">
    <div class="origami-overlay-caption">
      Model: Anise<br>Designer: Ekaterina Lukasheva
    </div>
  </div>
</div>

<div style="margin-top: 3em;"></div>

### :camera_flash: Photography

In Fall 2026, two of my photographs were selected for *Dream Destinations*, a student photography and digital art exhibition organized by UC San Diego's University Centers and displayed at the Price Center!

<!-- PhotoSwipe CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.css" />

<style>
  /* Featured photo gallery */
  .featured-gallery {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin: 1.5em 0 0.5em;
  }

  .featured-photo {
    position: relative;
    display: block;
    width: 48%;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    cursor: zoom-in;
  }

  .featured-photo img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  .featured-photo:hover img {
    transform: scale(1.02);
  }

  /* Mint-blue hover caption */
  .featured-photo-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.4em 0.5em;
    background: rgba(0, 139, 139, 0.7);
    color: white;
    font-size: 0.75em;
    text-align: center;
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }

  .featured-photo:hover .featured-photo-caption,
  .featured-photo:focus-visible .featured-photo-caption {
    opacity: 1;
  }

  /* Regular photography gallery */
  .gallery-photo {
    display: block;
    width: 80%;
    max-width: 900px;
    margin: 0 auto 1.5em;
    overflow: hidden;
    border-radius: 0px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    cursor: zoom-in;
  }

  .gallery-photo img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  .gallery-photo:hover img {
    transform: scale(1.02);
  }

  /* Mobile layout */
  @media (max-width: 600px) {
    .featured-gallery {
      flex-direction: column;
      align-items: center;
    }

    .featured-photo,
    .gallery-photo {
      width: 100%;
    }
  }
</style>

<!-- Featured photographs -->
<div id="featured-gallery" class="featured-gallery">

  <!-- Scripps Pier -->
  <a class="featured-photo"
     href="/assets/img/personal/NancyQiu_Scripps_Pier.jpeg"
     data-pswp-width="6000"
     data-pswp-height="4000">

    <img src="/assets/img/personal/Scripps_Pier_PC_Display.jpg"
         alt="Scripps Pier: What one saw after Scrippshenge."
         loading="lazy">

    <span class="featured-photo-caption">
      click to view the original photo
    </span>
  </a>

  <!-- Xmas Town -->
  <a class="featured-photo"
     href="/assets/img/personal/NancyQiu_Xmas_Town.jpeg"
     data-pswp-width="6000"
     data-pswp-height="4000">

    <img src="/assets/img/personal/Xmas_Town_PC_Display.jpg"
         alt="Xmas Town: It is the holiday season again."
         loading="lazy">

    <span class="featured-photo-caption">
      click to view the original photo
    </span>
  </a>

</div>

<p style="text-align: center; font-size: 0.85em; color: var(--global-text-color-light);">
  Dream Destinations · UC San Diego Price Center · Fall 2026
</p>

<!-- Other photographs -->
<p>More moments I captured:</p>

<div id="gallery" style="margin: 2em 0;">

  <a class="gallery-photo"
     href="/assets/img/personal/SeattleDSCF0663.jpg"
     data-pswp-width="2048"
     data-pswp-height="1365">
    <img src="/assets/img/personal/SeattleDSCF0663.jpg"
         alt="Seattle landscape"
         loading="lazy">
  </a>

  <a class="gallery-photo"
     href="/assets/img/personal/DSCF0686.jpg"
     data-pswp-width="2048"
     data-pswp-height="1365">
    <img src="/assets/img/personal/DSCF0686.jpg"
         alt="Landscape photograph"
         loading="lazy">
  </a>

  <a class="gallery-photo"
     href="/assets/img/personal/DSCF0172.jpg"
     data-pswp-width="2048"
     data-pswp-height="1365">
    <img src="/assets/img/personal/DSCF0172.jpg"
         alt="Landscape photograph"
         loading="lazy">
  </a>

  <a class="gallery-photo"
     href="/assets/img/personal/DSCF0181.jpg"
     data-pswp-width="2048"
     data-pswp-height="1365">
    <img src="/assets/img/personal/DSCF0181.jpg"
         alt="Landscape photograph"
         loading="lazy">
  </a>

  <a class="gallery-photo"
     href="/assets/img/personal/DSCF0188.jpg"
     data-pswp-width="2048"
     data-pswp-height="1365">
    <img src="/assets/img/personal/DSCF0188.jpg"
         alt="Landscape photograph"
         loading="lazy">
  </a>

</div>

<!-- PhotoSwipe JavaScript -->
<script type="module">
  import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js';

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#featured-gallery, #gallery',
    children: 'a',
    pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js')
  });

  lightbox.init();
</script>
