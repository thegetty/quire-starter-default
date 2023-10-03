---
title: "Snuffbox"
aliases: [snuffboxes]
layout: page
order: 144
tags: thing
object:
  - letter: "S"
    name: "Snuffbox"
    thumbnail: "figures/things/snuffbox.jpg"
    artist: Jean-Baptiste Oudry
    time_span: 1686–1755
    owner:
      - first_name: Jean-Baptiste
        last_name: Oudry
        years: 1686–1755
    type: [Apparel, Collectible, Commodity, Container, Intoxicant]
    theme: [Global Commerce, Identity, Leisure, Luxury]
    material: [Metal | Gold/Gilding, Plant Matter, Synthetic Materials | Lacquer, Synthetic Materials | Paint/Pigment]
mentions: [handkerchief, watch, '*porte-crayons*', dog]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**The still-life painter Jean-Baptiste Oudry took snuff.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.