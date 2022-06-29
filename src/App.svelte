<script>
  import { todos } from '~/store'
  import CreateTodo from '~/components/CreateTodo' //.svelte 확장자 생략
  import Todo from '~/components/Todo'

  const storageTodos = localStorage.getItem('todos') //windows. 전역객체는 생략해도 무관
  if (storageTodos) {
    $todos = JSON.parse(storageTodos)
  }
</script>

<div class="container">
  <CreateTodo></CreateTodo>
  <div class="todos">
    {#each $todos as todo (todo.id)}
    <Todo todo={todo} />
    {/each}
  </div>
</div>

<style lang="scss">
  .todos {
    padding: 20px 0
  }
</style>