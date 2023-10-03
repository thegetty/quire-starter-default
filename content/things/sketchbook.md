---
title: "Sketchbook"
aliases: [sketchbooks]
layout: page
order: 143
tags: thing
object:
  - letter: "S"
    name: "Sketchbook"
    thumbnail: "figures/things/sketchbook.jpg"
    artist: Jean-Michel Moreau the Younger
    time_span: 1741–1814
    owner:
      - first_name: Jean-Michel
        last_name: Moreau the Younger
        years: 1741–1814
    type: [Artwork, Companion, Souvenir, Tool]
    theme: [Education, Everyday, Family, Making, Studio, Travel]
    material: [Animal | Leather/Parchment, Metal | Gold/Gilding, Mineral | Chalk, Synthetic Materials | Paper]
mentions: [book, journal, '*crayon*', dog, armchair, wig, burin, shell, camera obscura, picture, votive, order book]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Jean-Michel Moreau’s sketchbook does not really look like a sketchbook** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.