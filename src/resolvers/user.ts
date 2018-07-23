export default {
    Mutation: {
        login: async (parent, { username, password }, { req }) => {
            console.log(parent, username, password, req)
        }
    }
}