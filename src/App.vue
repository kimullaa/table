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
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
