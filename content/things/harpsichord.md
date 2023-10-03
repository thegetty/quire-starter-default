---
title: "Harpsichord"
aliases: [harpsichords]
layout: page
order: 121
tags: thing
object:
  - letter: "H"
    name: "Harpsichord"
    thumbnail: "figures/things/harpsichord.jpg"
    artist: Jean-Marc Nattier
    time_span: 1685–1766
    owner:
      - first_name: Jean-Marc
        last_name: Nattier
        years: 1685–1766
      - first_name: Louis
        last_name: Tocqué
        years: 1696–1772
    type: [Heirloom, Instrument, Prop]
    theme: [Family, Gender]
    material: [Animal | Feather, Plant Matter | Wood, Synthetic Materials | Paint/Pigment]
mentions: [marriage contract, quill, water fountain, table, glasses, modeling stand, bed, table]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Though it resided at different times in the homes of two painters**—Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.