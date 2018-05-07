<template>
  <div>
    <ul>
      <li>
        <router-link :to="{path: 'hello', query: {name: 'xxx1'}}">hello?name=xxx1</router-link>
      </li>
      <li>
        <router-link :to="{path: 'hello', query: {name: 'xxx5'}}">hello?name=xxx5</router-link>
      </li>
    </ul>
    <div class="col-sm-10">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
