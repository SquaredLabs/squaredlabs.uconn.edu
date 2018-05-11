<template>
  <div
    :class="{ 'padded': p,
              'marginned--horizontally': m == 'horizontal',
              'marginned--vertically': m == 'vertical',
              'layout__col--quarter': s == 'quarter' || s == null,
              'layout__col--third': s == 'third',
              'layout__col--half': s == 'half',
              'layout__col--pacman': s == 'pacman',
              'layout__col--whole': s == 'whole',
              'layout__col--centered-children': c == 'centered',
              'layout__col--spaced-between-children': c == 'spaced'
  }">
    <slot />
  </div>
</template>

<script>
/*
    A helper component that makes it much easier to use the Layout component
    m - Margin (vertical / horizontal)
    s - Size (quarter/third/half/pacman/whole) (default: quarter)
    c - Children layout (centered/spaced)
    p - Padded (true/false)
*/
export default {
  props: {
    m: { type: String, default: null },
    s: { type: String, default: null },
    c: { type: String, default: null },
    p: { type: Boolean, default: false }
  }
}
</script>
