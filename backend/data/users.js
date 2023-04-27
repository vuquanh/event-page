import bcrypt from 'bcryptjs'

const users = [{
    name: 'Admin user',
    email: 'info@example.org',
    password: bcrypt.hashSync('123456', 10), 
    isAdmin: true,
},
{
    name: 'John Doe',
    email: 'john@example.org',
    password: bcrypt.hashSync('123456', 10),  

},
{
    name: 'Jane Doe',
    email: 'jane@example.org',
    password: bcrypt.hashSync('123456', 10),     
}
]

export default users