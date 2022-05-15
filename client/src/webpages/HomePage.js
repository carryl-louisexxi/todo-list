import { Flex, Box, Heading, Text, Input, Button,} from '@chakra-ui/react' 
import { useEffect, useState } from 'react'
import { RiDeleteBin5Fill, RiMarkPenFill } from 'react-icons/ri'
import { postTodo } from '../api/postTodo'
import { getTodos } from '../api/getTodos'
import { deleteTodo } from '../api/deleteTodo'


function Task ({data, todo, setTodos}) {

    const handleDelete = async () => {

        const confirmed =  window.confirm('Delete this task?')

        if(!confirmed) return

        const {error} = await deleteTodo(data.id)

        if(error) return console.log('error')

        const newTodos = todo.filter( t => t.id !== data.id)

        setTodos(newTodos)
    }

    return (
        <Flex mb='1' justify='space-between' align='center' w='100%' backgroundColor='purple.300' borderRadius='md' fontSize='sm'> 
            <Text p='1'> {data.text} </Text>
            <Box>
                <Button size='sm' onClick={() => handleDelete()}> <RiDeleteBin5Fill/> </Button>
            </Box>
        </Flex>
    )
}

function Tasks ({text}) {

    const [todo, setTodos] = useState([])

    const fetchTodos = async () => {

        const {todos, error} = await getTodos()

        if(error) return console.log(error) 

        setTodos(todos)
    }

    useEffect(() => {

        fetchTodos()

    }, [text])

    const task = todo.map(data => <Task key={data.text} data={data} todo={todo} setTodos={setTodos}/>)

    return (
        <Box mt='2'>
            {task}
        </Box>
    )
}

function ContextField () {

    const [todo, setTodo] = useState('')

    const handleChange = e => {
        setTodo(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        const text = {'text': todo}
        handleSubmitText(text)
        setTodo('')
    }

    const handleSubmitText = async (text) => {
        const {error} = await postTodo(text)
        if(error) return console.log('error')
    }

    return (
        <> 
            <form onSubmit={handleSubmit}>
                <Flex w='100%'>
                    <Input 
                        placeholder='Wash the dishes'
                        value={todo}
                        type='text'
                        onChange={handleChange} />
                    <Button 
                        ml='1'
                        type='submit'>
                        Submit
                    </Button>
                </Flex>
            </form>
            <Tasks text={todo}/>
        </>
    )
}

function Todo () {
    return (
        <Box mt='20'>
            <Heading> Todo List </Heading>
            <Box mt='4' w='50vw' h='50vh' borderRadius='md' p='2'>
                <ContextField />
            </Box>
        </Box>
    )
}

export default function HomePage() {

  return (
    <Flex justifyContent='center'>
        <Todo/>
    </Flex>
  )
}
