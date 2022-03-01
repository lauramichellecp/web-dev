const WhoToFollowListItem = who => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src=${who.avatarIcon} width="50" height="50"/>
                </div>
                <div class="col-7 row">
                            <span class="pt-1 font bolded"> ${who.userName}
                                <i class="fas fa-check-circle"></i>
                            </span>
                    <span class="font"> ${who.handle}</span>
                </div>
                <div class="col-3">
                    <button class="btn btn-primary rounded-pill float-right">Follow</button>
                </div>
            </div>
        </li>
    `); }

export default WhoToFollowListItem;