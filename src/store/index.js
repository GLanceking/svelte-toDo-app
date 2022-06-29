import { writable, get } from 'svelte/store'
// get 함수를 사용하여 데이터를 얻을 수 있다

export const todos = writable([]) // todos란 이름의 배열 데이터는 writable() 넣어서 수정가능

export function saveStorage() {
  window.localStorage.setItem('todos', JSON.stringify(get(todos)))
}