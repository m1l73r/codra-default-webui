import { createSignal, onMount, For } from "solid-js";

interface ExplorerProps {
  api?: (api: ExplorerApi) => void;
  on_file_click?: (path: string) => void;
}

export interface ExplorerApi { }

export default function Explorer(props: ExplorerProps) {
  let websocket: WebSocket;
  const [paths, setPaths] = createSignal<string[]>([]);

  function handle_message(msg: any) {
    if (msg.init_explorer) {
      init_explorer(msg.init_explorer);
    }
  }

  function init_explorer(receivedPaths: any) {
    const PATHS: string[] = receivedPaths;
    console.log("paths: ", PATHS);
    setPaths(PATHS);
  }

  onMount(() => {
    websocket = new WebSocket("ws://localhost:3000/explorer");
    websocket.onopen = () => console.log("explorer ws connected");
    websocket.onmessage = (message) => handle_message(JSON.parse(message.data));

    // Setup API
    props.api?.({});
  });

  return (
    <div>
      <ul>
        <For each={paths()}>
          {(path) => (
            <li
              style={{ cursor: "pointer", "margin-bottom": "0.5em" }}
              onClick={() => props.on_file_click?.(path)}
            >
              {path}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

