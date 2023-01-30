import React, {useState} from 'react';

type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}
type PropsTypes = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}
function useValeryiaState(m: string) {
    return {
        message: m,
        setMessage: function() {
        }
    }
}
 const ManComponent: React.FC<PropsTypes> = ({title,man,...props}) => {
    /*    const {title, man} = props;*/
    const [message, setMessage] = useState('hello');
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{props.car.model}</div>
        <div>
            {man.name}
        </div>
    </div>
}