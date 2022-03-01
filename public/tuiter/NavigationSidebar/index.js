const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="list-group-item" href="home.html" >
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Home</div>
                    </div>
                </a>
                <a class="list-group-item active"  href="explore.html">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-hashtag"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Explore</div>
                    </div>
                </a>
                <a class="list-group-item" href="../notifications.html" >
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Messages</div>
                    </div>
                </a>
                <a class="list-group-item" href="../messages.html" >
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Messages</div>
                    </div>
                </a>
                <a class="list-group-item" href="../bookmarks.html" >
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-bookmark"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Bookmarks</div>
                    </div>
                </a>
                <a class="list-group-item" href="../lists.html" >
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-list"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Lists</div>
                    </div>

                </a>
                <a class="list-group-item" href="../profile.html" >
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Profile</div>
                    </div>
                </a>
                <a class="list-group-item" href="../more.html" >
                    <div class="row" style="flex-wrap: nowrap;">
                        <div class="col-2 fa-stack">
                            <i class="fas fa-circle fa-stack-1x"></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x ellipsis-style"></i>
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
