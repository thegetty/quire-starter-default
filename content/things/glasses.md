---
title: "Glasses"
aliases: []
layout: page
order: 119
tags: thing
object:
  - letter: "G"
    name: "Glasses"
    thumbnail: "figures/things/glasses.jpg"
    artist: François-André Vincent
    time_span: 1746–1816
    owner:
      - first_name: François-André
        last_name: Vincent
        years: 1746–1816
    type: [Apparel, Instrument]
    theme: [Health/Medicine, Invention, Making, Studio]
    material: [Metal | Bronze, Metal | Steel, Synthetic Materials | Glass]
mentions: [camera obscura]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**It is difficult to take one’s eyes off François-André Vincent’s glasses.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.