import { AsyncAction } from "overmind";
import { ServiceInjector } from "../util/ServiceInjector";
import { HttpClient } from "@angular/common/http";
import { Comment, Post } from "./state";

export const loadPosts: AsyncAction<void, Post[]> = ({ state }) => {
  return new Promise(resolve => {
    if (state.posts) {
      resolve(state.posts);
    } else {
      const httpClient = ServiceInjector.get(HttpClient);
      const url = "https://jsonplaceholder.typicode.com/posts";
      httpClient.get(url).subscribe((data: any) => {
        state.posts = data;
        resolve(state.posts);
      });
    }
  });
};

export const loadComments: AsyncAction<void, Comment[]> = ({ state }) => {
  return new Promise(resolve => {
    if (state.comments) {
      resolve(state.comments);
    } else {
      const httpClient = ServiceInjector.get(HttpClient);
      const url = "https://jsonplaceholder.typicode.com/comments";
      httpClient.get(url).subscribe((data: any) => {
        state.comments = data;
        resolve(state.comments);
      });
    }
  });
};
