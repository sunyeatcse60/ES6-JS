// console.log('i love bangladesh')


function loadPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(data){
    const postDiv = document.getElementById('post-div');

    for( const post of data){
        // console.log(post);
        const div1 = document.createElement('div');
        div1.classList.add('post');
        div1.innerHTML = ` 
        <h4> user- ${post.userId}</h4>
        <h5>Post titel: ${post.title} </h5>
        <p> Post Description: ${post.body} </p>
        `;
        postDiv.appendChild(div1);
    }
}

loadPosts();