const getPostsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
};

export default async function ListOfPosts() {
    const posts = await getPostsData();

    console.log('Hello World!')
    
    return (
        <div>
            <h1>Lists of Posts</h1>
            {
                posts.map((post: any ) => {
                    return <p>{posts.title}</p>
                })
            }
        </div>
    )
}