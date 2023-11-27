import { Models } from "appwrite";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <div className="flex-betweeen">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creeator.$id}`}>
            <img
              src={
                post?.creator?.imageUrl ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="rounded-full w-12 lg:h-12"
            />
          </Link>
          <div className="lex flex-col">
            <p className="base-medium">
              {post.creator.name}
              </p>
            <div>
              <p>
                {post.$createdAt}
                -
                <p>
                  {post.location}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
