---
date: "2019-10-11"
draft: false
image: img/images/windscape_thumb.jpg
showonlyimage: true
title: Windscapes
weight: 1
---

Interactive visualization of wind dispersal landscapes.
<!--more-->


![windscape app screenshot](/img/images/windscape.png)

Lately I've been working a lot with wind data, as part of my reasearch exploring how global wind patterns shape dispersal of seeds, pollen, and spores between sites. [WINDSCAPE](http://matthewkling.net/shiny/windscape/) is a little interactive web tool I built (still very much under development and in beta) that models and visualizes the wind dispersal landscape, or windscape, for any location on earth. You just click the map to select a site, choose between "inbound" (upwind) or "outbound" (downwind) dispersal, and voila: a global map of relative accessibility by wind. 

These values are measured in 'wind hours' -- the time to reach a given location traveling by suface winds. The model utilizes the [`windscape` R package](https://github.com/matthewkling/windscape) I developed.  It integrates over decades of hourly wind data from the [Climate Forecast System Renanalysis](https://cfs.ncep.noaa.gov/cfsr/) to estimate long-term average wind travel times between locations. The screenshot below for example shows Hawaii's inbound windscape, i.e. how easy it is to get *to* Hawaii from various locations across the region traveling by near-surface winds.

![hawaii inbound windscape](/img/images/windscape_hawaii.png)

