---
title: "Votive"
aliases: [votives]
layout: page
order: 150
tags: thing
object:
  - letter: "V"
    name: "Votive"
    thumbnail: "figures/things/votive.jpg"
    artist: Pierre-Imbert Drevet
    time_span: 1697–1739
    owner:
      - first_name: Pierre-Imbert
        last_name: Drevet
        years: 1697–1739
    type: [Artwork, Devotional Thing, Ritual Thing, Symbolic Thing]
    theme: [Death, Family, Health/Medicine, Making, Religion, Studio]
    material: [Synthetic Materials | Ink, Synthetic Materials | Paper]
mentions: [sword, picture, écorché, '*robe de chambre*']
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**“Pray to God for him.”** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.