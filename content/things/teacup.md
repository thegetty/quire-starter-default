---
title: "Teacup"
aliases: [teacups]
layout: page
order: 148
tags: thing
object:
  - letter: "T"
    name: "Teacup"
    thumbnail: "figures/things/teacup.jpg"
    artist: Jean-Marc Nattier
    time_span: 1685–1766
    owner:
      - first_name: Jean-Marc
        last_name: Nattier
        years: 1685–1766
    type: [Collectible, Commodity, Intoxicant, Tableware]
    theme: [Food and Drink, Global Commerce, Leisure, Luxury, Studio]
    material: [Metal | Silver, Mineral | Clay]
mentions: [intaglio]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**The court portrait painter Jean-Marc Nattier owned multiple teacups.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.