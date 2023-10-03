---
title: "Hot-Air Balloon"
aliases: [hot-air balloons]
layout: page
order: 122
tags: thing
object:
  - letter: "H"
    name: "Hot-Air Balloon"
    thumbnail: "figures/things/hot-air-balloon.jpg"
    artist: Jean-François Janinet
    time_span: 1752–1814
    owner:
      - first_name: Jean-François
        last_name: Janinet
        years: 1752–1814
    type: [Vehicle]
    theme: [Invention, Leisure, Studio, Travel]
    material: [Textile | Canvas]
mentions: [journal, bath, carriage, model]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**According to Denis Diderot,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.