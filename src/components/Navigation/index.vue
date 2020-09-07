<template>
  <div class="navigation">
    <div>
      <h1 class="navigation__logo">
        tiptap-startar-kit
      </h1>
      <github-button
        class="navigation__count"
        href="https://github.com/daisuke85a/tiptap-starter-kit"
        data-show-count="true"
        aria-label="Star daisuke85a/tiptap-starter-kit on GitHub"
      />
    </div>

    <div>
      <a class="navigation__link" href="https://tiptap.dev/" target="_blank">
        tiptap公式サイト
      </a>
      <a class="navigation__github-link" href="https://github.com/daisuke85a/tiptap-starter-kit" target="_blank">
        <icon class="navigation__icon" name="github" />
      </a>
    </div>

  </div>
</template>

<script>
import Icon from '@/components/Icon/index.vue';
import GithubButton from 'vue-github-button';

export default {
  components: {
    Icon,
    GithubButton,
  },
};
</script>

<style lang="scss" scoped>
.navigation {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: .75rem;
    background-color: #000;
    color: #fff;
    flex-wrap: wrap
}

.navigation__logo {
    display: inline-block;
    vertical-align: middle;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 .5rem 0 0
}

.navigation__icon {
    width: 1.5rem;
    height: 1.5rem
}

.navigation__count {
    display: inline-block;
    vertical-align: middle;
    margin-top: .3rem
}

.navigation__link {
    display: inline-block;
    color: hsla(0,0%,100%,.5);
    text-decoration: none;
    font-weight: 700;
    font-size: .9rem;
    padding: .1rem .5rem;
    border-radius: 3px
}

.navigation__link:hover {
    color: #fff;
    background-color: hsla(0,0%,100%,.1)
}

.navigation__github-link {
    margin-left: .5rem
}
</style>
