---
title: "Handkerchief"
aliases: [handkerchiefs]
layout: page
order: 120
tags: thing
object:
  - letter: "H"
    name: "Handkerchief"
    thumbnail: "figures/things/handkerchief.jpg"
    artist: Charles-Nicolas Cochin
    time_span: 1715–90
    owner:
      - first_name: Charles-Nicolas
        last_name: Cochin
        years: 1715–90
        sort_years: 1715–1790
    type: [Apparel, Commodity, Companion, Gift, Tool]
    theme: [Death, Everyday, Friendship, Health/Medicine]
    material: [Textile | Cotton, Textile | Linen]
mentions: [decoration, snuffbox, '*robe de chambre*', palette, red lake]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**On 30 June 1782, the draftsman and printmaker** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.