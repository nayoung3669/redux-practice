import React from "react";

const Sample = ({ post, users, loadingPost, loadingUsers }) => {
  return (
    <div>
      <section>
        {loadingPost && "로딩중 ..."}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </section>
      <hr />
      <section>
        {loadingUsers && "로딩중 ..."}
        {/* 유효성검사 */}
        {!loadingUsers && users && (
          <div>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.username}({user.email})
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default Sample;
