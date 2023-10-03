---
title: "Picture"
aliases: [pictures]
layout: page
order: 136
tags: thing
object:
  - letter: "P"
    name: "Picture"
    thumbnail: "figures/things/picture.jpg"
    artist: Nicolas de Largillière
    time_span: 1656–1746
    owner:
      - first_name: Nicolas de
        last_name: Largillière
        years: 1656–1746
    type: [Artwork]
    theme: [Identity, Religion]
    material: [Metal | Gold/Gilding, Synthetic Materials | Paint/Pigment, Textile | Canvas]
mentions: [model, armchair, bed, gaming set, lantern, camera obscura, harpsichord]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Virtually all eighteenth-century artists owned pictures.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.