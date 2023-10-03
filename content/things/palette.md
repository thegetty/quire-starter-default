---
title: "Palette"
aliases: [palettes]
layout: page
order: 134
tags: thing
object:
  - letter: "P"
    name: "Palette"
    thumbnail: "figures/things/palette.jpg"
    artist: Elisabeth Vigée-Lebrun
    time_span: 1755–1842
    owner:
      - first_name: Elisabeth
        last_name: Vigée-Lebrun
        years: 1755–1842
    type: [Symbolic Thing, Tool]
    theme: [Education, Identity, Making, Memory, Studio]
    material: [Plant Matter | Wood, Synthetic Materials | Paint/Pigment]
mentions: [carriage, artmchair, color box, red lake, modeling stand, burin, sketchbook, decoration, relic, bed, table]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**On one memorable occasion early in her career,** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.