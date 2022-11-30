---
layout: base.11ty.js
order: 5
class: backmatter
outputs:
  - epub
  - pdf
toc: false
---

{% copyright %}

{% if publication.identifier.isbn %}
ISBN: {{ publication.identifier.isbn }}
{% endif %}
