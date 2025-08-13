---
layout: default
permalink: /cv/
title: CV
nav: true
nav_order: 6
cv_pdf: CV_Qiu_Aug_13_2025.pdf # you can also use external links here
description: My academic CV (updated on Aug 2025).
# toc:
#   sidebar: left
---

<h1 style="text-align: center; font-weight: 500; font-size: 1rem; margin-bottom: 0.2em;">
  My academic CV (updated on Aug 2025)
</h1>

<p style="text-align: center; font-size: 1.05em;">
  <a href="{{ page.cv_pdf | prepend: '/assets/pdf/' | relative_url }}" target="_blank"> :inbox_tray: Download PDF </a>
</p>

<p style="text-align: center;">
<iframe 
  id="cvframe"
  src="{{ '/assets/pdf/' | append: page.cv_pdf | relative_url }}"
  width="88%" 
  height="600px" 
  style="border: none; margin-top: 1rem;"
></iframe>
</p>