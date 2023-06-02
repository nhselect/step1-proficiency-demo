<template>
  <div class="nhsuk-width-container" id="maincontentwrapper">
    <main class="nhsuk-main-wrapper" id="maincontent" tabindex="-1">
      <h1>Discussions</h1>
      <p class="nhsuk-body-l">
        Record discussions related to the programme.
      </p>
      <p>
        Posts may not be edited once posted. Discussions can be marked as 'closed' and locked for future posts once done.
      </p>
      <p class="nhsuk-body-l nhsuk-u-font-weight-bold">
        {{ discussionCount }} discussions ({{ discussionsOpen }} open)
      </p>
      <div class="buttons">
        <a class="nhsuk-button" href="#">
          Start new discussion
        </a>
      </div>
      <div>
        <ul class="nhsuk-card-group nhsuk-grid-row">
          <li class="nhsuk-card-group__item nhsuk-grid-column-full" v-for="item in discussions" :key="item.slug">
            <DiscussionItem
              :slug="item.slug"
              :title="item.title"
              :completed="item.completed || false"
              :completedAt="item.completedAt || null"
              :completedBy="item.completedBy || null"
              :created="item.created"
              :postCount="item.posts ? item.posts.length : 0"
              :participants="item.posts ? getParticipants(item.posts) : ''"
            >
            </DiscussionItem>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import DiscussionItem from '~/components/DiscussionItem.vue'

export default Vue.extend({
  name: "IndexPage",
  async asyncData({ $content, params }) {
    const slug = params.slug || "index";
    const discussions = await $content('discussions').sortBy('slug','desc').fetch()

    const discussionCount = discussions.length
    const discussionsOpen = discussions.filter(d => !d.completed).length

    return {
      discussions, discussionCount, discussionsOpen
    }
  },
  components: { DiscussionItem },
  methods: {
    getParticipants(posts) {
      const participants = [...new Set(posts.map((p) => p.author))]
      return participants
    }
  }
})
</script>


<style>

#maincontentwrapper {
  margin: 0 auto;
}
</style>