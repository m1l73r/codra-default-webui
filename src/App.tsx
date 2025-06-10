import './App.css'
import Editor, { type EditorApi } from './comps/Editor'
import Explorer, { type ExplorerApi } from './comps/Explorer';

export default function App() {
  let editor: EditorApi | undefined;
  let explorer: ExplorerApi | undefined;
  console.log(explorer);

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div style={{ width: '200px', "flex-shrink": 0, "background-color": "red" }}>
        <Explorer api={(api) => explorer = api} on_file_click={(path) => editor?.open_file(path)} />
      </div>
      <div style={{ "flex-grow": 1, "background-color": "blue" }}>
        <Editor api={(api) => editor = api} />
      </div>
    </div>
  )
}


