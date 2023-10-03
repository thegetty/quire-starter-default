---
title: "Pastels"
aliases: [pastel]
layout: page
order: 135
tags: thing
object:
  - letter: "P"
    name: "Pastels"
    thumbnail: "figures/things/pastels.jpg"
    artist: Marie-Suzanne Giroust
    time_span: 1734–72
    owner:
      - first_name: Marie-Suzanne
        last_name: Giroust
        years: 1734–72
    type: [Tool]
    theme: [Making, Studio]
    material: [Mineral | Chalk, Synthetic Materials | Paint/Pigment]
mentions: [color box, handkerchief, '*crayon*', '*porte-crayon*', palette, red lake, wig, shell]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Clutching a tray of vibrantly colored pastel sticks,** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.