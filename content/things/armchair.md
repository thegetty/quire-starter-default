---
title: "Armchair"
aliases: [armchairs]
layout: page
order: 102
tags: thing
object: 
  - letter: "A"
    name: "Armchair"
    thumbnail: "figures/things/armchair.jpg"
    artist: Jean-Honoré Fragonard
    time_span: 1732–1806
    owner:
      - first_name: Jean-Honoré
        last_name: Fragonard
        years: 1732–1806
    type: [Furniture]
    theme: [Administration, Louvre, Studio]
    material: [Animal | Leather/Parchment, Plant Matter | Cane, Plant Matter | Wood]
mentions: [palette, journal]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**In the 1790s, Jean-Honoré Fragonard stopped painting.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.