---
title: "Document Box"
aliases: [document boxes]
layout: page
order: 113
tags: thing
object:
  - letter: "D"
    name: "Document Box"
    thumbnail: "figures/things/document-box.jpg"
    artist: Secretaries of the Académie Royale
    time_span: 1650–1793
    owner:
      - full_name: Secretaries of the Académie Royale
        years: 1650–1793
    type: [Container, Document, Ritual Thing]
    theme: [Administration, Community, Louvre]
    material: [Animal | Leather/Parchment, Metal | Bronze, Metal | Gold/Gilding, Plant Matter | Wood]
mentions: [funeral book, écorché, key, armchair]
---

{% for item in object %}
<img src="/_assets/images/{{ item.thumbnail }}" width="150"/>

**Type:** {% for i in item.type %}{{ i }}, {% endfor %}
**Theme:** {% for i in item.theme %}{{ i }}, {% endfor %}
**Material:** {% for i in item.material %}{{ i }}, {% endfor %}
{% endfor %}

**Still residing today in the archives** lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.