---
title: "Umbrella"
aliases: [umbrellas]
layout: page
order: 149
tags: thing
object:
  - letter: "U"
    name: "Umbrella"
    thumbnail: "figures/things/umbrella.jpg"
    artist: Jacques-Philippe Le Bas
    time_span: 1707–83
    owner:
      - first_name: Jacques-Philippe
        last_name: Le Bas
        years: 1707–83
    type: [Commodity, Instrument]
    theme: [Community, Everyday]
    material: [Plant Matter | Wood, Textile | Canvas, Textile | Silk]
mentions: [snuffbox, teacup, watch, sketchbook, carriage, dressing-up box]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**A rare green silk umbrella** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.