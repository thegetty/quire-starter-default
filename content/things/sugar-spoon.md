---
title: "Sugar Spoon"
aliases: [sugar spoons]
layout: page
order: 145
tags: thing
object:
  - letter: "S"
    name: "Sugar Spoon"
    thumbnail: "figures/things/sugar-spoon.jpg"
    artist: François-Hubert Drouais
    time_span: 1727–75
    owner:
      - first_name: François-Hubert
        last_name: Drouais
        years: 1727–75
    type: [Commodity, Intoxicant, Tableware]
    theme: [Food and Drink, Global Commerce]
    material: [Metal | Silver]
mention: [wine, teacup, snuffbox]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Did Drouais have a sweet tooth?** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.