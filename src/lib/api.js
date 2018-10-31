import axios from 'axios';
import queryString from 'query-string';

//포스트 쓰기
export const writePost = ({title, body, tags}) => axios.post('/api/posts', { title, body, tags });
//포스트 하나 읽기
export const getPost = (id) => axios.get(`/api/posts/${id}`);
//포스트 리스트 가져오기
export const getPostList = ({tag, page}) => axios.get(`/api/posts/?${queryString.stringify({tag, page})}`);
//포스트 수정하기
export const editPost = ({id, title, body, tags}) => axios.patch(`/api/posts/${id}`, {title, body, tags});
//포스트 삭제하기
export const removePost = (id) => axios.delete(`/api/posts/${id}`);
