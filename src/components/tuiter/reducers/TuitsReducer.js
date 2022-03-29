import tuits from "../data/tuits.json";

const TuitsReducer = (state = tuits, action) => {
    switch (action.type) {
          case "create-tuit":
              const newTuit = {
                  tuit: action.tuit,
                  liked: false,
                  _id: (new Date()).getTime() + '',
                  postedBy: {
                      "username": "ReactJS"
                  },
                  handle: "Laura",
                  stats: {
                      retuits: 111,
                      likes: 222,
                      replies: 333
                  },
                  attachments: {
                      img: "/tuiter/pic/profile.jpg"
                  },
                  time: "last month",
                  avatarImg: "/tuiter/pic/profile.jpg"
              }
              return [
                  newTuit,
                  ...state
              ];
          case "delete-tuit":
              return state.filter(tuit => tuit._id !== action.tuit._id);
          case "like-tuit":
              return state.map(tuit => {
                 if(tuit._id === action.tuit._id) {
                      if(tuit.liked === true) {
                          tuit.liked = false;
                          tuit.stats.likes--;
                      } else {
                          tuit.liked = true;
                          tuit.stats.likes++;
                      }
                      return tuit;
                 } else {
                      return tuit;
                 }
              });
        default:
            return tuits;
    }
}
export default TuitsReducer;