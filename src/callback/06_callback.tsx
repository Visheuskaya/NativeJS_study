import React, {ChangeEvent, MouseEvent} from 'react';
// чуть колбэка что его запустит кто-то другой,не мы
// обработка событий UI

const callback = (): number => {
    alert('hey')
    return 12
}
window.setTimeout(callback, 1000)


export const User = () => {
    const removeUser = (e: MouseEvent<HTMLButtonElement>) => {
        //что же такое event

        alert('user should be deleted')
    }
    const saveUser = () => {
        alert('user should be saved')
    }
    const focusLastBlur = () => {

    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age change:' + e.currentTarget.value)
    }
    return <div> <textarea onChange={onNameChanged}
                           onBlur={focusLastBlur}
    > Valeryia</textarea>
        <input onChange={onAgeChange} type={'number'}/>
        <button onClick={removeUser}>Delete</button>
        <button onClick={saveUser}>Save</button>
    </div>
}
// объект события

