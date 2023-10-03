---
title: "Journal"
aliases: [journals]
layout: page
order: 124
tags: thing
object:
  - letter: "J"
    name: "Journal"
    thumbnail: "figures/things/journal.jpg"
    artist: Johann Georg Wille
    time_span: 1715–1808
    owner:
      - first_name: Johann Georg
        last_name: Wille
        years: 1715–1808
    type: [Companion, Souvenir]
    theme: [Community, Death, Everyday, Memory, Money]
    material: [Animal | Leather/Parchment, Synthetic Materials | Ink, Synthetic Materials | Paper]
mentions: [quill, hot-air balloon, order book]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**For four decades Johann-Georg Wille,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.