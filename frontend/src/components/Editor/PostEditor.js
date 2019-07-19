import React from "react";
import ReactDOMServer from "react-dom/server";
import { observer } from "mobx-react";
import PostStore from "../../store/PostStore";



import Editor, { Editable, createEmptyState } from '@react-page/core';

import { imagePlugin } from '@react-page/plugins-image';
import spacer from '@react-page/plugins-spacer';
import native from '@react-page/plugins-default-native';
//import slate from '@react-page/plugins-slate';
import slate from 'ory-editor-plugins-slate-sercan';
import video from '@react-page/plugins-video';
import divider from '@react-page/plugins-divider';
import highlightPlugin from "./highlight/HighlightPlugin";

import '@react-page/core/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-html5-video/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';

// The default ui components
import { Trash, DisplayModeToggle, Toolbar } from '@react-page/ui';
import '@react-page/ui/lib/index.css';



// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
  content: [slate(), imagePlugin(), video, spacer, divider, highlightPlugin],
  native
};

class PostEditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: this.props.content || createEmptyState() };
  }

  componentWillMount() {
    this.editor = new Editor({
      plugins,
      editables: [this.state.editorState],
      defaultPlugin: slate()
    });
    PostStore.setContent(this.props.content);
  }

  handleChange(value) {
    this.setState({ editorState: value }, () => {
      PostStore.setContent(value);
    });
  }

  render() {
    return (
      <div>
        <Editable
          editor={this.editor}
          id={this.state.editorState.id}
          onChange={state => this.handleChange(state)}
        />

        <Trash editor={this.editor} />
        <DisplayModeToggle editor={this.editor} />
        <Toolbar editor={this.editor} />
      </div>
    );
  }
}

const PostEditor = observer(PostEditorComponent);
export { PostEditor };
