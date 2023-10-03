---
title: "Carriage"
aliases: [carriages]
layout: page
order: 109
tags: thing
object:
  - letter: "C"
    name: "Carriage"
    thumbnail: "figures/things/carriage.jpg"
    artist: Jean-Baptiste Pigalle
    time_span: 1714–85
    owner:
      - first_name: Jean-Baptiste
        last_name: Pigalle
        years: 1714–85
    type: [Vehicle]
    theme: [Travel]
    material: [Plant Matter | Wood, Synthetic Materials | Glass, Synthetic Materials | Paint/Pigment, Textile | Silk]
mentions: [teacup, shell]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Prompted to consider carriages *and* artists in the eighteenth century,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.