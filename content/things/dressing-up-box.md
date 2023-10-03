---
title: "Dressing-Up Box"
aliases: [dressing-up boxes]
layout: page
order: 115
tags: thing
object:
  - letter: "D"
    name: "Dressing-Up Box"
    thumbnail: "figures/things/dressing-up-box.jpg"
    artist: Jean-Antoine Watteau
    time_span: 1684–1721
    owner:
      - first_name: Jean-Antoine
        last_name: Watteau
        years: 1684–1721
    type: [Container, Prop, Tool]
    theme: [Education, Making, Studio]
    material: [Textile | Canvas, Textile | Silk]
mentions: [mannequin, sketchbook, palette, écorché, wig]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Antoine Watteau was celebrated in his own day** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.