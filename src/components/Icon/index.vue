<template>
  <div class="icon" :class="[`icon--${name}`, `icon--${size}`, { 'has-align-fix': fixAlign }]">
    <svg class="icon__svg"><use :xlink:href="`#${name}--sprite`"></use></svg>
  </div>
</template>

<script>

import '@/assets/images/bold.svg?sprite';
import '@/assets/images/add_col_after.svg?sprite';
import '@/assets/images/add_row_before.svg?sprite';
import '@/assets/images/code.svg?sprite';
import '@/assets/images/delete_row.svg?sprite';
import '@/assets/images/hr.svg?sprite';
import '@/assets/images/link.svg?sprite';
import '@/assets/images/paragraph.svg?sprite';
import '@/assets/images/remove.svg?sprite';
import '@/assets/images/ul.svg?sprite';
import '@/assets/images/add_col_before.svg?sprite';
import '@/assets/images/combine_cells.svg?sprite';
import '@/assets/images/delete_table.svg?sprite';
import '@/assets/images/image.svg?sprite';
import '@/assets/images/mention.svg?sprite';
import '@/assets/images/quote.svg?sprite';
import '@/assets/images/strike.svg?sprite';
import '@/assets/images/underline.svg?sprite';
import '@/assets/images/add_row_after.svg?sprite';
import '@/assets/images/checklist.svg?sprite';
import '@/assets/images/delete_col.svg?sprite';
import '@/assets/images/github.svg?sprite';
import '@/assets/images/italic.svg?sprite';
import '@/assets/images/ol.svg?sprite';
import '@/assets/images/redo.svg?sprite';
import '@/assets/images/table.svg?sprite';
import '@/assets/images/undo.svg?sprite';

export default {
  props: {
    name: {},
    size: {
      default: 'normal',
    },
    modifier: {
      default: null,
    },
    fixAlign: {
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 .3rem;
  top: -.05rem;
  fill: currentColor;

  &.has-align-fix {
    top: -.1rem;
  }

  &__svg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

}

// svg sprite
body > svg,
.icon use > svg,
symbol {
  path,
  rect,
  circle,
  g {
    fill: currentColor;
    stroke: none;
  }

  *[d="M0 0h24v24H0z"] {
    display: none;
  }
}
</style>
