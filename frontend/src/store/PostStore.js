import { observable, action, decorate } from "mobx";

class PostStore {

  title = '';
  tags = [];
  content = '';
  excerpt = '';
  coverImage = null;
  category = null;
  author = null;

  setContent(content) {
    this.content = content;
  }

  setTitle(title) {
    this.title = title;
  }

  setExcerpt(excerpt) {
    this.excerpt = excerpt;
  }

  setTags(tags) {
    this.tags = tags;
  }

  setCoverImage(coverImage){
    this.coverImage = coverImage;
  }

  setCategory(category){
    this.category = category
  }

  setAuthor(author){
    this.author = author
  }
}

decorate(PostStore, {
    title: observable,
    tags: observable,
    content: observable,
    excerpt: observable,
    coverImage: observable,
    category: observable,
    author: observable,
    setContent: action,
    setTitle: action,
    setTags: action
  });


const postStore = new PostStore();

export default postStore;