---
title: "Burin"
aliases: [burins]
layout: page
order: 107
tags: thing
object:
  - letter: "B"
    name: "Burin"
    thumbnail: "figures/things/burin.jpg"
    artist: Renée-Elisabeth Marlié
    time_span: 1714–73
    owner:
      - first_name: Renée-Elisabeth
        last_name: Marlié
        years: 1714–73
    type: [Tool]
    theme: [Family, Gender, Making, Studio]
    material: [Metal | Steel, Plant Matter | Wood, Synthetic Materials | Paper]
mentions: [quill, '*crayon*', marriage contract]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**“A burin is a steel instrument for engraving on metal.”** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.