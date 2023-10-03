---
title: "Écorché"
aliases: [écorchés]
layout: page
order: 116
tags: thing
object:
  - letter: "E"
    name: "Écorché"
    thumbnail: "figures/things/ecorche.jpg"
    artist: Jean-Antoine Houdon
    time_span: 1741–1828
    owner:
      - first_name: Jean-Antoine
        last_name: Houdon
        years: 1741–1828
    type: [Artwork, Tool]
    theme: [Death, Education, Health/Medicine, Louvre, Luxury, Making, Studio, Travel]
    material: [Metal | Bronze, Mineral | Clay, Synthetic Materials | Plaster]
mentions: [model, mannequin, modeling stand, armchair, table]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Houdon’s écorché is a thing with many stories,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.