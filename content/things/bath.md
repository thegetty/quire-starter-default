---
title: "Bath"
aliases: [baths]
layout: page
order: 104
tags: thing
object:
  - letter: "B"
    name: "Bath"
    thumbnail: "figures/things/bath.jpg"
    artist: Joseph-Siffred Duplessis
    time_span: 1725–1802
    owner:
      - first_name: Joseph-Siffred
        last_name: Duplessis
        years: 1725–1802
    type: [Commodity, Furniture, Instrument]
    theme: [Everyday, Health/Medicine, Invention, Louvre, Luxury]
    material: [Metal | Copper]
mentions: [key, bed, glasses]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**What does it mean to own a thing** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.