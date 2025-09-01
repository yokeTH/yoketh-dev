import { Editor } from '@/components/editor';
import { EditorProvider } from '@/components/editor-provider';

const content = `# Yoke’s Block — built with Milkdown
- [Editor](/editor)
- [Readonly](/readonly)
`;

export default function Home() {
  return (
    <EditorProvider>
      <Editor
        value={content}
        readonly
      />
    </EditorProvider>
  );
}
