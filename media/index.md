---
layout: dvwrap
title: "Data visualization"
date:
modified:
excerpt:
ads: false
share: false
tags: []
image:
  feature: wind_temp_trails.png
  teaser:
---

<div class="tiles">
{% for post in site.categories.media %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->