---
layout: page
title: Personal
permalink: /personal/
description: Fun facts about me :)	
nav: true
nav_order: 5
---

Outside of my academic work, I enjoy quiet, hands-on creative hobbies. I keep a handwritten journal, combining notes, sketches, and small decorations to reflect on daily life. I also enjoy folding origami and taking photos of landscapes, simple ways to slow down and stay attentive to my surroundings.

### :jigsaw: Origami Folding

Here are three of my favorite origami designs. I folded them myself, based on the following models:

<style>
  .origami-overlay-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .origami-overlay-image {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }
  .origami-overlay-container:hover .origami-overlay-image {
    transform: scale(1.02); /* 轻微放大 */
  }
  .origami-overlay-caption {
    position: absolute;
    bottom: 0;
    background: rgba(0, 139, 139, 0.7); /* mint blue + 半透明 */
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

Some moments I captured (via Fujifilm X-M5):

<!-- Photoswipe CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.css" />
<script type="module">
  import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js';
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js')
  });
  lightbox.init();
</script>

<!-- Gallery container -->
<div id="gallery" style="margin: 2em 0;">

  <p style="text-align: center;">
    <a href="/assets/img/personal/DSCF0172.jpg" data-pswp-width="2048" data-pswp-height="1365">
      <img src="/assets/img/personal/DSCF0172.jpg"
           alt="DSCF0172"
           style="width: 80%; max-width: 900px; display: inline-block; border-radius: 0; box-shadow: none;">
    </a>
  </p>

  <p style="text-align: center;">
    <a href="/assets/img/personal/DSCF0181.jpg" data-pswp-width="2048" data-pswp-height="1365">
      <img src="/assets/img/personal/DSCF0181.jpg"
           alt="DSCF0181"
           style="width: 80%; max-width: 900px; display: inline-block; border-radius: 0; box-shadow: none;">
    </a>
  </p>

  <p style="text-align: center;">
    <a href="/assets/img/personal/DSCF0188.jpg" data-pswp-width="2048" data-pswp-height="1365">
      <img src="/assets/img/personal/DSCF0188.jpg"
           alt="DSCF0188"
           style="width: 80%; max-width: 900px; display: inline-block; border-radius: 0; box-shadow: none;">
    </a>
  </p>

</div>