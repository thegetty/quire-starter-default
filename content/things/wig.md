---
title: "Wig"
aliases: [wigs]
layout: page
order: 153
tags: thing
object:
  - letter: "W"
    name: "Wig"
    thumbnail: "figures/things/wig.jpg"
    artist: Claude-Joseph Vernet
    time_span: 1714–89
    owner:
      - first_name: Claude-Joseph
        last_name: Vernet
        years: 1714–89
    type: [Apparel]
    theme: [Gender, Luxury, Studio]
    material: [Animal | Hair, Synthetic Materials | Plaster, Textile | Silk]
mentions: [order book, sword, '*robe de chambre*']
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**In July 1762 Claude-Joseph Vernet was on the hunt for a new wigmaker.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.