import { createStore } from 'redux';

function gitRequest(state = 0, action) {
    switch (action.type) {
        case 'live':
            return state + 1;
        case 'button':
            return state - 1;
        default:
            return state;
    }
}

// Создаем хранилище Redux которое хранит состояние вашего приложения.
// Его API - { subscribe, dispatch, getState }.
let store = createStore(counter);

// Вы можете использовать subscribe() для обновления UI в ответ на изменения состояния.
// Обычно вы должны использовать библиотеку привязки (например, React Redux), а не использовать subscribe() напрямую.
// Однако также может быть полезно сохранить текущее состояние в localStorage.
store.subscribe(() =>
    console.log(store.getState()),
)

// Единственный способ изменить внутреннее состояние - это вызвать действие
// Действия могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
  // 1