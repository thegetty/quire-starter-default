---
title: "Watch"
aliases: [watches]
layout: page
order: 151
tags: thing
object:
  - letter: "W"
    name: "Watch"
    thumbnail: "figures/things/watch.jpg"
    artist: Charles-Antoine Coypel
    time_span: 1694–1752
    owner:
      - first_name: Charles-Antoine
        last_name: Coypel
        years: 1694–1752
    type: [Apparel, Collectible, Commodity, Gift, Instrument, Symbolic Thing]
    theme: [Community, Invention, Louvre, Luxury, Money, Religion]
    material: [Metal | Gold/Gilding, Mineral | Gem]
mentions: [shell, snuffbox, bed, handkerchief, sword, will]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Amid the extensive collection of *bijoux*** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.