---
title: "*Robe de Chambre*"
aliases: [robes de chambre, '*robe de chambre*', '*robes de chambre*']
layout: page
order: 141
tags: thing
object:
  - letter: "R"
    name: "*Robe de Chambre*"
    thumbnail: "figures/things/robe-de-chambre.jpg"
    artist: Louis-Michel Van Loo
    time_span: 1707–71
    owner:
      - first_name: Louis-Michel
        last_name: Van Loo
        years: 1707–71
    type: [Apparel]
    theme: [Gender, Identity, Luxury, Studio]
    material: [Textile | Silk, Textile | Wool]
mentions: [bed, handkerchief, palette, decoration, wig]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**“*Robe de chambre*” (dressing gown),** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.