import React from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize: 10 });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className='list-group'>
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className='list-group-item'>
                User : {post.userId} Post : {post.id}
                <br />
                Title : {post.title}
                <br />
                Body : {post.body}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        className='btn btn-primary my-3 ms-1'
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading...' : 'Load More'}
      </button>
    </>
  );
};

export default PostList;
