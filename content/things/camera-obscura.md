---
title: "Camera Obscura"
aliases: [camera obscuras]
layout: page
order: 108
tags: thing
object:
  - letter: "C"
    name: "Camera Obscura"
    thumbnail: "figures/things/camera-obscura.jpg"
    artist: Charles Parrocel
    time_span: 1688–1752
    owner:
      - first_name: Charles
        last_name: Parrocel
        years: 1688–1752
    type: [Instrument]
    theme: [Making, Studio]
    material: [Plant Matter | Wood, Synthetic Materials | Glass]
mentions: ['*porte-crayon*', quill, color box, palette, wine]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**A *chambre noire*, or camera obscura,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.