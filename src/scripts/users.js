import axios from 'axios'

export const users = [
    {
        "username": "Adam La Morre",
        "first_name": "Adam",
        "last_name": "La Morre",
        "secret": "pass1234",
        "custom_json": {"gmt_offset": -7}
    },
    {
        "username": "Mandy Williams",
        "first_name": "Mandy",
        "last_name": "Williams",
        "secret": "pass1234",
        "custom_json": {"gmt_offset": 2}
    },
    {
        "username": "Zack Mado",
        "first_name": "Zack",
        "last_name": "Mado",
        "secret": "pass1234",
        "custom_json": {"gmt_offset": 0}
    },
    {
        "username": "Paul MacGee",
        "first_name": "Paul",
        "last_name": "MacGee",
        "secret": "pass1234",
        "custom_json": {"gmt_offset": 2}
    },
    {
        "username": "John Lu",
        "first_name": "John",
        "last_name": "Lu",
        "secret": "pass1234",
        "custom_json": {"gmt_offset": -4}
    },
    {
        "username": "Wendy Chin",
        "first_name": "Wendy",
        "last_name": "Chin",
        "secret": "pass1234",
        "custom_json": {"gmt_offset": -6}
    },
    {
        "username": "Darcy Manning",
        "first_name": "Darcy",
        "last_name": "Manning",
        "secret": "pass1234",
        "custom_json": {"gmt_offset": 6}
    },
]

export function createUsers() {
    users.map(user => {
        axios.put(
            'http://127.0.0.1:8000/users/',
            user,
            {headers: {'Private-Key': process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY}}
        )
        .then(r => console.log('get or create user', r))
        .catch(e => console.log('get/create user error', e))
    })
}