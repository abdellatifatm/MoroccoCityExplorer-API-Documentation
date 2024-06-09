import { DefaultSidebar } from "./DefaultSidebar";
import { DocumentationContent } from "./DocumentationContent";

export default function Documentation() {
  return (
    <div className="flex">
      <DefaultSidebar />
      <DocumentationContent />
    </div>
  );
}
