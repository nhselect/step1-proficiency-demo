<template>
  <div class="nhsuk-width-container" id="maincontentwrapper">
    <main class="nhsuk-main-wrapper" id="maincontent" tabindex="-1">
      <h1>{{ discussion.title }}</h1>
      <p class="nhsuk-body-s">Started on {{ discussion.created }}</p>
      <p>
        <span v-if="discussion.completed" class="nhsuk-tag nhsuk-tag--red">
          Completed at {{ discussion.completedAt }} by {{ discussion.completedBy }}
        </span>
        <span v-else class="nhsuk-tag nhsuk-tag--green">
          Open discussion
        </span>
      </p>
      <hr />
      <div>
        <ul class="nhsuk-card-group nhsuk-grid-row">
          <li class="nhsuk-card-group__item nhsuk-grid-column-full" v-for="(post, index) in discussion.posts" :key="index">
            <DiscussionComment
              :index = "index"
              :postedBy = "post.author"
              :postedAt = "post.postedAt"
              :comment = "post.content"
            >
          </DiscussionComment>
          </li>
        </ul>
      </div>
      <div v-if="discussion.completed">
        <p>This discussion has been completed so you can't add any more comments</p>
      </div>
      <div v-else class="buttons">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-label--l" for="newcomment">Add a comment:</label>
          <textarea class="nhsuk-textarea" name="newcomment" rows="5"></textarea>
        </div>
        <a class="nhsuk-button" href="#">
          Post
        </a>
        <a class="nhsuk-button nhsuk-button--secondary" href="#">
          Complete discussion
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import DiscussionComment from '~/components/DiscussionComment.vue'

export default Vue.extend({
  name: "IndexPage",
  async asyncData({ $content, params }) {
    const slug = params.slug || "index";
    const discussion = await $content('discussions/'+slug).fetch()

    const postCount = discussion.posts ? discussion.posts.length : 0

    return {
      discussion, postCount
    }
  },
  components: { DiscussionComment }
})
</script>


<style>
.nhsuk-card-group__item:nth-child(even) {
  margin-left: 32px;
}

#maincontentwrapper {
  margin: 0 auto;
}
</style>