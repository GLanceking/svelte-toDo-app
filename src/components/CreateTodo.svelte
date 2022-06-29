<script>
  import shortid from 'shortid'
  import { todos, saveStorage } from '~/store/index.js' // index.js는 생략 가능
  let title = ''

  function createTodo() {
    if (!title | !title.trim()){ //title이 아니거니(빈데이터), trim해서 값이 없을때
      return
    }

    $todos.unshift({
      id: shortid.generate(),
      title: title // title로 축약 가능
    })
    
    $todos = $todos //svelte 반응성을 만들기 위해서 자기자신 변수로 할당
    saveStorage()
    
    title = '' // 마지막 로직 변수 '' 초기화
    console.log($todos)
  }

</script>

<div class="create-todo">
  <input bind:value={title} type="text" class="form-control"
  on:keyup={(event) => {
    if (event.key === 'Enter') createTodo() // 중괄호 생략했음
    }}
  />
  <button class="btn btn-primary"
  on:click={createTodo}>
    할 일 생성!</button>
</div>

<style lang="scss">
  .create-todo {
    display: flex;
    margin-top: 50px;
    .btn {
      width: 130px;
      height: 50px;
      font-weight: 700;
      margin-left: 10px;
      flex-shrink: 0;
    }
  }
</style>