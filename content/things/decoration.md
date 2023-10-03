---
title: "Decoration"
aliases: [decorations]
layout: page
order: 112
tags: thing
object:
  - letter: "D"
    name: "Decoration"
    thumbnail: "figures/things/decoration.jpg"
    artist: Joseph-Marie Vien
    time_span: 1716–1809
    owner:
      - first_name: Joseph-Marie
        last_name: Vien
        years: 1716–1809
    type: [Apparel, Ritual Thing, Symbolic Thing]
    theme: [Identity, Memory]
    material: [Metal | Gold/Gilding, Synthetic Materials | Paint/Pigment, Textile | Silk]
mentions: [sword, letters]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**It is not often that we know the exact moment an artist acquired a possession.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.