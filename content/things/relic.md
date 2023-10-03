---
title: "Relic"
aliases: [relics]
layout: page
order: 140
tags: thing
object:
  - letter: "R"
    name: "Relic"
    thumbnail: "figures/things/relic.jpg"
    artist: Hyacinthe Rigaud
    time_span: 1659–1743
    owner:
      - first_name: Hyacinthe
        last_name: Rigaud
        years: 1659–1743
    type: [Apparel, Commodity, Companion, Container, Devotional Thing, Gift, Heirloom, Ritual Thing, Symbolic Thing]
    theme: [Family, Luxury, Religion]
    material: [Metal | Gold/Gilding, Plant Matter | Wood]
mentions: [will, watch, handkerchief, almanac]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**A relic—the physical remnants of a saint or holy figure**—lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.