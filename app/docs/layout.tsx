export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose 
    prose-neutral 
    dark:prose-invert 
    prose-h1:text-3xl
    prose-p:text-[17px]
    max-w-3xl mx-auto py-10 ml-5 lg:ml-20 mt-18 mr-1">
      {children}
    </div>
  );
}
