---
title: "Shell"
aliases: [shells]
layout: page
order: 142
tags: thing
object:
  - letter: "S"
    name: "Shell"
    thumbnail: "figures/things/shell.jpg"
    artist: François Boucher
    time_span: 1703–70
    owner:
      - first_name: François
        last_name: Boucher
        years: 1703–70
    type: [Collectible, Commodity, Tool]
    theme: [Global Commerce, Luxury]
    material: [Animal | Shell]
mentions: [wig, snuffbox, teacup, watch, palette, model, quill]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**The name and reputation of the painter and academician François Boucher** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.