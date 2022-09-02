---
date: "2017-06-12"
draft: false
image: img/images/natlas_thumb.png
showonlyimage: true
title: Natlas
weight: 6
---

An atlas of citizen naturalist observations.
<!--more-->


[![NATLAS](/img/images/natlas.png)](https://matthewkling.github.io/natlas/)

[Update: since the tool launched, updates to certain web browsers have made them incompatible with this tool. At last check, NATLAS was working nicely in Safari but was buggy in Chrome. I hope to get this fixed soon.]

I finally got the excuse I needed to learn d3.js, while leading the data visualization portion of a recent team project with the National Park Service through the Bekeley DS421 program. We used iNaturalist data to create [NATLAS](https://matthewkling.github.io/natlas/), a little web app that lets users explore citizen science biodiversity observations made in national parks near San Francisco. If you don't know [iNaturalist](http://inaturalist.org), you should -- it's an awesome platform that lets users document species occurrences with a smartphone app, collectively generating a huge crowd-sourced dataset on what biodiversity is present when and where. And they open-source their data, empowering the rest of us to conduct research and conservation alayses or create applications like NATLAS.

NATLAS is an interactive dashboard that visualizes taxonomic, geographic, temporal, and human patterns in observations made in Point Reyes National Seashore and Golden Gate National Recreation Area. For now it's just a prototype with more locations and features planned in the future, but go ahead and play around.

The most fun piece is the sunburst plot in the upper left, a zoomable tree of life for all observed species in the park that also serves as a pie chart indicating the number of observations, observers, or species per taxon. There's something oddly compelling about clicking around the tree, I've spent more time doing that than I'd like to admit.

The scatterplot classifies every cell phone naturalist in the database, ranging from one-time dablers to seasoned devotees, and lets you explore the observations made by each one. The map and timelines are more self-explanatory. In the center, you can click to toggle between parks, between types of taxonomic tree, and between summarizing data by observers, observations, or species. Photos and more info for each taxon can be accessed by the link on the titlebar to the iNaturalist website.
