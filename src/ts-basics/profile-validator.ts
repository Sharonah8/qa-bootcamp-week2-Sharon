type Profile = {
    id: number 
    username: string
    settings?: {
        notifications: boolean
    } 
}

let testUser1: Profile = {
    id: 1,
    username: 'TestUser1',
    settings: {
        notifications: true
    }
}

let testUser2: Profile = {
    id: 2,
    username: 'TestUser2'
}

let testUser3: Profile = {
    id: 3,
    username: 'TestUser3',
    settings: {
        notifications: false
    }
}

function isNotified(user: Profile): boolean{
    return user.settings?.notifications ?? false
}

const users: Profile[] = [testUser1, testUser2, testUser3]

users.forEach(user => console.log(user.username, isNotified(user)))