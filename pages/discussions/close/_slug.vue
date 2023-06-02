<template>
  <div class="nhsuk-width-container" id="maincontentwrapper">
    <main class="nhsuk-main-wrapper" id="maincontent" tabindex="-1">
      <h1>Close discussion: <span class="nhsuk-caption-xl">{{ discussion.title }}</span></h1>
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
      <hr />
      <div class="buttons">
        <div class="nhsuk-form-group">

          <fieldset class="nhsuk-fieldset" aria-describedby="example-hint">
            <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
              <h1 class="nhsuk-fieldset__heading">
                Are you sure you want to close this discussion?
              </h1>
            </legend>

            <div class="nhsuk-hint" id="example-hint">
              No one will be able to post any further contributions once the discussion has been closed.
            </div>

            <div class="nhsuk-checkboxes">

              <div class="nhsuk-checkboxes__item">
                <input class="nhsuk-checkboxes__input" id="example-1" name="example" type="checkbox" value="email">
                <label class="nhsuk-label nhsuk-checkboxes__label" for="example-1">
                  I confirm this discussion has been completed and no further contributions are required
                </label>
              </div></div></fieldset></div>
        <a class="nhsuk-button" href="#">
          Close discussion
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