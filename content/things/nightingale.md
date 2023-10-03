---
title: "Nightingale"
aliases: [nightingale]
layout: page
order: 132
tags: thing
object:
  - letter: "N"
    name: "Nightingale"
    thumbnail: "figures/things/nightingale.jpg"
    artist: Marie-Anne Collot
    time_span: 1748–1821
    owner:
      - first_name: Marie-Anne
        last_name: Collot
        years: 1748–1821
    type: [Gift]
    theme: [Animal, Gender, Identity, Money]
    material: [Animal]
mentions: [quill, watch, snuffbox, dog, marriage contract, burin, quill]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**On 15 May 1769 a nightingale arrived at the residence** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.