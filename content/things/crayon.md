---
title: "*Crayon*"
aliases: ['*crayons*']
layout: page
order: 111
tags: thing
object:
  - letter: "C"
    name: "*Crayon*"
    thumbnail: "figures/things/crayon.jpg"
    artist: Jean-Baptiste Huët
    time_span: 1745–1811
    owner:
      - first_name: Jean-Baptiste
        last_name: Huët
        years: 1745–1811
    type: [Tool]
    theme: [Education, Invention, Making, Studio]
    material: [Mineral | Chalk, Synthetic Materials | Paper]
mentions: ['*porte-crayon*']
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

***Crayon* is a generic term for a commonplace object** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.