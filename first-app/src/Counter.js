import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    var [count1, setCount1] = useState(3);
    const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"]
    return (
        <div>
            <h4>Текущее количество: {count}</h4>
            <h4>Текущее второе количество: {count1}</h4>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
            <button onClick={() => setCount(count - 1)}>Уменьшить</button>

            <button onClick={() => setCount1(count1 += arr[Math.ceil((arr.length - 1) * Math.random())])}>Увеличить</button>
        </div>
    );
}

export default Counter;