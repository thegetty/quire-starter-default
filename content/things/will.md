---
title: "Will"
aliases: [wills]
layout: page
order: 154
tags: thing
object:
  - letter: "W"
    name: "Will"
    thumbnail: "figures/things/will.jpg"
    artist: Jean-Baptiste Massé
    time_span: 1687–1767
    owner:
      - first_name: Jean-Baptiste
        last_name: Massé
        years: 1687–1767
    type: [Document]
    theme: [Administration, Death, Family, Friendship, Identity, Money, Religion]
    material: [Animal | Leather/Parchment, Synthetic Materials | Ink, Synthetic Materials | Paper]
mentions: [quill, snuffbox, votive, picture]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**On 2 October 1765, the miniature painter Jean-Baptiste Massé** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.