export default {
    Subscription: {
        counter: {
            subscribe: (parent, args, { ps }) => {
                const channel = Math.random().toString(36).substring(2, 15) // random channel name
                let count = 0
                setInterval(() => ps.publish(channel, { counter: { count: count++ } }), 2000)
                return ps.asyncIterator(channel)
            }
        }
    }
}