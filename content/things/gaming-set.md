---
title: "Gaming Set"
aliases: [gaming sets, game]
layout: page
order: 118
tags: thing
object:
  - letter: "G"
    name: "Gaming Set"
    thumbnail: "figures/things/gaming-set.jpg"
    artist: Jean-Étienne Liotard
    time_span: 1702–89
    owner:
      - first_name: Jean-Étienne
        last_name: Liotard
        years: 1702–89
    type: [Commodity, Container, Gift]
    theme: [Global Commerce, Leisure, Luxury, Travel]
    material: [Animal | Shell, Plant Matter | Wood, Synthetic Materials | Lacquer, Synthetic Materials | Paper, Textile | Silk]
mentions: [shells, teacup, color box, document box]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Jean-Étienne Liotard’s gaming set is an exquisite Chinese box,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.