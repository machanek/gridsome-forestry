<template>
    <Layout>
            <div v-html="$page.post.imie"></div>
            <div v-html="$page.post.nazwisko"></div>
            <div v-html="$page.post.content"></div>
    </Layout>
</template>
<page-query>
query Specjalisci ($path: String!) {
  post: specjalisci (path: $path) {
    imie
    nazwisko
    content
  }
}
</page-query>