---
title: "Intaglio"
aliases: [intaglios]
layout: page
order: 123
tags: thing
object:
  - letter: "I"
    name: "Intaglio"
    thumbnail: "figures/things/intaglio.jpg"
    artist: Charles-Joseph Natoire
    time_span: 1700–77
    owner:
      - first_name: Charles-Joseph
        last_name: Natoire
        years: 1700–77
    type: [Apparel, Collectible, Souvenir]
    theme: [Antiquity, Death, Friendship, Memory, Travel]
    material: [Mineral | Gem]
mentions: [model, shell]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**On 14 December 1778, the collection of the history painter** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.