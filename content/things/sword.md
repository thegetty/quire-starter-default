---
title: "Sword"
aliases: [swords]
layout: page
order: 146
tags: thing
object:
  - letter: "S"
    name: "Sword"
    thumbnail: "figures/things/sword.jpg"
    artist: François Lemoyne
    time_span: 1688–1737
    owner:
      - first_name: François
        last_name: Lemoyne
        years: 1688–1737
    type: [Apparel, Commodity, Symbolic Thing, Weapon]
    theme: [Antiquity, Death, Gender, Health/Medicine, Identity, Louvre]
    material: [Metal | Gold/Gilding, Metal | Steel]
mentions: [wig, table, watch, decoration, book]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Many of the things in this book were present when their owners died,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.