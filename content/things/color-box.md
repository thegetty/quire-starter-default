---
title: "Color Box"
aliases: [color-boxes, color-box]
layout: page
order: 110
tags: thing
object:
  - letter: "C"
    name: "Color Box"
    thumbnail: "figures/things/color-box.jpg"
    artist: Jean-Honoré Fragonard
    time_span: 1732–1806
    owner:
      - first_name: Jean-Honoré
        last_name: Fragonard
        years: 1732–1806
    type: [Container, Tool]
    theme: [Global Commerce, Making, Studio, Travel]
    material: [Plant Matter | Cork, Plant Matter | Wood, Synthetic Materials | Glass, Synthetic Materials | Paint/Pigment]
mentions: [palette, handkerchief, red lake, armchair]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Upstairs in the Villa-Musée Fragonard,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.