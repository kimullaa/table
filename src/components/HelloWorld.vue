<template>
  <div>
    <v-client-table
    :columns="columns"
    :options="options"
    :data="data">
    <router-link slot="name" slot-scope="props" :to="`/names/${props.row.id}`">
      {{props.row.name}}
    </router-link>
  </v-client-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String
  },
  data () {
    return {
      options: {
        templates: {
          group_name (h, row) {
            return row.group.name
          }
        },
        filterByColumn: true,
        initFilters: {
          'name': this.name
        },
        headings: {
          name: '名前',
          email: 'メールアドレス',
          group_name: 'グループ名'
        }
      },
      columns: [
        'name',
        'email',
        'group_name'
      ],
      data: [
        {
          'id': 1,
          'name': 'xxx1',
          'email': 'xxx1xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 2,
          'name': 'xxx2',
          'email': 'xxx2xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 3,
          'name': 'xxx3',
          'email': 'xxx3xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 4,
          'name': 'xxx4',
          'email': 'xxx4xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 5,
          'name': 'xxx5',
          'email': 'xxx5xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 6,
          'name': 'xxx6',
          'email': 'xxx6xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 7,
          'name': 'xxx7',
          'email': 'xxx7xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 8,
          'name': 'xxx8',
          'email': 'xxx8xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 9,
          'name': 'xxx9',
          'email': 'xxx9xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 10,
          'name': 'xxx10',
          'email': 'xxx10xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 11,
          'name': 'xxx11',
          'email': 'xxx11xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 12,
          'name': 'xxx12',
          'email': 'xxx12xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 13,
          'name': 'xxx13',
          'email': 'xxx13xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 14,
          'name': 'xxx14',
          'email': 'xxx14xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 15,
          'name': 'xxx15',
          'email': 'xxx15xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 16,
          'name': 'xxx16',
          'email': 'xxx16xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 17,
          'name': 'xxx17',
          'email': 'xxx17xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 18,
          'name': 'xxx18',
          'email': 'xxx18xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 19,
          'name': 'xxx19',
          'email': 'xxx19xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 20,
          'name': 'xxx20',
          'email': 'xxx20xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        },
        {
          'id': 2000,
          'name': 'xxx2000',
          'email': 'xxx2000xxx.xxx',
          'group': {
            'name': 'AAA'
          }
        }
      ]
    }
  }
}
</script>
