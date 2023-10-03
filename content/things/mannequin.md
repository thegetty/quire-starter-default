---
title: "Mannequin"
aliases: [mannequins]
layout: page
order: 128
tags: thing
object:
  - letter: "M"
    name: "Mannequin"
    thumbnail: "figures/things/mannequin.jpg"
    artist: Jean-Baptiste Le Prince
    time_span: 1734–81
    owner:
      - first_name: Jean-Baptiste
        last_name: Le Prince
        years: 1734–81
    type: [Prop, Tool]
    theme: [Making, Studio, Travel]
    material: [Animal | Hair, Plant Matter | Cork, Plant Matter | Wood, Textile | Silk]
mentions: [wig, écorché, color box, '*porte-crayon*', camera obscura, dressing-up box, sword, table]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Four lifeless figures once stood in Jean-Baptiste Le Prince’s studio.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.