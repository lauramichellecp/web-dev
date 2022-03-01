const PostSummaryItem = post => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <span class="col-8 font">
                    <span class="fg-color-gray">${post.topic} </span></br>
                    <span class="bolded">${post.userName} <i class="fas fa-check-circle ps-1"></i></span>
                    <span class="fg-color-gray">   - ${post.time}</span></br>
                    <span class="bolded">${post.title}</span>
                </span>
                <span class="col-4">
                    <img class="rounded float-right" src=${post.image} width="80px"/>
                </span>
            </div>
        </li>
    `); }

export default PostSummaryItem;