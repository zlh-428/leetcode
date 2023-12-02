function reconstructQueue(people: number[][]): number[][] {
    let queue: number[][] = [];

    people.sort((a, b) => {
        return b[0] !== a[0] ? b[0] - a[0] : a[1] - b[1]
    })

    for (let i: number = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i]);
    }
    return queue;
};