import { observable, action, decorate } from "mobx";

class PostStore {
  
  title = '';

  content = null;

  setContent(content) {
    this.content = content;
  }

  setTitle(title) {
    this.title = title;
  }

}
decorate(PostStore, {
    title: observable,
    content: observable,
    setContent: action,
    setTitle: action
  });


const postStore = new PostStore();

export default postStore;