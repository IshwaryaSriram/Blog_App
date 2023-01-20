import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
            className="postImg"
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
        />
        <div className="postInfo">
            <br/>
            <div className="postCats">
                <span className="postCat" >Music</span>
                <span className="postCat" >Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}
