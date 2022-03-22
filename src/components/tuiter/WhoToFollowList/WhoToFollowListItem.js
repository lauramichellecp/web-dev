const WhoToFollowListItem = (
   {
        who = {
            avatarIcon: '/tuiter/pic/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" src={who.avatarIcon} width="50" height="50"/>
                    </div>
                    <div className="col-7 row">
                                <span className="pt-1 font bolded"> {who.userName}
                                    <i className="fas fa-check-circle"></i>
                                </span>
                        <span className="font"> {who.handle}</span>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary rounded-pill float-right">Follow</button>
                    </div>
                </div>
            </li>
        </>
    ); }

export default WhoToFollowListItem;