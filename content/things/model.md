---
title: "Model"
aliases: [models]
layout: page
order: 130
tags: thing
object:
  - letter: "M"
    name: "Model"
    thumbnail: "figures/things/model.jpg"
    artist: Edme Bouchardon
    time_span: 1698–1762
    owner:
      - first_name: Edme
        last_name: Bouchardon
        years: 1698–1762
    type: [Instrument, Tool]
    theme: [Education, Making, Studio]
    material: [Animal | Wax, Mineral | Clay, Synthetic Materials | Plaster]
mentions: [modeling stand, '*porte-crayon*']
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**The word *model* (*modèle*) meant a number of different things** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.