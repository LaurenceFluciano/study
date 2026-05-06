
function createVector(capacity) {
    if (Number(capacity) === NaN)
        throw new Error("O valor fornecido não é um número válido.");

    const vector = {
        capacity: Math.floor(capacity),
        lastpos: -1,
        values: Array(capacity)
    }

    const listValues = () => {
        for (let i = 0; i <= vector.lastpos; i++)
        {
            console.log(vector.values[i])
        }
    } 

    const add = (value) => {
        if (vector.capacity == vector.lastpos-1)
            throw new Error("Impossivel inserir novos dados, limite atingindo.");

        vector.lastpos++;

        vector.values[vector.lastpos] = value; 
    }

    const addMany = (values) => {
        for (let value of values)
        {
            if (vector.capacity != vector.lastpos-1) {
                vector.lastpos++;
                vector.values[vector.lastpos] = value;
                continue 
            }
            
            break;
        }
    }

    const getByIndex = (index) => {
        if (index <= vector.lastpos)
            return vector.values[index]

        return null
    }

    const searchByValue = (value) => {

        for (let i = 0; i < vector.lastpos; i++)
        {
            if (vector.values[i] == value)
                return i
        }

        return -1
    }

    const removeByValue = (value) => {
        let index = searchByValue(value);

        if (index == -1)
            return;

        while(index < vector.lastpos)
        {
            vector.values[index] = vector.values[index+1] 
            index++
        }

        vector.lastpos--;
    }

    const removeByIndex = (index) => {
        if (index > values.lastpos && index < -1)
             throw new Error("Impossivel remover dados fora dos limites atuais do vetor.");
             
        while(index < vector.lastpos && index > -1)
        {
            vector.values[index] = vector.values[index+1] 
            index++
        }

        vector.lastpos--;
    }

    return {
        add,
        getByIndex,
        searchByValue,
        removeByValue,
        listValues,
        removeByIndex,
        addMany
    }
}

const vector = createVector(5);


vector.addMany([1,5,3])

vector.listValues()

const index = vector.searchByValue(5)

console.log(index + "\n")

vector.removeByValue(8)

vector.listValues()

