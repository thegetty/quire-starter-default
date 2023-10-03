---
title: "Bed"
aliases: [beds]
layout: page
order: 105
tags: thing
object:
  - letter: "B"
    name: "Bed"
    thumbnail: "figures/things/bed.jpg"
    artist: Charles-Antoine Coypel
    time_span: 1694–1752
    owner:
      - first_name: Charles-Antoine
        last_name: Coypel
        years: 1694–1752
    type: [Furniture, Ritual Thing]
    theme: [Family, Identity, Memory, Louvre, Luxury]
    material: [Plant Matter | Wood, Synthetic Materials | Paint/Pigment, Textile | Cotton, Textile | Silk, Textile | Wool]
mentions: [journal, teacup, carriage]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Charles-Antoine Coypel’s bed does not survive,** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.