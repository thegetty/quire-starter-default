---
title: "Letters"
aliases: [letters]
layout: page
order: 127
tags: thing
object:
  - letter: "L"
    name: "Letters"
    thumbnail: "figures/things/letters.jpg"
    artist: Hyacinthe Rigaud
    time_span: 1659–1743
    owner:
      - first_name: Hyacinthe
        last_name: Rigaud
        years: 1659–1743
    type: [Document, Ritual Thing, Symbolic Thing]
    theme: [Administration, Identity]
    material: [Animal | Wax, Synthetic Materials | Ink, Synthetic Materials | Paper]
menitons: [order book, journal]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Becoming a member of the Académie**—lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.