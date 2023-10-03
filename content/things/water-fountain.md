---
title: "Water Fountain"
aliases: [water fountains]
layout: page
order: 152
tags: thing
object:
  - letter: "W"
    name: "Water Fountain"
    thumbnail: "figures/things/water-fountain.jpg"
    artist: Jean-Siméon Chardin
    time_span: 1699–1779
    owner:
      - first_name: Jean-Siméon
        last_name: Chardin
        years: 1699–1779
    type: [Instrument]
    theme: [Everyday, Family, Gender]
    material: [Metal | Copper]
mentions: [table, dressing-up box, intaglio, snuffbox, sword, gaming set, umbrella, shell, teacup]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**1731 was an important year for the still-life painter Jean-Siméon Chardin.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.