---
title: "Table"
aliases: [tables]
layout: page
order: 147
tags: thing
object:
  - letter: "T"
    name: "Table"
    thumbnail: "figures/things/table.jpg"
    artist: Jacques-Louis David
    time_span: 1748–1825
    owner:
      - first_name: Jacques-Louis
        last_name: David
        years: 1748–1825
    type: [Furniture, Heirloom, Prop, Symbolic Thing]
    theme: [Antiquity, Family, Louvre, Making, Studio]
    material: [Metal | Bronze, Metal | Gold/Gilding, Plant Matter | Wood]
mentions: [palette, modeling stand, handkerchief, harpsichord, relic, key, mannequin, sketchbook, bed, camera obscura]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**In August 1789, Jacques-Louis David exhibited at the Salon** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.