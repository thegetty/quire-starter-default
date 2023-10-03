---
title: "Lantern"
aliases: [lanterns]
layout: page
order: 126
tags: thing
object:
  - letter: "L"
    name: "Lantern"
    thumbnail: "figures/things/lantern.jpg"
    artist: Jean-Siméon Chardin
    time_span: 1699–1779
    owner:
      - first_name: Jean-Siméon
        last_name: Chardin
        years: 1699–1779
      - first_name: Charles-Nicolas
        last_name: Cochin
        years: 1715–90
        sort_years: 1715–1790
      - first_name: Claude-François
        last_name: Desportes
        years: 1695–1774
      - first_name: Pierre-André
        last_name: Jacquemin
        years: 1720–73
      - first_name: Jean-Baptiste
        last_name: Lemoyne
        years: 1704–78
      - first_name: Jean-Baptiste
        last_name: Pigalle
        years: 1714–85
      - first_name: Claude-Joseph
        last_name: Vernet
        years: 1714–89
      - first_name: Joseph-Marie
        last_name: Vien
        years: 1716–1809
    type: [Instrument]
    theme: [Community, Gender, Louvre]
    material: [Synthetic Materials | Glass]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**The lantern is exceptional in this book.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.