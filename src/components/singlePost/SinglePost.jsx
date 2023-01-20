import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            
            <img 
                src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt=""
                className="singlePostImg"
            />
            <h1 className="singlePostTitle">Blog Article Title
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Abc</b>
                </span>
                <span className="singlePostDate">1hr ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, ea soluta accusamus placeat eum laudantium? 
                Accusamus totam expedita dolor quae voluptatum laborum hic distinctio possimus voluptate minus, ducimus, natus alias.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, ea soluta accusamus placeat eum laudantium? 
                Accusamus totam expedita dolor quae voluptatum laborum hic distinctio possimus voluptate minus, ducimus, natus alias.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, ea soluta accusamus placeat eum laudantium? 
                Accusamus totam expedita dolor quae voluptatum laborum hic distinctio possimus voluptate minus, ducimus, natus alias.
                <br></br>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, ea soluta accusamus placeat eum laudantium? 
                Accusamus totam expedita dolor quae voluptatum laborum hic distinctio possimus voluptate minus, ducimus, natus alias.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, ea soluta accusamus placeat eum laudantium? 
                Accusamus totam expedita dolor quae voluptatum laborum hic distinctio possimus voluptate minus, ducimus, natus alias.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, ea soluta accusamus placeat eum laudantium? 
                Accusamus totam expedita dolor quae voluptatum laborum hic distinctio possimus voluptate minus, ducimus, natus alias.
            </p>
        </div>
    </div>
  )
}
