import { Component, useEffect, useState, useRef } from 'react';

import { Button } from '../Button/Button';
import { PostsError } from './PostsError/PostsError';

import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts';

import { getPostsService } from '../../services/postsService';
import { Status } from '../../constants/Status';

const HEADER_OFFSET = 600;

export const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [status, setStatus] = useState(Status.IDLE)
  const [search, setSearch] = useState('')
  const containerRef = useRef(null)
  const isMounted = useRef(false)

  useEffect(() => {
    getFetchedPosts()
  }, [])

  useEffect(() => {

    if (isMounted.current) {
      console.log(isMounted.current);
      const { scrollHeight } = containerRef.current
      window.scrollTo({ top: scrollHeight - HEADER_OFFSET, behavior: 'smooth' })
    }

  }, [posts?.page])

  const getFetchedPosts = async (params) => {
    setStatus(Status.LOADING)
    try {
      const data = await getPostsService(params)
      setPosts(data)
      setStatus(Status.SUCCESS)
    } catch {
      setStatus(Status.ERROR)
    }
  }

  const handleChangePage = (page) => {
    getFetchedPosts({ page, search })
  }

  const handleLoadMore = () => {
    (async () => {
      setStatus(Status.LOADING)
      try {
        const data = await getPostsService({ page: posts.page + 1 })
        setPosts({ ...data, data: [...posts.data, ...data.data] })
        setStatus(Status.SUCCESS)
      } catch {
        setStatus(Status.ERROR)
      }
    })()
    isMounted.current = true
  }

  const handleChangeSearch = event => {
    setSearch(event.target.value)
  }

  const handleSubmitRequest = () => {
    getFetchedPosts({ search })
  }

  // if (status === Status.LOADING || status === Status.IDLE) {
  //   return <PostsLoader />;
  // }

  if (status === Status.ERROR) {
    return <PostsError />
  }

  if (status === Status.SUCCESS && !posts.data) {
    return <></>
  }

  const canLoadMore = posts?.page < posts?.total_pages

  return (
    <>
      <SearchPosts search={search} onChangeSearch={handleChangeSearch} onSearchRequest={handleSubmitRequest} />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div ref={containerRef} className="row">
          {posts?.data.map(post => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      {status === Status.LOADING || status === Status.IDLE && <PostsLoader />}

      <div className="pagination d-flex flex-column align-items-center">
        {/* <div className="btn-group my-2 mx-auto btn-group-lg">
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button
              disabled={posts.page === index + 1}
              onClick={() => {
                handleChangePage(index + 1)
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              key={index}
            >{index + 1}</Button>
          ))}
        </div> */}

        {canLoadMore && <button onClick={handleLoadMore} className='btn btn-primary rounded w-50'>Load more</button>}
      </div>
    </>
  );
}


// export class Posts extends Component {
//   state = {
//     posts: null,
//     status: Status.IDLE,
//     searchQuery: '',
//   };

//   getSnapshotBeforeUpdate() {
//     return document.body.scrollHeight - HEADER_OFFSET;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (prevState.posts && prevState.posts?.data?.length !== this.state.posts?.data?.length) {
//       window.scrollTo({ top: snapshot, behavior: 'smooth' });
//     }
//   }

//   componentDidMount() {
//     this.getFetchedPosts()
//   }

//   getFetchedPosts = async (params) => {
//     this.setState({ status: Status.LOADING })

//     try {
//       const data = await getPostsService(params)
//       this.setState({ posts: data, status: Status.SUCCESS })
//     } catch {
//       this.setState({ status: Status.ERROR })
//     }
//   }

//   handleChangePage = (page) => {
//     const { searchQuery } = this.state
//     this.getFetchedPosts({ page, search: searchQuery })
//   }

//   handleChangeSearch = event => {
//     this.setState({ searchQuery: event.target.value })
//   }

//   handleSubmitRequest = () => {
//     const { searchQuery } = this.state
//     this.getFetchedPosts({ search: searchQuery })
//   }

//   render() {
//     const { posts, status, searchQuery } = this.state;

//     if (status === Status.LOADING || status === Status.IDLE) {
//       return <PostsLoader />;
//     }

//     if (status === Status.ERROR) {
//       return <PostsError />
//     }

//     if (status === Status.SUCCESS && !posts.data) {
//       return <></>
//     }

//     return (
//       <>
//         <SearchPosts search={searchQuery} onChangeSearch={this.handleChangeSearch} onSearchRequest={this.handleSubmitRequest} />

//         <div className="container-fluid g-0 pb-5 mb-5">
//           <div className="row">
//             {posts.data.map(post => (
//               <PostsItem key={post.id} post={post} />
//             ))}
//           </div>
//         </div>

//         <div className="pagination">
//           <div className="btn-group my-2 mx-auto btn-group-lg">
//             {[...Array(posts.total_pages)].map((_, index) => (
//               <Button
//                 disabled={posts.page === index + 1}
//                 onClick={() => {
//                   this.handleChangePage(index + 1)
//                   window.scrollTo({ top: 0, behavior: 'smooth' });
//                 }}
//                 key={index}
//               >{index + 1}</Button>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
