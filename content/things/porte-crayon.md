---
title: "*Porte-Crayon*"
aliases: ['*porte-crayons*', '*porte-crayon*']
layout: page
order: 137
tags: thing
object:
  - letter: "P"
    name: "*Porte-Crayon*"
    thumbnail: "figures/things/porte-crayon.jpg"
    artist: Jean-Baptiste Perronneau
    time_span: ca. 1715–83
    owner:
      - first_name: Jean-Baptiste
        last_name: Perronneau
        years: ca. 1715–83
        sort_years: 1715–1783
    type: [Companion, Tool]
    theme: [Identity, Studio]
    material: [Animal | Leather/Parchment, Metal | Silver, Mineral | Chalk]
mentions: [pastel, journal, will, handkerchief, watch, snuffbox]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**On 9 April 1767, the following ad appeared in the French newspaper** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.