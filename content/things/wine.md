---
title: "Wine"
aliases: []
layout: page
order: 155
tags: thing
object:
  - letter: "W"
    name: "Wine"
    thumbnail: "figures/things/wine.jpg"
    artist: Alexis Grimou
    time_span: 1678–1733
    owner:
      - first_name: Alexis
        last_name: Grimou
        years: 1678–1733
    type: [Intoxicant, Tableware]
    theme: [Community, Death, Everyday, Food and Drink, Global Commerce, Leisure]
    material: [Plant Matter, Synthetic Materials | Glass]
mentions: [sugar spoon, journal,sword, palette]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**From the historian’s perspective,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.