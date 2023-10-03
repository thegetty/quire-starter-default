---
title: "Book"
aliases: [books]
layout: page
order: 106
tags: thing
object:
  - letter: "B"
    name: "Book"
    thumbnail: "figures/things/book.jpg"
    artist: Gilles-Marie Oppenord
    time_span: 1672–1742
    owner:
      - first_name: Gilles-Marie
        last_name: Oppenord
        years: 1672–1742
      - first_name: Gabriel de
        last_name: Saint-Aubin
        years: 1724–80
        sort_years: 1724–1780
    type: [Companion]
    theme: [Education, Leisure, Studio]
    material: [Synthetic Materials | Ink, Synthetic Materials | Paper]
mentions: [color box, red lake]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Cesare Ripa, *Iconologie; ou Explication nouvelle de plusieurs images*** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.