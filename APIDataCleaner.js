async function getPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        return data.map((elem) => {
            return {
                id: elem.id,
                title: elem.title
            }
        })

    } catch (err) {

        console.log(err);

    }
}

let a = await getPosts()
console.log(a)