---
title: "Quill"
aliases: [quills]
layout: page
order: 138
tags: thing
object:
  - letter: "Q"
    name: "Quill"
    thumbnail: "figures/things/quill.jpg"
    artist: Étienne-Maurice Falconet
    time_span: 1716–91
    owner:
      - first_name: Étienne-Maurice
        last_name: Falconet
        years: 1716–91
        sort_years: 1716–1791
    type: [Commodity, Tool]
    theme: [Friendship, Identity]
    material: [Animal | Feather, Synthetic Materials | Ink, Synthetic Materials | Paper]
mentions: ['*porte-crayon*', book, journal, order book, marriage contract, will, handkerchief, sword, journal, harpsichor, carriage]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**The goose, observed Georges Louis Leclerc,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.